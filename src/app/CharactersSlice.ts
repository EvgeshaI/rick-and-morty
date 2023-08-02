import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAllCharacters, ICharacter, IParams} from "./types";
import {MonitoringClient} from "../api/RickAndMortyClient";

export interface CharactersState {
    characters: IAllCharacters | null
    selectedCharacter: ICharacter | null
    errorMessage: string | null
    nextUrl: string | null
    prevUrl: string | null
}

const initialState: CharactersState = {
    characters: null,
    selectedCharacter: null,
    errorMessage: null,
    nextUrl: null,
    prevUrl: null
};

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharacters: (state, action:PayloadAction<IAllCharacters>) => {
            state.characters = action.payload
        },
        setError: (state, action:PayloadAction<string | null>) => {
            state.errorMessage = action.payload
        },
        resetCharacters: (state) => {
            state.characters = null
        },
        deleteErrorMessage: (state) => {
            state.errorMessage = null
        },
        setNextAndPrevUrls: (state, action:PayloadAction<IAllCharacters>) => {
            state.nextUrl = action.payload.info.next
            state.prevUrl = action.payload.info.prev
        },
        selectCharacter: (state, action: PayloadAction<ICharacter>) => {
            state.selectedCharacter = action.payload
        },
        cleanSelectCharacter: (state) => {
            state.selectedCharacter = null
        }
    },
});

export const {
    setCharacters,
    setError,
    resetCharacters,
    deleteErrorMessage,
    setNextAndPrevUrls,
    selectCharacter,
    cleanSelectCharacter
} = charactersSlice.actions;


export const getCharactersAsync = (params?: IParams) => async (dispatch: any) => {
    try {
        let result = await MonitoringClient.getAllCharacters(params)
        dispatch(setCharacters(result))
        dispatch(deleteErrorMessage())
        dispatch(setNextAndPrevUrls(result))
    }catch (error){
        // @ts-ignore
        const message = error.data.data.error
        dispatch(setError(message))
        dispatch(resetCharacters())
        console.log(message)
    }

}
export const selectCharacterAsync = (id: number) => async (dispatch: any) => {
    let result = await MonitoringClient.getInfoOfCharacter(id)
    dispatch(selectCharacter(result))

}
export default charactersSlice.reducer;
import React, {FC, useEffect} from "react";
import styles from "./characters.module.css"
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getCharactersAsync} from "../../app/CharactersSlice";
import {OneCharacter} from "./OneCharacter";


type CharactersPropsType = {
    setIsOpenCharacterInfo: (isOpenInfo: boolean) => void
}

export const Characters:FC<CharactersPropsType> = (props) => {
    const {
        characters,
        errorMessage
    } = useAppSelector((state) => state.characters);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getCharactersAsync())
    }, [])
    return (
        <div className={styles.charactersContainer}>
            {characters &&
                <>
                    {characters.results.map(el =>
                        <OneCharacter results={el}
                                      key={el.id}
                                      setIsOpenCharacterInfo={props.setIsOpenCharacterInfo}
                        />)}
                </>
            }
            {errorMessage &&
                <div className={styles.errorMessageStyle}>
                    {errorMessage}
                </div>
            }
        </div>
    )
}
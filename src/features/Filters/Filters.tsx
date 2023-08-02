import React, {useState} from "react";
import styles from "./filters.module.css"
import {BiSearch} from 'react-icons/bi';
import {FilterDropdownsBlock} from "./FilterDropdownsBlock";
import {FilterInputsBlock} from "./FilterInputsBlock";
import {useAppDispatch} from "../../app/hooks";
import {deleteErrorMessage, getCharactersAsync} from "../../app/CharactersSlice";

export const Filters = () => {
    const dispatch = useAppDispatch()

    const [name, setName] = useState('')
    const [species, setSpecies] = useState('')
    const [type, setType] = useState('')
    const [status, setStatus] = useState<string | undefined>(undefined)
    const [gender, setGender] = useState<string | undefined>(undefined)

    const setNewName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const setNewSpecies = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSpecies(e.target.value)
    }
    const setNewType = (e: React.ChangeEvent<HTMLInputElement>) => {
        setType(e.target.value)
    }
    const setNewStatus = (newStatus: string) => {
        setStatus(newStatus)
    }
    const setNewGender = (newGender: string) => {
        setGender(newGender)
    }

    const resetFilters = () => {
        setName("")
        setSpecies("")
        setType("")
        setStatus(undefined)
        setGender(undefined)
        dispatch(deleteErrorMessage())
    }
    const searchParams = {
        name,
        status,
        species,
        type,
        gender
    }
    const searchCharacters = () => {
        dispatch(getCharactersAsync(searchParams))
    }
    return (
        <div className={styles.filtersContainer}>
            <div>
                <FilterInputsBlock
                    name={name}
                    species={species}
                    type={type}
                    setNewName={setNewName}
                    setNewSpecies={setNewSpecies}
                    setNewType={setNewType}
                />
                <FilterDropdownsBlock
                    status={status}
                    gender={gender}
                    setNewStatus={setNewStatus}
                    setNewGender={setNewGender}
                />
            </div>
            <div className={styles.resetButton}
                 onClick={resetFilters}
            >
                reset filters
            </div>
            <div className={styles.searchButton}
                 onClick={searchCharacters}
            >
                search
                <BiSearch style={{marginLeft: "10px"}}/>
            </div>
        </div>
    )
}
import React, {FC, useState} from "react";
import styles from "./filters.module.css";
import {GoChevronDown, GoChevronUp} from "react-icons/go";
import {Genders, Status} from "../../app/types";


type FilterDropdownsBlockPropsType = {
    status: string | undefined,
    gender: string | undefined,
    setNewStatus: (newStatus: string) => void,
    setNewGender: (newGender: string) => void
}

export const FilterDropdownsBlock:FC<FilterDropdownsBlockPropsType> = (props) => {
    const [showStatus, setShowStatus] = useState(false)
    const [showGenders, setShowGenders] = useState(false)

    const statuses = [Status.Alive, Status.Dead, Status.Unknown]
    const genders = [Genders.Male, Genders.Female, Genders.Genderless, Genders.Unknown]

    const showStatusDropdown = () => {
        setShowStatus(!showStatus)
    }
    const showGenderDropdown = () => {
        setShowGenders(!showGenders)
    }

    const changeStatus = (status: string) => {
        props.setNewStatus(status)
        setShowStatus(false)
    }
    const changeGender = (gender: string) => {
        props.setNewGender(gender)
        setShowGenders(false)
    }
    return (
        <div className={styles.dropdownsBlock}>
            <div className={styles.dropdownFilterStyle}>
                {props.status ? props.status : "status"}
                <div style={{cursor: "pointer"}}
                     onClick={showStatusDropdown}
                >
                    {showStatus ?
                        <GoChevronUp/>
                        :
                        <GoChevronDown/>
                    }
                </div>
                <div className={styles.dropdownContainer}>
                    {showStatus &&
                        <div>
                            {statuses.map((st, i) =>
                                <div className={styles.filterName}
                                     key={i}
                                     onClick={()=> changeStatus(st)}
                                >
                                    {st}
                                </div>
                            )}
                        </div>
                    }
                </div>
            </div>
            <div className={styles.dropdownFilterStyle}>
                {props.gender ? props.gender : "gender"}
                <div style={{cursor: "pointer"}}
                     onClick={showGenderDropdown}
                >
                    {showGenders ?
                        <GoChevronUp/>
                        :
                        <GoChevronDown/>
                    }
                </div>
                <div className={styles.dropdownContainer}>
                    {showGenders &&
                        <div>
                            {genders.map((gen, i) =>
                                <div className={styles.filterName}
                                     key={i}
                                     onClick={()=>changeGender(gen)}
                                >
                                    {gen}
                                </div>
                            )}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
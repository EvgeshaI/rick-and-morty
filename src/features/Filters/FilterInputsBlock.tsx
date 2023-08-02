import React, {FC} from "react";
import styles from "./filters.module.css";

type FilterInputsBlockPropsType = {
    name: string,
    species: string,
    type: string,
    setNewName: (e: React.ChangeEvent<HTMLInputElement>) => void
    setNewSpecies: (e: React.ChangeEvent<HTMLInputElement>) => void
    setNewType: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const FilterInputsBlock:FC<FilterInputsBlockPropsType> = (props) => {

    return (
        <div style={{textAlign: "center"}}>
            <input className={styles.filterInputStyle}
                   placeholder={"name"}
                   value={props.name}
                   onChange={(e) => props.setNewName(e)}
            />
            <input className={styles.filterInputStyle}
                   placeholder={"species"}
                   value={props.species}
                   onChange={(e) => props.setNewSpecies(e)}
            />
            <input className={styles.filterInputStyle}
                   placeholder={"type"}
                   value={props.type}
                   onChange={(e) => props.setNewType(e)}
            />
        </div>
    )
}
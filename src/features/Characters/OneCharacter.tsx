import React, {FC} from "react";
import styles from "./characters.module.css"
import {ICharacter, Status} from "../../app/types";
import {BsFillCircleFill} from 'react-icons/bs';
import {useAppDispatch} from "../../app/hooks";
import {selectCharacterAsync} from "../../app/CharactersSlice";

type OneCharacterPropsType = {
    results: ICharacter,
    setIsOpenCharacterInfo: (isOpenInfo: boolean) => void
}

export const OneCharacter:FC<OneCharacterPropsType> = (props) => {
    const dispatch = useAppDispatch()

    const fillOfCircle = props.results.status === Status.Alive ? "green" : "red"

    const showInfoOfCharacter = () => {
        dispatch(selectCharacterAsync(props.results.id))
        props.setIsOpenCharacterInfo(true)
    }
    return (
        <div className={styles.characterBlock}>
            <img src={props.results.image} alt={"photo of character"} className={styles.photoStyle}/>
            <div className={styles.infoOfCharacter}>
                <div className={styles.nameStyle}
                     onClick={showInfoOfCharacter}
                >
                    {props.results.name}
                </div>
                <div className={styles.statusAndSpecies}>
                    <BsFillCircleFill fill={fillOfCircle} style={{marginRight: "10px"}}/>
                    <div>{props.results.status} - {props.results.species}</div>
                </div>
                <div className={styles.locationBlock}>
                    <div className={styles.location}>Last known location: </div>
                    <a href={props.results.location.url}>
                        {props.results.location.name}
                    </a>
                </div>
                <div className={styles.locationBlock}>
                    <div className={styles.location}>First seen in:</div>
                    <a href={props.results.origin.url}>
                        {props.results.origin.name}
                    </a>
                </div>
            </div>
        </div>
    )
}
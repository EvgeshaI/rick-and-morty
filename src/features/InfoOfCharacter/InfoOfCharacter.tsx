import React, {FC} from "react";
import styles from "./infoOfCharacter.module.css"
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {IoCloseOutline} from "react-icons/io5";
import {cleanSelectCharacter} from "../../app/CharactersSlice";


type InfoOfCharacterPropsType = {
    setIsOpenCharacterInfo: (isOpenInfo: boolean) => void
}

export const InfoOfCharacter:FC<InfoOfCharacterPropsType> = (props) => {
    const dispatch = useAppDispatch()
    const {
        selectedCharacter
    } = useAppSelector((state) => state.characters);

    const closeInfoOfCharacters = () => {
        props.setIsOpenCharacterInfo(false)
        dispatch(cleanSelectCharacter())
    }
    const characterInfo = [
        {infoType: "GENDER", info: selectedCharacter?.gender},
        {infoType: "TYPE", info: selectedCharacter?.type},
        {infoType: "STATUS", info: selectedCharacter?.status},
        {infoType: "SPECIES", info: selectedCharacter?.species},
        {infoType: "LOCATION", info: selectedCharacter?.location.name},
        {infoType: "ORIGIN", info: selectedCharacter?.origin.name},
    ]
    return (
        <div className={styles.infoOfCharacterContainer}>
            {selectedCharacter &&
            <div className={styles.infoOfCharacterBlock}>
                <div className={styles.closeIconStyle}
                     onClick={closeInfoOfCharacters}
                >
                    <IoCloseOutline/>
                </div>
                <div className={styles.nameCharacter}>{selectedCharacter.name}</div>
                <div className={styles.photoAndInfo}>
                    <div>
                        <img src={selectedCharacter.image}
                             alt={selectedCharacter.name}
                             className={styles.photo}
                        />
                    </div>
                    <div className={styles.infoBlock}>
                        {characterInfo.map((inf, i) =>
                            <div className={styles.infoString} key={i}>
                                <div className={styles.infoType}>{inf.infoType}:</div>
                                <div className={styles.infoStyle}>{inf.info}</div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.episodesBlock}>
                    <div className={styles.infoType}>EPISODES:</div>
                    <div className={styles.episodesList}>
                        {selectedCharacter.episode.map((ep, i) =>
                            <div key={i}>
                                <a href={ep} className={styles.episodeLink}>{ep}</a>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
import React from "react";
import styles from "./pagination.module.css"
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {IParams} from "../../app/types";
import {getCharactersAsync} from "../../app/CharactersSlice";


export const Pagination = () => {
    const dispatch = useAppDispatch()
    const {
        nextUrl,
        prevUrl
    } = useAppSelector((state) => state.characters);

    const getParamsInUrl = (url: string) => {
        let paramsInUrl = url.split("?")[1].split("&")
        let params:any = {}
        for(let i=0; i<paramsInUrl.length; i++){
            let keyAndValue = paramsInUrl[i].split("=");
            let key = keyAndValue[0]
            params[key] = keyAndValue[1]
        }
        return params as IParams
    }

    const nextPage = () => {
        const params = getParamsInUrl(nextUrl!)
        dispatch(getCharactersAsync(params))
    }
    const prevPage = () => {
        const params = getParamsInUrl(prevUrl!)
        dispatch(getCharactersAsync(params))
    }
    return (
        <>
            {(nextUrl || prevUrl) &&
                <div className={styles.paginationContainer}>
                    <div className={styles.paginationButton}
                         style={prevUrl ? {} : {visibility: "hidden"}}
                         onClick={prevPage}
                    >
                        prev
                    </div>
                    <div className={styles.paginationButton}
                         style={nextUrl ? {} : {visibility: "hidden"}}
                         onClick={nextPage}
                    >
                        next
                    </div>
                </div>
            }
        </>
    )
}
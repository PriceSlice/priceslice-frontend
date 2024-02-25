import React from "react";
import {useState} from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalContextProvider = (props) => {
    const [alphaValues, setAlphaValues] = useState([]);

    return (
        <GlobalContext.Provider value={{
            alphaValues: alphaValues,
            setAlphaValues: setAlphaValues,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
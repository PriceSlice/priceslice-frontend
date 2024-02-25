import React from "react";
import {useState} from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalContextProvider = (props) => {
    const [alphaValues, setAlphaValues] = useState([]);
    const [origValues, setOrigValues] = useState([]);
    return (
        <GlobalContext.Provider value={{
            alphaValues: alphaValues,
            setAlphaValues: setAlphaValues,
            origValues: origValues,
            setOrigValues: setOrigValues
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
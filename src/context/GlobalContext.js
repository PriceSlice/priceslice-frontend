import React from "react";

const defaultState = {
    alphaValues: [],
    setAlphaValues: () => {},
    origValues: [],
    setOrigValues: () => {}
    };

export const GlobalContext = React.createContext(defaultState);
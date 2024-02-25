import React from "react";

const defaultState = {
    alphaValues: [],
    setAlphaValues: () => {},
    };

export const GlobalContext = React.createContext(defaultState);
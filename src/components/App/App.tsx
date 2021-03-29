import React from "react";
import { AppStyled, AppInnerStyled } from "./AppStyled";
import { BoxA } from "../BoxA";
import { BoxB } from "../BoxB";
import { BoxC } from "../BoxC";
import { getDebugLevel, hasDebugLabel } from "@utils/debug";
import { useProfiler } from "@utils/useProfiler";

export function App () {

    if ( process.env.NODE_ENV === "development" ) {
        if ( getDebugLevel() > 1 || hasDebugLabel( "App" ) ) {
            useProfiler( "App" );
        }
    }

    return (
        <AppStyled>
            App
            <AppInnerStyled>
                <BoxA />
                <BoxB />
                <BoxC />
            </AppInnerStyled>
        </AppStyled>
    );
}

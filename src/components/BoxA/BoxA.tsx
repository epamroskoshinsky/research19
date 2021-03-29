import React from "react";
import { BoxAStyled } from "./BoxAStyled";
import { getDebugLevel, hasDebugLabel } from "@utils/debug";
import { useProfiler } from "@utils/useProfiler";

export function BoxA () {

    if ( process.env.NODE_ENV === "development" ) {
        if ( getDebugLevel() > 1 || hasDebugLabel( "BoxA" ) ) {
            useProfiler( "BoxA" );
        }
    }

    return (
        <BoxAStyled>
            BoxA
        </BoxAStyled>
    );
}

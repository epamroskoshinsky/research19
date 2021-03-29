import React from "react";
import { BoxBStyled } from "./BoxBStyled";
import { getDebugLevel, hasDebugLabel } from "@src/utils/debug";
import { useProfiler } from "@utils/useProfiler";

export function BoxB () {

    if ( process.env.NODE_ENV === "development" ) {
        if ( getDebugLevel() > 1 || hasDebugLabel( "BoxB" ) ) {
            useProfiler( "BoxB" );
        }
    }

    return (
        <BoxBStyled>
            BoxB
        </BoxBStyled>
    );
}

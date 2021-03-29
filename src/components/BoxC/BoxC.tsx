import React from "react";
import { BoxCStyled } from "./BoxCStyled";
import { getDebugLevel, hasDebugLabel } from "@src/utils/debug";
import { useProfiler } from "@utils/useProfiler";

export function BoxC () {

    if ( process.env.NODE_ENV === "development" ) {
        if ( getDebugLevel() > 1 || hasDebugLabel( "BoxC" ) ) {
            useProfiler( "BoxC" );
        }
    }

    return (
        <BoxCStyled>
            BoxC
        </BoxCStyled>
    );
}

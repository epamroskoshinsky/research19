export function getDebugLevel ():number {
    if ( process.env.APPLICATION_DEBUG_LEVEL ) {
        return parseInt( process.env.APPLICATION_DEBUG_LEVEL, 10 );
    }
    return 0;
}

export function hasDebugLabel ( label:string ):boolean {
    return process.env.APPLICATION_DEBUG_LABEL?.includes( label ) ?? false;
}

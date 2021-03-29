import { useEffect } from "react";

interface ProfileInterface {
    render:number;
    mount:number;
    unmount:number;
}

const profiles = new Map<string, ProfileInterface>();

export function useProfiler (
    name:string,
    ...restLog:string[]|number[]
):void {

    let profile:ProfileInterface;

    if ( profiles.has( name ) ) {
        profile = profiles.get( name ) as ProfileInterface;
    } else {
        profile = {
            render  : 0,
            mount   : 0,
            unmount : 0,
        };
        profiles.set( name, profile );
    }

    useEffect( () => {
        profile.mount++;
        console.log.call( null, name, ...[ ...restLog ].concat( [
            "profiler",
            "mount",
            profile.mount,
        ] ) );
        return () => {
            profile.unmount++;
            console.log.call( null, name, ...[ ...restLog ].concat( [
                "profiler",
                "unmount",
                profile.unmount,
            ] ) );
        };
    }, [] );
    profile.render++;
    console.log.call( null, name, ...[ ...restLog ].concat( [
        "profiler",
        "render",
        profile.render,
    ] ) );

}

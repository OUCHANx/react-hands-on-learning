"use client";

import { useEffect, useState } from "react";


export default function SSR() {
    const [state, setState] = useState(undefined);
    useEffect(() => {
        setState("Client-Side Rendering");
    },[])
    return (
    <>
    <div>{state}</div>
    </>
    )
}

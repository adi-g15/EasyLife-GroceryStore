import React, { useEffect, useState } from 'react'
import NavBar from './components/navbar'
import FooBar from './components/footer'
import "fontsource-roboto";
import SabjiArea from './components/sabjiArea';

export default function() {
    const [ isMobile, setIsMobile ] = useState(false);

    useEffect(() => {
        document.addEventListener("resize", setIsMobile( window.innerWidth <= 768 ))
        console.log( "Detected Mobile: ", isMobile );

        return () => document.removeEventListener("resize", setIsMobile);    // this returned function runs when unmounted
    })

    return (
        <>
            <NavBar isMobile={isMobile} />
            <SabjiArea isMobile={isMobile} />
            <FooBar isMobile={isMobile} />
        </>
    )
}
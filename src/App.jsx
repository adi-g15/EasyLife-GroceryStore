import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import NavBar from './components/navbar'
import FooBar from './components/footer'
import "fontsource-roboto";
import Home from "./pages/Home"
import Login from './pages/Login';
import SignUp from './pages/Signup';

export default function() {
    const [ isMobile, setIsMobile ] = useState(false);

    useEffect(() => {
        setIsMobile( window.innerWidth <= 768 );

            // not being triggered more than once
        // document.addEventListener("resize", setIsMobile( window.innerWidth <= 768 ))
        // console.log( "Detected Mobile: ", isMobile );

        // return () => document.removeEventListener("resize", setIsMobile);    // this returned function runs when unmounted
    })

    return (
        <>
            <NavBar isMobile={isMobile} />
            <BrowserRouter>
                <Route exact path="/" component={()=> <Home isMobile={isMobile} />}/>
                <Route exact path="/login" component={() => <Login />} />
                <Route exact path="/signup" component={() => <SignUp />} />
            </BrowserRouter>
            {/* <SabjiArea isMobile={isMobile} /> */}
            <FooBar />
        </>
    )
}

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom"
import NavBar from './components/navbar'
import FooBar from './components/footer'
import "fontsource-roboto";
import Home from "./pages/Home"
import Login from './pages/Login';
import SignUp from './pages/Signup';
import { RefreshIsMobile } from "./actions/screen"

export default function() {
        // ONLY here will RefreshIsMobile be called
    const isMobile = useSelector(store => store.screen.isMobile);

    useEffect(() => {
        document.addEventListener("resize", RefreshIsMobile, false)
        console.log( "Detected Mobile: ", isMobile );

        // return () => document.removeEventListener("resize", setIsMobile);    // this returned function runs when unmounted
            // not being triggered more than once
    }, [])

    return (
        <BrowserRouter>
            <NavBar isMobile={isMobile} />
                <Route exact path="/" component={()=> <Home />}/>
                <Route exact path="/login" component={() => <Login />} />
                <Route exact path="/signup" component={() => <SignUp />} />
            {/* <SabjiArea isMobile={isMobile} /> */}
            <FooBar />
        </BrowserRouter>
    )
}

import React from "react";
import USPS from "../components/USPS/USPS.jsx";
import Nav from "../components/Nav/Nav.jsx";
import MainMessage from "../components/MainMessage/MainMessage.jsx";
const Main = () => {
    return (
        <>
            <USPS />
            <Nav />
            <MainMessage />
        </>
    )
}

export default Main
import React from "react";
import USPS from "../components/USPS/USPS.jsx";
import Nav from "../components/Nav/Nav.jsx";
import MainMessage from "../components/MainMessage/MainMessage.jsx";
import Steps from "../components/Steps/Steps.jsx";
const Main = () => {
    return (
        <>
            <USPS />
            <Nav />
            <MainMessage />
            <Steps />
        </>
    )
}

export default Main
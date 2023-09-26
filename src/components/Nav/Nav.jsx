import React from "react";
import './Nav.css'

const Nav = () => {
    return (
        <>
            <div className="nav-container">
                <div className="nav-clarifion-logo-container">
                    <img src="../../../src/assets/icons/Clarifion_Logo_1.png" />
                </div>
                <div className="nav-anti-virus-logos-container">
                    <img src="../../../src/assets/icons/norton-antivirus-logo_1.png" />
                    <img src="../../../src/assets/icons/McAffee.png" />
                </div>
            </div>
        </>
    )

}

export default Nav
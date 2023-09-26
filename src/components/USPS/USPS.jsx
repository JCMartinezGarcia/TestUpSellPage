import React from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import "./USPS.css";

const USPS = () => {
    return (
        <>
            <div className="usps-container">
                <span id="usps-1 col-12">
                    <LiaAngleLeftSolid className="angles" />
                    <img src="../../../src/assets/icons/Vector-check-guarantee.png" />30-DAY SATISFACTION GUARANTEE
                    <LiaAngleRightSolid className="angles" />
                </span>
                <span id="usps-2"><img src="../../../src/assets/icons/Vector-delivery.png" />FREE DELIVERY ON ORDERS OVER $40.00</span>
                <span id="usps-3"><img src="../../../src/assets/icons/Vector-hearth.png" />50.000+HAPPYCUSTOMERS</span>
                <span id="usps-4"><img src="../../../src/assets/icons/Vector-money-back.png" />100!MONEYBACKGUARANTEE</span>
            </div>
        </>
    )

}

export default USPS;
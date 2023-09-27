import React from "react";
import './Steps.css';

const Steps = () => {

    return (
        <>
            <div className="steps-container">
                <span className="steps-items"><img src="../../../src/assets/icons/checkmark.png" /><p>Step 1 :Cart Review</p></span>
                <span className="steps-items"><img src="../../../src/assets/icons/checkmark.png" /><p>Step 2 :Checkout</p></span>
                <span className="steps-items"><img src="../../../src/assets/icons/checkmark3.png" /><p><strong>Step 3 :Special Offer</strong></p></span>
                <span className="steps-items"><img src="../../../src/assets/icons/checkmark4.png" /><p>Step 4 :Confirmation</p></span>
            </div>
        </>
    )
}

export default Steps
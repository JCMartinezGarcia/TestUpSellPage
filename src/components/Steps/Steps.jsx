import React from "react";
import './Steps.css';

const Steps = () => {

    return (
        <>
            <div className="steps-container">
                <span className="steps-items"><img src="../../../src/assets/icons/checkmark.png" /><p><span className="step-number-item">Step 1 :</span>Cart Review</p></span>
                <span className="steps-items"><img src="../../../src/assets/icons/checkmark.png" /><p><span className="step-number-item">Step 2 :</span>Checkout</p></span>
                <span className="steps-items"><img src="../../../src/assets/icons/checkmark3.png" /><p><strong><span className="step-number-item">Step 3 :</span>Special Offer</strong></p></span>
                <span className="steps-items"><img src="../../../src/assets/icons/checkmark4.png" /><p><span className="step-number-item">Step 4 :</span>Confirmation</p></span>
            </div>
        </>
    )
}

export default Steps
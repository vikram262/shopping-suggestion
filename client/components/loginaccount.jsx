import React from "react";
import { RxCross1 } from "react-icons/rx";
function Loginaccount({ setmodule }) {
    return (
        <div class="loginaccount-top">
            <div class="loginaccount-top-sub" onClick={() => setmodule(false)}><RxCross1 /></div>
            <div class="loginaccount-top-sub1">Please ensure all details are correctly filled to access your account</div>
        </div>
    );
}

export default Loginaccount;

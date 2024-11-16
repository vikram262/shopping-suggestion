import React, { useContext } from 'react';
import { Reloder } from '../context/reloder';
import { useNavigate } from 'react-router-dom';
function Successfullylogout() {
    const navigate = useNavigate();
    function handlelogout() {
        navigate("/profile");
    }
    return (
        <div className="center">
            <div className="logout-cont">
                <div className="logout-head" style={{
                    color: "orange", textShadow: "2px 2px green"
                }}>You've been successfully logged out</div>
                < div className="logout-body" style={{
                    color: "orange", textShadow: "2px 2px green"
                }} > Would you like to log in again?</div>
                <div className="logout-btn" onClick={handlelogout}>Yes, log me in</div>
            </div>
        </div >
    );
}
export default Successfullylogout;

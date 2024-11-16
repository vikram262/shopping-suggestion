import React, { useContext } from 'react';
import { Reloder } from '../context/reloder';
import { useNavigate } from 'react-router-dom';
function Successlogin() {
    const navigate = useNavigate();
    const { users, setUsers } = useContext(Reloder);
    function handlelogout() {
        setUsers([]);
        navigate("/profile")
    }
    return (
        <div className="success-login-container">
            <div className="success-message">Successfully logged in!</div>
            <div className="logout-btn" onClick={handlelogout}>logout</div>

        </div>
    );
}

export default Successlogin;

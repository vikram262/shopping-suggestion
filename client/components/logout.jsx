import React, { useContext } from 'react';
import { Reloder } from '../context/reloder';
import { useNavigate } from 'react-router-dom';
function Logout() {
    const { users, setUsers } = useContext(Reloder);
    const navigate = useNavigate();
    function handlelogout() {
        setUsers([]);
        navigate("/logout")

    }
    return (
        <div className="center">
            <div className="logout-cont">
                <div className="logout-head">Welcome {users.email}</div>
                <div className="logout-body">Do you want to logout from your account</div>
                <div className="logout-btn" onClick={handlelogout}>yes</div>
            </div>
        </div>
    );
}

export default Logout;

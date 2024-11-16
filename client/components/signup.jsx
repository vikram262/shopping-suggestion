import { FcBusinessman } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Reloder } from "../context/reloder";
import Successlogin from "./succesfull-login";
import { useContext, useEffect, useRef, useState } from "react";
import Invalidformat from "./invalidformat";
function Profile() {
    const { users, setUsers } = useContext(Reloder);

    const navigate = useNavigate();
    const name1 = useRef();
    const email1 = useRef();
    const password1 = useRef();
    const [module, setmodule] = useState(false);
    async function handlesignup() {
        if (name1.current.value.length > 0 && email1.current.value.length > 0 && email1.current.value.length > 0) {
            const size = email1.current.value.length;
            if (email1.current.value.substr(size - 10) === "@gmail.com") {
                try {
                    const userData = {
                        name: name1.current.value,
                        email: email1.current.value,
                        password: password1.current.value
                    };
                    console.log(userData);
                    await axios.post('http://localhost:3001/addusers', userData);
                    navigate("/login");
                } catch (error) {
                    console.log("Error adding user:", error);
                }

            }
            else {
                setmodule(true);
            }
        }
        else {
            setmodule(true);
        }
    }


    return <>
        <div class="profile-cont">
            <div class="main-page">
                {users.length === 0 ? <>
                    <div class="profile-heading">Sign up</div>
                    <div class="p-name">
                        <FcBusinessman />
                        <div class="n-input"><input type="text" placeholder="Name" ref={name1}></input></div>
                    </div>
                    <div class="p-email">
                        <MdEmail />
                        <div class="e-input"><input type="text" placeholder="Email id" ref={email1}></input></div>
                    </div>
                    <div class="p-password">
                        <FaLock />
                        <div class="p-input"><input type="text" placeholder="Password" ref={password1}></input></div>
                    </div>
                    <div>{module ? <Invalidformat setmodule={() => setmodule(false)} /> : ""}</div>
                    <div class="profile-log">
                        <div class="p-signup" onClick={handlesignup} >Sign up</div>
                        <Link to="/login" class="p-login">Login</Link>
                    </div>
                </> : <Successlogin />}
            </div>
        </div>

    </>

}
export default Profile

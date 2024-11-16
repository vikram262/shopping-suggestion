import { FcBusinessman } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Successlogin from "./succesfull-login";
import { Reloder } from "../context/reloder";
import axios from 'axios';
import Alreadylogin from "./alreadylogin";
import Loginaccount from "./loginaccount";
import { useContext } from "react";
function Login() {
    const { users, setUsers } = useContext(Reloder);

    useEffect(() => {
        localStorage.setItem("userlist", JSON.stringify(users));
    }, [users]);


    const email1 = useRef();
    const password1 = useRef();
    const [module, setmodule] = useState(false);
    async function handlelogin() {
        if (email1.current.value.length > 0 && password1
            .current.value.length > 0 && users.length == 0) {
            try {
                let response = await axios.get('http://localhost:3001/getusers', {
                    params: {
                        email: email1.current.value,
                        password: password1.current.value
                    }

                });
                console.log("response", response.data);
                if (response.data != null) {
                    setUsers(response.data);
                }
                else {
                    setmodule(true);
                }
            } catch (error) {
                console.log("error", error);

            }

        }
        else {
            setmodule(true);
        }
    }
    console.log("user", users.length);
    return <>
        <div class="profile-cont">
            <div class="main-page">
                {users.length === 0 ? <>
                    <div class="profile-heading">Login</div>
                    <div class="p-email">
                        <MdEmail />
                        <div class="e-input"><input type="text" placeholder="Email id" ref={email1}></input></div>
                    </div>
                    <div class="p-password">
                        <FaLock />
                        <div class="p-input"><input type="text" placeholder="Password" ref={password1}></input></div>
                    </div>
                    <div class="f-pass">last password ? <a href="#" > click here</a></div>
                    <div class="profile-log">
                        <Link to="/profile" class="p-signup" >Sign up</Link>
                        <Link to="/login" class="p-login" onClick={handlelogin}>Login</Link>
                    </div>
                    {(module ? <Loginaccount setmodule={() => setmodule(false)} /> : "")
                    }
                </> : <Successlogin />}

            </div>
        </div>

    </>

}
export default Login;

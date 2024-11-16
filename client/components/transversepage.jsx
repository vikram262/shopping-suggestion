import { useContext } from "react"
import Logout from "./logout"
import Successfullylogout from "./successfullylogout"
import { Reloder } from "../context/reloder";
function Transverse() {
    console.log("yes");
    const { users, setUsers } = useContext(Reloder);
    console.log("users.length", users.length);
    return <>
        {users.length != 0 ? <Logout /> : <Successfullylogout />}
    </>
}
export default Transverse;
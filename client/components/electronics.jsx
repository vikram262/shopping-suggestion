import { useContext, useEffect, useState } from "react";
import { Items } from "../context/context";
import Loader from "./spinner";
import { Reloder } from "../context/reloder";
function Electronicfetch() {
    const { arr, setcontextitems } = useContext(Items);
    const [loadfetch, setfetch] = useState(false);
    const { electronic, setelectronics } = useContext(Reloder);

    useEffect(() => {
        if (electronic.length === 0) {
            fetchdata();
        } else {
            setcontextitems(electronic);
        }
    }, []);
    async function fetchdata() {
        setfetch(true)
        let response = await fetch('https://fakestoreapi.com/products/category/electronics');

        let data = await response.json();
        setcontextitems(data);
        console.log(data);
        setfetch(false);
        setelectronics(data);

    }
    return <>
        <div>{loadfetch ? <Loader /> : null}</div>
    </>
}
export default Electronicfetch;
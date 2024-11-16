import { useContext, useEffect, useState } from "react";
import { Items } from "../context/context";
import { Reloder } from "../context/reloder";
import Loader from "./spinner";
function Menfetch() {
    const { arr, setcontextitems } = useContext(Items);
    const [loadfetch, setfetch] = useState(false);
    const { men, setmen } = useContext(Reloder);

    useEffect(() => {
        if (men.length === 0) { // Fix: Remove parentheses after length
            fetchdata();
        } else {
            setcontextitems(men);
        }
    }, []);
    async function fetchdata() {
        setfetch(true)
        let response = await fetch('https://fakestoreapi.com/products/category/men\'s%20clothing');

        let data = await response.json();
        setcontextitems(data);
        setfetch(false);
        setmen(data);

    }
    return <>
        <div>{loadfetch ? <Loader /> : null}</div>
    </>
}
export default Menfetch;
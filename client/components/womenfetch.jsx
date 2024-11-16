import { useContext, useEffect, useState } from "react";
import { Items } from "../context/context";
import Loader from "./spinner";
import { Reloder } from "../context/reloder";
function Womenfetch() {
    const { arr, setcontextitems } = useContext(Items);
    const [loadfetch, setfetch] = useState(false);
    const { women, setwomen } = useContext(Reloder);

    useEffect(() => {
        if (women.length === 0) { // Fix: Remove parentheses after length
            fetchdata();
        } else {
            setcontextitems(women);
        }
    }, []);
    async function fetchdata() {
        setfetch(true)
        let response = await fetch('https://fakestoreapi.com/products/category/women\'s%20clothing');

        let data = await response.json();
        setcontextitems(data);
        console.log(data);
        setfetch(false);
        setwomen(data);

    }
    return <>
        <div>{loadfetch ? <Loader /> : null}</div>
    </>
}
export default Womenfetch;
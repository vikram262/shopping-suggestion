import { useContext, useEffect, useState } from "react";
import { Items } from "../context/context";
import Loader from "./spinner";
import { Reloder } from "../context/reloder";

function Fetching() {
    const { arr, setcontextitems } = useContext(Items);
    const [loadfetch, setfetch] = useState(false);
    const [dataFetched, setDataFetched] = useState(false);
    const { shop, setshop } = useContext(Reloder);

    useEffect(() => {
        if (shop.length === 0) { // Fix: Remove parentheses after length
            fetchdata();
        } else {
            setcontextitems(shop);
        }
    }, []);

    async function fetchdata() {
        setfetch(true);
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json();
        setcontextitems(data);
        console.log(data);
        setfetch(false);
        setshop(data);
    }

    return (
        <div>{loadfetch ? <Loader /> : null}</div>
    );
}

export default Fetching;

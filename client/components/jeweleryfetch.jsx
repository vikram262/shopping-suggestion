import { useContext, useEffect, useState } from "react";
import { Items } from "../context/context";
import Loader from "./spinner";
import { Reloder } from "../context/reloder";
function Jewelery() {
    const { arr, setcontextitems } = useContext(Items);
    const [loadfetch, setfetch] = useState(false);
    const { jewelery, setjewelery } = useContext(Reloder);

    useEffect(() => {
        if (jewelery.length === 0) {
            fetchdata();
        } else {
            setcontextitems(jewelery);
        }
    }, []);
    async function fetchdata() {
        setfetch(true)
        let response = await fetch('https://fakestoreapi.com/products/category/jewelery');
        let data = await response.json();
        setcontextitems(data);
        console.log(data);
        setfetch(false);
        setjewelery(data);

    }
    return <>
        <div>{loadfetch ? <Loader /> : null}</div>
    </>
}
export default Jewelery;
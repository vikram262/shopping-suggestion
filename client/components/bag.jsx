import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import React, { useContext, useEffect, useState } from 'react';
import { Bagitems } from "../context/bagcontext";
import { TiDeleteOutline } from "react-icons/ti";
import Bags from "./bags";
import Cart from "./cart";
import Emptybag from "./emptybag";
function Bag({ rating, title, description, price, img, id, qty }) {

    const { bagarr, setbagitems } = useContext(Bagitems);
    function handledelete(id) {
        let update = bagarr.filter((item) => item.id !== id);
        setbagitems(update);
    }
    const [showqty, setqty] = useState(qty);
    function handleminus() {
        if (showqty > 0) {
            setqty(showqty - 1);
        }
    } function handleplus() {
        setqty(showqty + 1);
    }

    useEffect(() => {
        const updatedbagarr = bagarr.map((item) => {
            if (item.id === id) {
                item.qty = showqty;
            }
            return item;
        });
        setbagitems(updatedbagarr);

    }, [showqty])
    return (
        <>
            <div class="bag-data">
                <img src={img} class="card-img" alt="p1" />
                <div class="title p">{title}</div>
                <div class="actual p">${price} </div>
                <div class="quantity p ">
                    <button style={{ backgroundColor: "rgb(239, 239, 239)", color: "black", height: "1.5rem" }} onClick={handleminus}><FaMinus /></button>
                    <div class="bag-data-qty">{showqty}</div>
                    <button style={{ backgroundColor: "rgb(260, 239, 239)", color: "black", height: "1.5rem" }} onClick={handleplus}><FaPlus /></button>
                </div>
                <div class="total p">${price * showqty} </div>
                <button class="delete-btn p" style={{ fontSize: "2rem" }} onClick={() => handledelete(id)}><TiDeleteOutline /></button>
            </div>
        </>
    );

}
export default Bag;


import React, { useContext, useEffect, useState } from 'react';
import { Wishlistitems } from "../context/wishlistcontext";
import Cart from "./cart";
import { Singleitems } from "../context/singleitemcontex";
import { Link } from 'react-router-dom';
function Wishlistadd({ rating, title, description, price, discountPercentage, img, id }) {
    const { desc, setdesc } = useContext(Singleitems);
    function handleOnClick() {
        const update = {
            img: img,
            rating: rating,
            title: title,
            description: description,
            price: price,
            id: id,
            discountPercentage: discountPercentage
        };
        setdesc(update);
    };
    return <>
        <div class="bag-data ">
            <Link to="/aboutproduct" onClick={handleOnClick}><img src={img} class="card-img" alt="p1" />
            </Link>
            <div class="title p">{title}</div>
            <div class="actual p">${price} </div>
        </div>
    </>
}
export default Wishlistadd;

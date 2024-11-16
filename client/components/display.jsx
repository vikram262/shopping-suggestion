import React, { useContext, useEffect, useState } from 'react';
import Product from "./product";
import { Items } from '../context/context';
import Fetching from './fetchingdata';
import Fetchingmore from './fetchingmore';
import Womenfetch from "./womenfetch";
import Menfetch from "./menwearfetch";
import Jewelery from "./jeweleryfetch";
import Electronicfetch from './electronics';
import { useLocation } from 'react-router-dom';
import { Reloder } from '../context/reloder';
import Emptyexplore from './emptyexplore';
import Offer from './offer';
function Display() {
    const location = useLocation();
    const { arr, setcontextitems } = useContext(Items);
    const [flag, setflag] = useState(false)
    const { shop, setshop, men, setmen, women, setwomen, jewelery, setjewelery } = useContext(Reloder);
    function fetchingstart() {
        setflag(true);
    }
    return (
        <>
            <div class="product-mapping">
                <Offer></Offer>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {(window.location.pathname === "/shop") ? <Fetching /> :
                        (window.location.pathname === "/jewelery") ? <Jewelery /> :
                            (window.location.pathname === "/electronic") ? <Electronicfetch /> :
                                (window.location.pathname === "/menwear") ? <Menfetch /> :
                                    (window.location.pathname === "/womenwear") ? <Womenfetch /> : null}
                    {arr.map((product) => (
                        <Product
                            rating={product.rating}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            discountPercentage={30}
                            img={product.image}
                            id={product.id}
                            category={product.category}
                        />
                    ))}
                </div >
                {flag ? <Emptyexplore setflag={setflag}></Emptyexplore> : <button class="explore-btn" onClick={fetchingstart}>Explore More</button>}
            </div >
        </>
    );
}

export default Display;

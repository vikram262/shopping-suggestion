import React, { useContext, useEffect, useState } from 'react';
import Bag from './bag';
import { Bagitems } from '../context/bagcontext';
import Emptybag from './emptybag';
import Cart from './cart';
function Bags() {
    const { bagarr, setbagitems } = useContext(Bagitems);

    const [totalcartprice, setcartprice] = useState(0);
    const [totalqty, settotalqty] = useState(0);

    useEffect(() => {
        let totalprice = bagarr.reduce((acc, product) => acc + (product.price) * parseInt(product.qty), 0);
        setcartprice(totalprice);
    }, [bagarr]);

    useEffect(() => {
        let total = bagarr.reduce((acc, product) => acc + (product.qty), 0);
        settotalqty(total);
    }, [bagarr]);

    useEffect(() => {
        localStorage.setItem("baglist", JSON.stringify(bagarr));
    }, [bagarr]);

    return (
        <>    <div class="bag-top">
            <div>{totalqty === 0 ? <Emptybag> </Emptybag> :
                <div class="product-mapping" style={{ marginTop: "2rem" }}>
                    <div class="bag-heading ">
                        <div class="head1">products</div>
                        <div class="head">Title</div>
                        <div class="head">Price</div>
                        <div class="head">Quantity</div>
                        <div class="head">Total</div>
                        <div class="head">Remove</div>
                    </div>
                    <div class="bag-adding">
                        {bagarr.map((product) => (
                            <Bag
                                rating={product.rating}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                img={product.img}
                                id={product.id}
                                qty={product.qty}
                            />
                        ))}
                    </div >
                </div >}
                <Cart subtotal={totalcartprice}></Cart>
            </div>
        </div >
        </>
    );
}

export default Bags;

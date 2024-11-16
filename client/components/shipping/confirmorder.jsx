import React, { useState, useEffect, useContext } from 'react';
import { Bagitems } from '../../context/bagcontext';
import { loadStripe } from '@stripe/stripe-js';
function Confirmorder() {
    const { bagarr } = useContext(Bagitems); // Access bagarr from context
    const [totalcartprice, setcartprice] = useState(0);

    //make payment
    const makepayment = async () => {
        const stripe = await loadStripe("pk_test_51Ost7zSFb8tLbxCclr1nioT5yVdtfiMCh2Sgmx37WyLQQd6ZCR9Nf371K565md8x6w6ERCeoyXgj76bgVPkltd6F00dQT9YvZN");

        const body = {
            products: bagarr
        }
        console.log("body", body)
        const headers = {
            "Content-Type": "application/json"
        }
        const response = await fetch("http://localhost:3001/create-checkout-session", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });


        const session = await response.json();
        console.log("sessionId", session);
        const result = stripe.redirectToCheckout({
            sessionId: session.id
        });

        if (result.error) {
            console.log(result.error);
        }
    }






    // Calculate total cart price
    useEffect(() => {
        let totalprice = bagarr.reduce((acc, product) => acc + (product.price) * parseInt(product.qty), 0);
        setcartprice(totalprice);
    }, [bagarr]);

    function getformdata() {
        let item = localStorage.getItem('confirmorder');
        if (item) {
            return JSON.parse(item);
        } else {
            return {};
        }
    }
    const [formdata, setformdata] = useState(getformdata());

    return (
        <div className="confirm-order-container">
            <h2>Confirm Order</h2>
            <div className="order-details">
                <p><strong>Full Name:</strong> {formdata.fullname}</p>
                <p><strong>Address:</strong> {formdata.address}</p>
                <p><strong>City:</strong> {formdata.city}</p>
                <p><strong>Postal Code:</strong> {formdata.postaladdress}</p>
                <p><strong>Country:</strong> {formdata.country}</p>
            </div>
            <div className="order-summary">
                <h3 style={{ color: "green" }}>Order Summary</h3>
                <p>Total Items: {bagarr.length}</p>
                <p>Total Price: ${totalcartprice}</p>
            </div>
            <button className="confirm-button" onClick={makepayment}>Confirm Order</button>
        </div>
    );
}

export default Confirmorder;

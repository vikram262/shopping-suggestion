const express = require("express");
const router = express.Router();
const stripe = require('stripe')('sk_test_51Ost7zSFb8tLbxCcbrogqDLrOhOyeaaC3NJMuO3xL9A64AlVDj3VssMREJAa0PlehqbHMDPZWMt64QK3UeiqcQX800wdOHyXC2')

console.log("index", "yes");
router.post("/create-checkout-session", async (req, res) => {
    const { products } = req.body;
    const USD_to_INR_exchange_rate = 75.0; // Example exchange rate, you should use the latest rate from a reliable source

    const lineItems = products.map((product) => ({
        price_data: {
            currency: 'inr',
            product_data: {
                name: product.title,
                images: [product.img],
            },
            unit_amount: Math.round(product.price * USD_to_INR_exchange_rate * 100), // Convert product price to INR and then to cents
        },
        quantity: product.qty,
    }));

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:5173/successpage",
            cancel_url: "http://localhost:5173/failpage",
            shipping_address_collection: {
                allowed_countries: ['IN'],
            },
        });
        console.log("session", session);
        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ error: "Unable to create checkout session" });
    }
});
module.exports = router;

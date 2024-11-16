const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usermodel = require("./models/users");
const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/subham")



app.post('/addusers', async (req, res) => {
    try {
        const newUser = await usermodel.create(req.body);
        console.log("newuser2", newUser)
        res.json(newUser);
    } catch (err) {
        console.log("Error adding user:", err);
        res.status(500).json({ error: err.message });
    }
});

app.get('/getusers', async (req, res) => {
    try {
        const { email, password } = req.query;
        const users = await usermodel.findOne({ email, password });
        console.log("user1", users);
        res.status(200).json(users);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// router for payment
const paymentrouter = require('./routes/payment');
app.use("/", paymentrouter);

app.listen(3001, () => {
    console.log("server is running");
})
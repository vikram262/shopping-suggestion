const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
const usermodel = mongoose.model("students", userschema);
/*function adddata() {
    const newdata1 = new usermodel({
        name: "subham",
        email: "subhamk9024@gmail.com",
        password: 12345
    })
    const newdata2 = new usermodel({
        name: "subham1",
        email: "subhamk90124@gmail.com",
        password: 12345
    })
    const result = usermodel.insertMany([newdata1, newdata2]);
}*/
//adddata();

module.exports = usermodel;
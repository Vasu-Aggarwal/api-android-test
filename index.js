const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home page of the api testing.")
})

app.get("/api/test", (req, res) => {
    res.send("api testing kr raha hu yr")
})

app.get("/api/test/json", (req, res) => {
    res.json({
        "Name": "Vasu Aggarwal", 
        "Age": "22",
        "Work": "Api Testing for Android Application"})
});

app.listen(port, () => {
    console.log("Node server is running on the port: ", port);
});
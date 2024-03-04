const express = require("express");

const path = require("path");

const port = 8002;

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    return res.render("home");
});

app.listen(port, (err) => {
    err
        ? console.log("Server not responding")
        : console.log(`Server respond successfully at port: ${port}`);
});

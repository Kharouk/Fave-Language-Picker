const express = require("express");
const path = require("path");

const app = express();
const indexRoute = require("./routes/index");

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");

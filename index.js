const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

// Default Dev Port
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Scripts
const fetchUser = require("./public/javascripts/githubAPI");

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Github Language Picker" });
});

app.post("/user", (req, res) => {
  const result = fetchUser(req.body.gitUser);
  res.redirect("/");
});

app.listen(port, () => console.log(`App listening on port ${port}`));

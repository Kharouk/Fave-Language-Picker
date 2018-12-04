const express = require("express");
const path = require("path");

const app = express();

// Default Dev Port
const port = 3000;

// Middleware
const session = require("express-session");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "banana bread" }));

// Scripts
const fetchUser = require("./javascripts/API/fetchUser");

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const result = req.session.result;
  console.log(result);
  if (result !== undefined) {
    res.render("index", { title: "Github Language Picker" });
  } else {
    res.render("index", {
      title: "Github Language Picker"
    });
  }
});

app.post("/user", (req, res) => {
  req.session.result = fetch(
    `https://api.github.com/search/users?q=${req.body.gitUser}`
  )
    .then(response => response.json())
    .then(myJson => {
      return JSON.stringify(myJson);
    });
  res.redirect("/");
});

app.listen(port, () => console.log(`App listening on port ${port}`));

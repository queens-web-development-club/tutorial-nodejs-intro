// server.js

// set up -------------------------
// get all libraries
require("dotenv").config();
var express = require("express");
var app = express();
var port = 3000;
var passport = require("passport");

var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var session = require("express-session");
const { sequelize } = require("./db");
// configuration -------------------

require("./config/passport")(passport); // pass passport for configuration

app.use(bodyParser());
app.use(cookieParser());

// setup view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/res/views");

// app.use(session({ secret: "keyboardcat" }));
app.use(passport.initialize());
// app.use(passport.session());
// setup routes
require("./app/routes.js")(app, passport);

console.log("listening on port " + port);

app.listen(port);

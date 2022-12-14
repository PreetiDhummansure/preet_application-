const express = require("express");

const app = express();

const UserRoute = require("./UserRoutes");
const CategoryRoute = require("./CategoryRoutes");
const PostRoute = require("./PostRoutes");

const { auth } = require("../middlewares/Auth");

app.use("/user", UserRoute);
app.use("/category", auth, CategoryRoute);
app.use("/post", auth, PostRoute);

module.exports = app;

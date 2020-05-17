const express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

const app = express();

const bookRouter = require("./router/books.route.js");
const userRouter = require("./router/users.route.js");
const transRouter = require("./router/transaction.route.js");
const authRouter = require("./router/auth.route.js");
const middleware = require("./middleware/auth.middleware.js")

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser("adasdaszxcjdq12345"));

app.use("/books",middleware.requireAuth, bookRouter);
app.use("/users",middleware.requireAuth, userRouter);
app.use("/trans",middleware.requireAuth, transRouter);
app.use("/auth", authRouter);

app.get("/", function(req, res) {
  res.render("index");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});


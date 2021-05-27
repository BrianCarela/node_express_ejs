// before using, install the express library using the command `npm i express` in the terminal first
const express = require("express");
// before using, install the morgan library using the command `npm i morgan` in the terminal first
const logger = require("morgan"); // helps log what requests are being made to the server
const path = require("path");

const app = express();

app.use(logger("dev")); //logs what path a user is on and what requests a user is making
// if someone makes a GET request, use this before AND after any requests

console.log("__dirname:");
console.log(__dirname)

// I want to give this app the ability to serve up static files. Second argument needs location of views,
// path.join is to automatically join a path, so join it and end it in the folder called "views"
// basically, when we want to render things, automatically join the file path that ends in "../views" 
app.set("views", path.join(__dirname, "views"));
// before using, install the ejs library using the command `npm i ejs` in the terminal first
app.set("view engine", "ejs"); // ejs is one of many template libraries

//middleware
app.use(logger("dev")); 
app.use(express.json()); // this allows express to parse JSON data

// when using static files, I want you to go to the public folder to serve it up
app.use(express.static(path.join(__dirname, "public")));

// the "/" is the oath, you choose what the path is.
app.get("/", function (request, response) {
  // response.render("index"); //serve me a file called "index". It will search the views directory for this
  response.render("index", {user: "uwu"});

  //response.send("Hello class");
  // response.json({
  //   name: "hamster",
  //   friends: ["tommy", "geo", "john"],
  //   food: {
  //     food1: "candies",
  //     food2: "burgers",
  //   },
  //   boolean1: true,
  //   boolean2: false,
  //   number: 123,
  // });
});

app.get('/clothing', function (request, response) {
  response.json({
    price: 100,
    type: "T-shirt",
  });
});

// Here, '/:product' is a parameter because it starts with /: and is represented by request.params.product
// this is so that we can build a dynamic API so we can serve back data to the user based on the parameters. 
// nba.com/celtics or nba.com/bulls etc. should demonstrate this
// 
// app.get('/:product', function (request, response) {
//   console.log(request.params);
//   response.json({
//     price: 100,
//     type: request.params.product,
//     id: request.params.id,
//   });
// });

// deeper example of params
app.get('/:product/:id', function (request, response) {
  console.log(request.params);
  response.json({
    price: 100,
    type: request.params.product,
  });
});

app.post("/create-product", function (req, res) {
  // the app won't understand req.body yet because it can't parse JSON data yet
  console.log(req.body);
  res.json({
    data: req.body,
  });
});

// Port 3000
app.listen(3000, function () {
  console.log(`Server is running on PORT: ${3000}`);
});
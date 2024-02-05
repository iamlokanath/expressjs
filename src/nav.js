const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.write("<h1>Welcome to my home page</h1>");
  res.write("<h1>Welcome to my again home page</h1>");
  res.send();
});

app.get("/about", (req, res) => {
  res.status(200).send("Welcome to my about page");
});

app.get("/contact", (req, res) => {
    res.status(200).send("Welcome to my contact page");
  });
  app.get("/temp", (req, res) => {
    res.send({
        id: 1, 
        name: "Lokanath",
    });
  });
app.listen(port, () => {
  console.log(`listining to the port on ${port}`);
});

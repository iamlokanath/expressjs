
const path = require("path");
const express = require("express");
const app = express();


// console.log(__dirname);
// console.log(path.join(__dirname, '../public'))

const staticPath  = path.join(__dirname, '../public')
//this is a built in mildware
app.use(express.static(staticPath));

app.get("/", (req, res)=>{
    res.send("hello from the express by Lokanath");

});


app.get('/about', (req, res)=>{
    res.send("Hello World From about");
})
app.listen(8000, ()=>{
    console.log("listing the port at 8000")
})



// API
// get - read
// post - create
// put - update
// delete - delete
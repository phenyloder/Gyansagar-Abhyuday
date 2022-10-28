const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req,res)=>{
    res.render("index");
})


app.listen(PORT, ()=>{
    console.log(`Listening to the port ${PORT}`);
})

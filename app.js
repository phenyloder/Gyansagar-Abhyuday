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

app.get('/team', (req,res)=>{
    const teams = [
        {name:"Arjun Kumar", img:"https://media.istockphoto.com/photos/portrait-of-a-german-businessman-with-beard-picture-id480286744?k=20&m=480286744&s=612x612&w=0&h=5DDcUmTGneOREWsaL3p3AUypJa3Jk_-N9juIOhLW6XQ=", linkedin:"https://github.com", post:"Chief convenor"},
        {name:"lom", img:"https://media.istockphoto.com/photos/portrait-of-a-german-businessman-with-beard-picture-id480286744?k=20&m=480286744&s=612x612&w=0&h=5DDcUmTGneOREWsaL3p3AUypJa3Jk_-N9juIOhLW6XQ=",linkedin:"https://google.com", post:"Chief covenor"},
        {name:"loermklm", img:"https://media.istockphoto.com/photos/portrait-of-a-german-businessman-with-beard-picture-id480286744?k=20&m=480286744&s=612x612&w=0&h=5DDcUmTGneOREWsaL3p3AUypJa3Jk_-N9juIOhLW6XQ=",linkedin:"https://youtube.com", post:"Chief covenor"},
        {name:"loegfddfrm", img:"https://media.istockphoto.com/photos/portrait-of-a-german-businessman-with-beard-picture-id480286744?k=20&m=480286744&s=612x612&w=0&h=5DDcUmTGneOREWsaL3p3AUypJa3Jk_-N9juIOhLW6XQ=",linkedin:"https://gmail.com", post:"Chief covenor"},
        {name:"l45698erm", img:"https://media.istockphoto.com/photos/portrait-of-a-german-businessman-with-beard-picture-id480286744?k=20&m=480286744&s=612x612&w=0&h=5DDcUmTGneOREWsaL3p3AUypJa3Jk_-N9juIOhLW6XQ=",linkedin:"https://instagram.com", post:"Chief covenor"},
        {name:"lmkop9845", img:"https://media.istockphoto.com/photos/portrait-of-a-german-businessman-with-beard-picture-id480286744?k=20&m=480286744&s=612x612&w=0&h=5DDcUmTGneOREWsaL3p3AUypJa3Jk_-N9juIOhLW6XQ=",linkedin:"https://picuki.com", post:"Chief covenor"},
    ];

    const teams1 =[
        {name:"Vinayak Das", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
        {name:"Saurav Suman", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
        {name:"loerm", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
        {name:"loerm", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
        {name:"loerm", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
        {name:"loerm", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
        {name:"loerm", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
        {name:"loerm", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
    ];

    const teams2 =[
        {name:"loerm", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
        {name:"loerm", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
        {name:"loerm", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
        {name:"loerm", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
        {name:"loerm", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
        {name:"loerm", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
        {name:"loerm", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
        {name:"loerm", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
        {name:"loerm", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
        {name:"loerm", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
        {name:"loerm", img:"https://images.pexels.com/photos/12714494/pexels-photo-12714494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", post:"Chief covenor"},
    ];
    res.render("team", {teams, teams1, teams2});
})

app.listen(PORT, ()=>{
    console.log(`Listening to the port ${PORT}`);
})

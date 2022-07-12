const express = require("express");
const app = express();
const TodoTask = require("./models/TodoTask");
const artist=require("./models/artist");
const songs=require("./models/songs");
const dotenv = require('dotenv');
dotenv.config();





app.use("/static", express.static("public"));





app.use(express.urlencoded({
    extended: true
}));




const mongoose = require("mongoose");
//connection to db
mongoose.connect(process.env.DB_CONNECT).then(() => {
    console.log('...')
});


app.listen(3000, () => console.log("Server Up and running"));

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('todo.ejs');
});

app.get('/toptsongs.ejs', (req, res) => {
    res.render('toptsongs.ejs');
});



app.get("/topsong.ejs", (req, res) => {
    artist.find({}, (err, arti) => {
    res.render("topsong.ejs", { Artist: arti });
    });
    });



app.post('/', async (req, res) => {
    const todoTask = new TodoTask({
        username: req.body.username,
        email: req.body.email
    });
    try {
        await todoTask.save();
        res.redirect("/topsong.ejs");
    } catch (err) {
        res.redirect("/topsong.ejs");
    }
});

app.post('/topsong.ejs', async (req, res) => {
    const Artist = new artist({
        name: req.body.name,
        dob: req.body.date,
        bio:req.body.bio
    });
    try {
        await Artist.save();
        res.redirect("/topsong.ejs");
    } catch (err) {
        res.redirect("/topsong.ejs");
    }


});

app.post('/topsongs.ejs', async (req, res) => {
    const Songs = new songs({
        sname: req.body.sname,
        rdate: req.body.rdate,
        img:req.body.artwork,
        cartist:req.body.cartist,
    });
    try {
        await Songs.save();
        res.redirect("/toptsongs.ejs");
    } catch (err) {
        res.redirect("/toptsongs.ejs");
    }

    
});






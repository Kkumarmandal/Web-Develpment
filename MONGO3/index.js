const express = require ("express");
const app = express();
const mongoose = require ("mongoose");
const path = require ("path");
const Chat = require ("./models/chats.js");
const methodOverride = require ("method-override");

app.set ("views", path.join (__dirname, "views"));
app.set ("view engine", "ejs");

app.use (express.urlencoded ({extended: true}));
app.use (methodOverride ("_method"));

app.use (express.static (path.join (__dirname, "public")));

main()
.then (() => {
    console.log ("connection succesful");
})
.catch ((err) => {
    console.log (err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//INDEX ROUTE
app.get ("/chats", async(req,res) => {
    let chats = await Chat.find();
    //console.log (chats);
    //res.send ("working");
    res.render ("index.ejs", { chats });
});

//NEW ROUTE
app.get ("/chats/new", (req,res) => {
    res.render ("new.ejs");
});

//CREATE ROUTE
app.post ("/chats", (req,res) => {
    let {from, to, msg} = req.body;
    let newChat = new Chat ({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });

    //console.log (newChat);
    newChat //db ko save
    .save()
    .then ((res) => {
        console.log ("chats was saved");
    })
    .catch ((err) => {
        console.log (err);
    })
    res.redirect ("/chats"); //save karne ke baad direct reditect to /chats
})

//EDIT ROUTE
app.get ("/chats/:id/edit", async(req,res) => {
    let {id} = req.params;
    let chat = await Chat.findById (id);
    res.render("edit.ejs", {chat})
})

//UPDATE ROUTE
app.put ("/chats/:id", async(req,res) => {
    let {id} = req.params;
    let {msg: newMsg} = req.body;

    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {msg: newMsg},
        {runValidators: true, new: true}
    );
    //console.log (updatedChat);
    res.redirect ("/chats");
});

//DELETE ROUTE
app.delete ("/chats/:id", async(req,res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete (id);

    console.log (deletedChat);
    res.redirect ("/chats");
});


app.get ("/", (req,res) => {
    res.send ("root is working")
});

app.listen (8080, () => {
    console.log ("server is listening on port 8080")
})
const mongoose = require ("mongoose");
const Chat = require ("./models/chats.js");

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

let allChats = [
    {
        from: "neha",
        to: "priya",
        msg: "Send me your exam sheet",
        created_at: new Date()
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "Send me your solution sheet",
        created_at: new Date()
    },
    {
        from: "tisha",
        to: "ayesha",
        msg: "Callback function exam sheet",
        created_at: new Date()
    },
    {
        from: "harshal",
        to: "nidhi",
        msg: "Sample data for javacript",
        created_at: new Date()
    },
    {
        from: "ankit",
        to: "ajay",
        msg: "who is the best vloger in japan",
        created_at: new Date()
    },
    {
        from: "wolvrine",
        to: "deadpool",
        msg: "see you in another timeline",
        created_at: new Date()
    }
];

Chat.insertMany (allChats);

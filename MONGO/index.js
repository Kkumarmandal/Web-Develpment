const mongoose = require('mongoose');

main()
.then (() => {
    console.log ("connection successfull");
})
.catch ((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema ({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model ("User", userSchema);

User.findOneAndDelete ({name: "Bruce"})
.then ((res) => {
    console.log (res)
})
.catch ((err) => {
    console.log (err)
});

// User.updateOne ({name: "Bruce"}, {age: 49})
// .then ((res) => {
//     console.log (res);
// })

// User.find ({name : "Bruce"}) 
// .then ((res) => {
//     console.log (res);
// })
// .catch ((err) => {
//     console.log (err)
// });

// const user1 = new User ({
//     name : "Eve",
//     email: "eve@yahoo.in",
//     age: 38,
// });
// user1
//     .save()
//     .then ((res) => {
//         console.log (res);
//     })
//     .catch ((err) => {
//         console.log(err);
//     });

/*User.insertMany ([
    {name: "Tony", email: "tony@gmail,com", age: 50},
    {name: "Bruce", email: "bruce@gmai;.com", age: 47},
    {name: "Peter", email: "peter@gmail.com", age: 30},
]).then ((res) => {
    console.log (res);
});*/

// User.find ({age : {$gt : 47}}) // age greater than 47
// .then ((res) => {
//     console.log (res);
// })
// .catch ((err) => {
//     console.log (err)
// });


//const Employee = mongoose.model ("Employee", userSchema);
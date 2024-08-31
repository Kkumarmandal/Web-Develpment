const mongoose = require('mongoose');

main()
.then (() => {
    console.log ("connection successfull");
})
.catch ((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = mongoose.Schema ({
    title : {
        type: String,
        require: true,
        maxLength: 20,
    },
    author : {
        type : String,
    },
    price : {
        type: Number,
        min : [1, "Please enter a valid Price"],
    },
    discount : {
        type : Number,
        default : 0,
    },
    category : {
        type : String,
        enum: ["fiction", "non-fiction"],
    },
    genre: [String]
});

const Book = mongoose.model ("Book", bookSchema);

// const book1 = new Book ({
//     title : "Marvel Comic V2",
//     price: 200,
//     genre : ["comic", "action", "non-fiction"],
// })
// book1.save().then ((res) => {
//     console.log (res);
// }).catch ((err) => {
//     console.log (err)
// });

Book.findByIdAndUpdate(
    "66cf2cfc4e9d6129c5cf6df6",
    {price: -100},
    {runValidators : true}
)
.then ((res) => {
    console.log (res);
})
.catch ((err) => {
    console.log (err.errors.price.properties.message);
})
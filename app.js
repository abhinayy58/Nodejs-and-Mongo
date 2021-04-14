const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const Book = require('./Book.model');
const db = 'mongodb://127.0.0.1:27017/books';




mongoose.connect(db);

app.get('/',function(req,res){
    res.send('Happy to be here')
})

app.get('/books',function(req,res){
    console.log('getting all books');
    Book.find({})
    .exec(function(err, books){
        if(err){
            res.send("error has occured")
        } else {
            console.log(books);
            res.json(books);
        }
    })
});







app.listen(3000, () => {
    console.log("Server is ruuning at 2000...")
})
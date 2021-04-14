// "use strict";

// var mongoose = require('mongoose');
// var schema = new mongoose.Schema({
//     title: String,
//     published: {
//         type: Date,
//         default: Date.now
//     },
//     keywords: Array,
//     published: Boolean,
//     author: {
//         type: mongoose.Schema.objectId,
//         ref: 'User'
//     },
//     //Embedded sub document
//     detail: {
//         modelNumber:Number,
//         hardcover: Boolean,
//         reviews: Number,
//         rank: Number
//     }
// })

// module.export = mongoose.model('Book', BookSchema);


const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    category:String

})

module.exports = mongoose.model('Book', BookSchema);
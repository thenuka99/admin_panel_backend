const mongoose = require("mongoose");


const reviewsSchema = new mongoose.Schema({
    starRating: {
        type: String,
        required:true,
        minlength :1,
        maxlength :5,
    },
    review: {
        type: String,
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    servicer: {  // recieved review from another people
        type: mongoose.Schema.Types.ObjectId,
        ref: 'serviceProvider',
    },
    addedOn:{
        type: Date,
    },

});

mongoose.model("Reviews", reviewsSchema);
const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let cardSchema = new Schema(
    {
        id: {
            type: String,
        },
        requestor: {
            type: String,
        },
        color: {
            type: String,
        },
        status: {
            type: String,
        },
        order: {
            type: Number,
        },
        content: {
            type: Object
        }
        // content: {
        //     type: Schema.ObjectId, 
        //     ref: 'content'
        // }
        ,
    }
);

let Card = mongoose.model("card", cardSchema);

module.exports = Card;
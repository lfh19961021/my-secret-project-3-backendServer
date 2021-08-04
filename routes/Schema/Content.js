const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let contentSchema = new Schema(
    {
        subject: {
            type: String,
        },
        dueDate: {
            type: String,
        },
        assignee: {
            type: String,
        },
        type: {
            type: String,
        },
        territory: {
            type: String,
        },
        dmVersion: {
            type: String,
        },
        description: {
            type: String,
        },
        lastModified: {
            type: String,
        },
    }
);

let Content = mongoose.model("content", contentSchema);

module.exports = Content;
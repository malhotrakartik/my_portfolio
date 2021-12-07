const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;             //just a datatype to give it to an entiity in schema
const projectSchema = new mongoose.Schema({
    //this statement tells the mongodb to create new schema in db
    name : {
        type : String,
        required : true
    },
    link : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true

    },
    photo : {
        type : String,
        default : ""
    },

    type : String
});

module.exports = mongoose.model("projects", projectSchema);

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;             //just a datatype to give it to an entiity in schema
const skillSchema = new mongoose.Schema({ skill: String, percentage : String});
const detailsSchema = new mongoose.Schema({
    //this statement tells the mongodb to create new schema in db
    name : {
        type : String,
        required : true
    },
    cgpa : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true

    },
    proImage : {
        type : String,
        default : ""
    },

    skills : [skillSchema]
});

module.exports = mongoose.model("Details", detailsSchema);

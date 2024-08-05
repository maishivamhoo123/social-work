const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 const IndexSchema = new Schema({
name:String,
email:String,
phoneno:Number,
qualli:String,
adress:String,
cv:String
    
 })
 const firstSchema = mongoose.model("firstSchema" , IndexSchema);
 module.exports = firstSchema;
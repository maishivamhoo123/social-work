const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 const PoshSchema = new Schema({
    id:Number,
link:String
    
 })
 const Posh = mongoose.model("Posh" ,PoshSchema);
 module.exports = Posh ;
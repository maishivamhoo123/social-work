const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 const EsgSchema = new Schema({
    id:Number,
link:String
    
 })
 const Esg = mongoose.model("Esg" ,EsgSchema);
 module.exports = Esg ;
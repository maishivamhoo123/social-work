const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 const AddEsgDOcumentSchema = new Schema({
   
heading:String,
paraesg1:String,
paraesg2:String,
li1:String,
li2:String,
li3:String,
Image1:String,

 })
 const EsgDocument = mongoose.model("EsgDocument" ,AddEsgDOcumentSchema);
 module.exports = EsgDocument ;
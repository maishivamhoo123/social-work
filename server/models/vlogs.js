const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 const VlogSchema = new Schema({
    id:Number,
link:String
    
 })
 const Vlog = mongoose.model("Vlog" ,VlogSchema);
 module.exports = Vlog ;
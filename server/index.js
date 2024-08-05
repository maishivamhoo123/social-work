const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { render } = require("ejs");


const Indexform = require("../server/models/indexpage");
const Contact = require("../server/models/contact");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const MONGOOSE_URL = "mongodb://127.0.0.1:27017/jijiwisha";



try {
    mongoose.connect(MONGOOSE_URL, {
     useNewUrlParser: true,
     useUnifiedTopology: true
   });
   console.log("Connected to MongoDB");
 } catch (error) {
   console.error("Error connecting to MongoDB:", error);
   process.exit(1); // Exit process if MongoDB connection fails
 }


 app.post("/contact", async (req, res) => {
    try {
      const { name , email , subject , message } = req.body;
  
      // Validate form data
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      // Create a new ContactIN instance
      const Contatus = new Contact({
        name,
        email,
        subject,
        message
      });
     
      // Save data to MongoDB
      await Contatus.save();
  
      console.log("Registration successful", Contatus);
      res.status(200).json({ alert: "Contact saved successfully" });
    } catch (error) {
      console.error("Error saving contact:", error);
      res.status(500).json({ error: "Failed to save contact" });
    }
  });





  app.post("/Register", async (req, res) => {
    try {
      const { name , email , phoneno , qualli, adress ,cv } = req.body;
  
      // Validate form data
      if (!name || !email || !phoneno ||!qualli ||!adress ||!cv) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      // Create a new ContactIN instance
      const Appointment = new Indexform({
        name,
        email,
        phoneno , 
        qualli ,
        adress ,
        cv
      });
     
      // Save data to MongoDB
      await Appointment.save();
  
      console.log("Registration successful", Appointment);
      res.status(200).json({ alert: "Contact saved successfully" });
    } catch (error) {
      console.error("Error saving contact:", error);
      res.status(500).json({ error: "Failed to save contact" });
    }
  });
  
  app.listen(8080, () => {
    console.log("App is started at port 8080");
});

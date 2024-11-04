const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { render } = require("ejs");


const Indexform = require("../server/models/indexpage");
const Contact = require("../server/models/contact");
const Vlog = require("../server/models/vlogs");
const Posh = require("../server/models/posh");
const Esg = require("../server/models/esg");
const EsgDocument = require("../server/models/esgdocumentation");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

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
      const { name , email , subject , message ,} = req.body;
  
      // Validate form data
      if (!name || !email || !subject || !message ) {
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





  //add esg documentation 


  app.post("/add-esgdocument", async (req, res) => {
    try {
      const {heading,paraesg1,paraesg2,li1,li2,li3,Image1,imageBase64} = req.body;
  
      // Validate form data
      if (!heading || !paraesg1 || !paraesg2 || !li1  ||!li2  || !li3 || !Image1 ) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      // Create a new ContactIN instance
      const EsgAddDocument = new EsgDocument({
       heading,
       paraesg1,
       paraesg2,
       li1,
       li2,
       li3,
       Image1,
       
      });
     
      // Save data to MongoDB
      await EsgAddDocument.save();
  
      console.log("Registration successful",EsgAddDocument);
      res.status(200).json({ alert: "Contact saved successfully" });
    } catch (error) {
      console.error("Error saving contact:", error);
      res.status(500).json({ error: "Failed to save contact" });
    }
  });


  //add esg document

  app.get("/add-esgdocument", (req, res) => {
    EsgDocument.find()
      .then((EsgAddDocument) => {
        res.json(EsgAddDocument); // Send the data as a JSON response
        console.log(EsgAddDocument); // Log the data being sent
        // console.log(res);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Server Error");
      });
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






// Add vlogs 


app.post("/add-project", async (req, res) => {
  try {
    const { id , link } = req.body;

    // Validate form data
    if (!id || !link ) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new ContactIN instance
    const Addproject = new Vlog({
      id,
      link
    });
   
    // Save data to MongoDB
    await Addproject.save();

    console.log("Registration successful", Addproject);
    res.status(200).json({ alert: "vlog updated" });
  } catch (error) {
    console.error("Error saving vlog:", error);
    res.status(500).json({ error: "Failed to save vlog" });
  }
});

//post vlog

app.get("/add-project", (req, res) => {
  Posh.find()
    .then((AddVlog) => {
      res.json(AddVlog); // Send the data as a JSON response
      console.log(AddVlog); // Log the data being sent
      // console.log(res);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Server Error");
    });
});

//add esg

app.post("/add-posh", async (req, res) => {
  try {
    const { id , link } = req.body;

    // Validate form data
    if (!id || !link ) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new ContactIN instance
    const Addposh= new Posh({
      id,
      link
    });
   
    // Save data to MongoDB
    await Addposh.save();

    console.log("Registration successful", Addposh);
    res.status(200).json({ alert: "vlog updated" });
  } catch (error) {
    console.error("Error saving vlog:", error);
    res.status(500).json({ error: "Failed to save vlog" });
  }
});
// get posh


app.get("/add-posh", (req, res) => {
  Posh.find()
    .then((Addposh) => {
      res.json(Addposh); // Send the data as a JSON response
      console.log(Addposh); // Log the data being sent
      // console.log(res);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Server Error");
    });
});

// Add posh



app.post("/add-esg", async (req, res) => {
  try {
    const { id , link } = req.body;

    // Validate form data
    if (!id || !link ) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new ContactIN instance
    const AddEsg= new Esg({
      id,
      link
    });
   
    // Save data to MongoDB
    await AddEsg.save();

    console.log("Registration successful", AddEsg);
    res.status(200).json({ alert: "vlog updated" });
  } catch (error) {
    console.error("Error saving vlog:", error);
    res.status(500).json({ error: "Failed to save vlog" });
  }
});




app.get("/add-esg", (req, res) => {
  Esg.find()
    .then((AddEsg) => {
      res.json(AddEsg); // Send the data as a JSON response
      console.log(AddEsg); // Log the data being sent
      // console.log(res);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Server Error");
    });
});





  
app.listen(8080, () => {
  console.log("App is started at port 8080");
});
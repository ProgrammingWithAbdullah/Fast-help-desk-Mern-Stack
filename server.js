const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/Fast", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const collectionSchema = new mongoose.Schema({
  user_id: String,
  email: String,
  password: String,
});

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const formDataSchema = new mongoose.Schema({
  user_id: String,
  road: String,
  option: String,
  message: String,
});

const formbooks = new mongoose.Schema({
  user_id: String,
  dcourses: String,
  demail: String,
  dformm: String,
  dtext: String,
});

const formbookss = new mongoose.Schema({
  user_id: String,
  ccourses: String,
  cemail: String,
  cformm: String,
  ctext: String,
});

const swaps = new mongoose.Schema({
  user_id: String,
  course: String,
  current: String,
  destination: String,
  field: String,
});

const hostel = new mongoose.Schema({
  user_id: String,
  gender: String,
  location: String,
  price: String,
});

const chat = new mongoose.Schema({
  students_id: String,
  message: String,
});

const questions = new mongoose.Schema({
  user_id: String,
  course: String,
  city: String,
  message: String,
});

const quest = mongoose.model("TeacherQuestions", questions);
const chatt = mongoose.model("Chat", chat);
const Collection = mongoose.model("Login", collectionSchema);
const formData = mongoose.model("pick", formDataSchema);
const formbook = mongoose.model("distribute", formbooks);
const formbook2 = mongoose.model("collect", formbookss);
const swapp = mongoose.model("swap", swaps);
const hostell = mongoose.model("male hostel", hostel);
const femhostell = mongoose.model("female hostel", hostel);
const formData2 = mongoose.model("drop", formDataSchema);

let userid;

//l2184447@lhr.nu.edu.pk
app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await Collection.findOne({ email });

    if (check) {
      res.json("exist");
    } else {
      // Generate the user_id
      const userId = email.substring(0, 3); // Extract first three digits of the email
      const randomDigits = Array.from({ length: 5 }, () =>
        getRandomInt(0, 9)
      ).join("");
      userid = `${userId}${randomDigits}`;

      console.log("Generated user_id:", userid); // Log the generated user_id

      const newData = new Collection({ user_id: userid, email, password });
      await newData.save();
    }
  } catch (error) {
    console.error("Error in login:", error);
    res.json("fail");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await Collection.findOne({ email });

    if (check) {
      res.json("exist");
    } else {
      // Generate the user_id
      const userId = email.substring(0, 3); // Extract first three digits of the email
      const randomDigits = Array.from({ length: 5 }, () =>
        getRandomInt(0, 9)
      ).join("");
      userid = `${userId}${randomDigits}`;

      console.log("Generated user_id:", userid); // Log the generated user_id

      const newData = new Collection({ user_id: userid, email, password });
      await newData.save();
    }
  } catch (error) {
    console.error("Error in signup:", error);
    res.json("fail");
  }
});

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

// Caarpoling
app.post("/form", async (req, res) => {
  const { road, option, message } = req.body;

  try {
    // Create a new document with the form data
    const newForm = new formData({ user_id: userid, road, option, message });
    const newForm2 = new formData2({ user_id: userid, road, option, message });

    // Save the document to MongoDB
    if (option == "drop") {
      await newForm2.save();
      res.redirect("/dropdata");
    } else {
      await newForm.save();
      res.redirect("/pickdata");
    }

    console.log("Form data saved successfully");
    console.log("User ID:", userid); // Log the userid after saving the form data
  } catch (error) {
    console.error("Error saving form data:", error);
  }
});

app.post("/collect", async (req, res) => {
  const { cemail, ccourses, cformm, ctext } = req.body;

  try {
    // Create a new document with the form data
    const newForm3 = new formbook2({
      user_id: userid,
      cemail,
      ccourses,
      cformm,
      ctext,
    });

    // Save the document to MongoDB
    await newForm3.save();

    console.log("Form data saved successfully");
  } catch (error) {
    console.error("Error saving form data:", error);
  }
});

app.post("/distribute", async (req, res) => {
  const { demail, dcourses, dformm, dtext } = req.body;

  try {
    // Create a new document with the form data
    const newForm99 = new formbook({
      user_id: userid,
      demail,
      dcourses,
      dformm,
      dtext,
    });

    // Save the document to MongoDB
    await newForm99.save();

    console.log("Form data saved successfully");
  } catch (error) {
    console.error("Error saving form data:", error);
  }
});

app.post("/swap", async (req, res) => {
  const { course, current, destination, field } = req.body;

  try {
    // Create a new document with the form data
    const newForm4 = new swapp({
      user_id: userid,
      course,
      current,
      destination,
      field,
    });

    // Save the document to MongoDB
    await newForm4.save();

    console.log("Form data saved successfully");
  } catch (error) {
    console.error("Error saving form data:", error);
  }
});

app.post("/hostel", async (req, res) => {
  const { gender, location, price, option } = req.body;

  try {
    const newForm5 = new hostell({ user_id: userid, gender, location, price });
    const newForm11 = new femhostell({
      user_id: userid,
      gender,
      location,
      price,
    });

    // Save the document to MongoDB
    if (gender === "female" && option === "have") await newForm11.save();
    else if (gender === "male" && option === "have") await newForm5.save();

    console.log(option);

    console.log("Form data saved successfully");
  } catch (error) {
    console.error("Error saving form data:", error);
  }
});

app.post("/askstud", async (req, res) => {
  const { usersid, message } = req.body;

  try {
    // Create a new document with the form data
    const newForm = new chatt({
      students_id: usersid,
      message: message,
    });

    // Save the document to MongoDB
    await newForm.save();

    console.log("Form data saved successfully");
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).send("Error saving form data");
  }
});

app.post("/questions", async (req, res) => {
  const { course, city, message } = req.body;

  try {
    // Create a new document with the form data
    const newForm = new quest({
      user_id: userid,
      course: course,
      city: city,
      message: message,
    });

    // Save the document to MongoDB
    await newForm.save();

    console.log("Form data saved successfully");
    console.log("User ID:", userid); // Log the userid after saving the form data

    // Redirect to appropriate route based on option
    if (option === "drop") {
      res.redirect("/dropdata");
    } else {
      res.redirect("/pickdata");
    }
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).send("Error saving form data");
  }
});

//Printing in html
app.get("/pickdata", async (req, res) => {
  try {
    // Find all documents in the collection using the formData model
    const data = await formData2.find({}); // Use formData model to interact with the collection

    if (data.length === 0) {
      console.log("Data inserted in the collection.");
      res.send("<h2>Data inserted in the collection.</h2>");
      return;
    }

    console.log("user id is");
    console.log(userid);

    // Construct HTML to display the retrieved data
    let html = "<h2>Pickup Locations Data:</h2><ul>";
    data.forEach((entry, index) => {
      console.log(entry.road);
      html += `<li>Entry ${index + 1}:<br>
               User Id: ${entry.user_id}<br>
               Road: ${entry.road}<br>
               Option: ${entry.option}<br>
               Message: ${entry.message}<br></li><br>`;
    });
    html += "</ul>";

    // Send the HTML to the client for rendering
    res.send(html);
  } catch (error) {
    console.error("Error retrieving and displaying form data:", error);
    res.status(500).send("Error retrieving and displaying form data");
  }
});

app.get("/dropdata", async (req, res) => {
  try {
    // Find all documents in the collection using the formData model
    const data = await formData.find({}); // Use formData model to interact with the collection

    if (data.length === 0) {
      console.log(" Data inserted in the collection.");
      res.send("<h2>Data inserted in the collection.</h2>");
      return;
    }

    // Construct HTML to display the retrieved data
    let html = "<h2>Drop Locations Data:</h2><ul>";
    data.forEach((entry, index) => {
      console.log(entry.road);
      html += `<li>Entry ${index + 1}:<br>
               User Id: ${entry.user_id}<br>
               Road: ${entry.road}<br>
               Option: ${entry.option}<br>
               Message: ${entry.message}<br></li><br>`;
    });
    html += "</ul>";

    // Send the HTML to the client for rendering
    res.send(html);
  } catch (error) {
    console.error("Error retrieving and displaying form data:", error);
    res.status(500).send("Error retrieving and displaying form data");
  }
});

app.get("/booksdata", async (req, res) => {
  try {
    // Find all documents in the collection using the formData model
    const data = await formbook.find({}); // Use formData model to interact with the collection

    if (data.length === 0) {
      console.log("Data inserted in the collection.");
      res.send("<h2>Data inserted in the collection.</h2>");
      return;
    }

    // Construct HTML to display the retrieved data
    let html = "<h2>Books Data:</h2><ul>";
    data.forEach((entry, index) => {
      console.log(entry.road);
      html += `<li>Entry ${index + 1}:<br>
               User Id: ${entry.user_id}<br>
               Courses: ${entry.dcourses}<br>
               Edition: ${entry.demail}<br>
               Book Form: ${entry.dformm}<br>
               Note: ${entry.dtext}<br></li><br>`;
    });
    html += "</ul>";

    // Send the HTML to the client for rendering
    res.send(html);
  } catch (error) {
    console.error("Error retrieving and displaying form data:", error);
    res.status(500).send("Error retrieving and displaying form data");
  }
});

app.get("/thanks", async (req, res) => {
  try {
    // Construct HTML to display the retrieved data
    let html =
      "<h1>Thanks For Your Contribution And Participation.Your Contribution Will Be Share To And Help The Deserving Ones.</h1>";

    // Send the HTML to the client for rendering
    res.send(html);
  } catch (error) {
    console.error("Error retrieving and displaying form data:", error);
    res.status(500).send("Error retrieving and displaying form data");
  }
});

app.get("/malehostelsdata", async (req, res) => {
  try {
    const data = await hostell.find({}); // Use formData model to interact with the collection

    if (data.length === 0) {
      console.log("Data inserted in the collection.");
      res.send("<h2>Data inserted in the collection.</h2>");
      return;
    }

    // Construct HTML to display the retrieved data
    let html = "<h2>Hostels Data:</h2><ul>";
    data.forEach((entry, index) => {
      console.log(entry.road);
      html += `<li>Entry ${index + 1}:<br>
               User Id: ${entry.user_id}<br>
               Courses: ${entry.gender}<br>
               Edition: ${entry.location}<br>
               Book Form: ${entry.price}<br>`;
    });
    html += "</ul>";

    // Send the HTML to the client for rendering
    res.send(html);
  } catch (error) {
    console.error("Error retrieving and displaying form data:", error);
    res.status(500).send("Error retrieving and displaying form data");
  }
});

app.get("/femalehostelsdata", async (req, res) => {
  try {
    // Find all documents in the collection using the formData model
    const data = await femhostell.find({}); // Use formData model to interact with the collection

    if (data.length === 0) {
      console.log("Data inserted in the collection.");
      res.send("<h2>Data inserted in the collection.</h2>");
      return;
    }

    // Construct HTML to display the retrieved data
    let html = "<h2>Hostels Data:</h2><ul>";
    data.forEach((entry, index) => {
      console.log(entry.road);
      html += `<li>Entry ${index + 1}:<br>
               User Id: ${entry.user_id}<br>
               Courses: ${entry.gender}<br>
               Edition: ${entry.location}<br>
               Book Form: ${entry.price}<br>`;
    });
    html += "</ul>";

    // Send the HTML to the client for rendering
    res.send(html);
  } catch (error) {
    console.error("Error retrieving and displaying form data:", error);
    res.status(500).send("Error retrieving and displaying form data");
  }
});

app.get("/search/:key", async (req, resp) => {
  const { key } = req.params; // Extract the key parameter from the URL

  try {
    const data = await formbook.find({ dcourses: key });

    if (data.length === 0) {
      console.log("Data inserted in the collection.");
      resp.send("<h2>Data inserted in the collection.</h2>");
      return;
    }

    // Construct HTML to display the retrieved data
    let html = "<h2>Books Data:</h2><ul>";
    data.forEach((entry, index) => {
      html += `<li>Entry ${index + 1}:<br>
               User Id: ${entry.user_id}<br>
               Courses: ${entry.dcourses}<br>
               Edition: ${entry.demail}<br>
               Book Form: ${entry.dformm}<br>
               Note: ${entry.dtext}<br></li><br>`;
    });
    html += "</ul>";

    // Send the HTML to the client for rendering
    resp.send(html);
  } catch (error) {
    console.error("Error searching for data:", error);
    resp.status(500).send("Error searching for data");
  }
});

app.get("/searchswap/:key", async (req, res) => {
  const { key } = req.params;

  try {
    const data = await swapp.find({ field: key });

    if (data.length === 0) {
      console.log("Data inserted in the collection.");
      res.send("<h2>Data inserted in the collection.</h2>");
      return;
    }

    // Construct HTML to display the retrieved data
    let html = "<h2>Swaps Data:</h2><ul>";
    data.forEach((entry, index) => {
      console.log(entry.road);
      html += `<li>Entry ${index + 1}:<br>
               User Id: ${entry.user_id}<br>
               Course : ${entry.course}<br>
               Current Section: ${entry.current}<br>
               Destination Section: ${entry.destination}<br>
               Field : ${entry.field}<br>`;
    });
    html += "</ul>";

    res.send(html);
  } catch (error) {
    console.error("Error retrieving and displaying form data:", error);
    res.status(500).send("Error retrieving and displaying form data");
  }
});

app.delete("/delete/:gender/:location", async (req, res) => {
  const { gender, location } = req.params; // Extract gender and location parameters from the URL

  try {
    if (gender == "male") {
      const result = await hostell.deleteOne({
        location: location,
      });
    } else {
      const result = await femhostell.deleteOne({
        location: location,
      });
    }
    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Hostel deleted successfully" });
    } else {
      res.status(404).json({ message: "Hostel not found" });
    }
  } catch (error) {
    console.error("Error deleting hostel:", error);
    res.status(500).json({ message: "Error deleting hostel" });
  }
});

app.delete("/deleteswap/:ccourses/:field", async (req, res) => {
  const { ccourses, field } = req.params;
  console.log(ccourses);
  console.log(field);

  try {
    const result = await swapp.deleteOne({ course: ccourses, field: field });

    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Record deleted successfully" });
    } else {
      res.status(404).json({ message: "Record not found" });
    }
  } catch (error) {
    console.error("Error deleting record:", error);
    res.status(500).json({ message: "Error deleting record" });
  }
});

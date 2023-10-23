const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

mongoose
  .connect(
    "mongodb+srv://vinaycheripally1:vinay123@cluster0.kq7rnjc.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  batch: Number,
  hostel: Number,
  phno: Number,
  rollno: Number,
});

var student = mongoose.model("student", studentSchema);

app.get("/getinfo", (req, res) => {
  console.log(req.query.query);
  student
    .findOne({ rollno: req.query.query })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/postinfo", (req, res) => {
  var temp = new student(req.body);
  temp
    .save()
    .then(() => {
      res.send("saved");
    })
    .catch((err) => {
      res.send(err);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

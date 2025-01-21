const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// In-memory database
let tests = [];
let examBank = [];
let examDetails = {};

// Routes
app.get("/tests", (req, res) => {
  res.json(tests);
});

app.post("/tests", (req, res) => {
  const { question, answer } = req.body;
  if (question && answer) {
    const newTest = { id: Date.now(), question, answer }; // Generate unique ID
    tests.push(newTest);
    res.status(201).json(newTest);
  } else {
    res.status(400).json({ message: "Invalid data" });
  }
});


app.get("/exam-bank", (req, res) => {
  res.json(examBank);
});

app.post("/exam-bank", (req, res) => {
  const question = req.body;
  if (question && question.question && question.answer) {
    examBank.push(question);
    res.status(201).json(question);
  } else {
    res.status(400).json({ message: "Invalid data" });
  }
});

app.get("/exam-details", (req, res) => {
  res.json(examDetails);
});

app.post("/exam-details", (req, res) => {
  const { startTime, endTime } = req.body;
  if (startTime && endTime) {
    examDetails = { startTime, endTime };
    res.status(201).json(examDetails);
  } else {
    res.status(400).json({ message: "Invalid data" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

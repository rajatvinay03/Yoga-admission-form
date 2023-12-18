const express = require('express');
const cors = require('cors');
const path = require('path')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const enrollmentRoute = require('./routes/enrollment');

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://rajatvinay03:Rajat1611@cluster0.uq3g28u.mongodb.net/")
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};

connectDatabase()

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

app.use(enrollmentRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

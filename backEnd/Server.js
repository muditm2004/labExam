const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect("mongodb+srv://muditm004:mudit@123@cluster0.yjalz.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })

  .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/api/users",require("./routes/userRoutes") );
console.log('userroutes');

const PORT = 6000;
app.listen(`${PORT}`, () => console.log(`Server running on port ${PORT}`));

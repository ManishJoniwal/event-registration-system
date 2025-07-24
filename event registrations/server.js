const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000;
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());


// routes
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/admin", require("./routes/adminRoute"));

// Connect to MongoDB and run server
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("mongodb connected")
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
}).catch((err) => {
  console.error(err)
});







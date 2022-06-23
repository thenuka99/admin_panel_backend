const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//DB connect
mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());

//models
require("./models/user");
require("./models/serviceCategory");
require("./models/service");
require("./models/appointment");
require("./models/serviceProvider");
require("./models/reviews");

// routes
app.get("/", (req, res) => {
  res.send("Servicr backend online...");
});

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const serviceCategories = require("./routes/serviceCategories");
const serviceRoutes = require("./routes/service");
const appointmentRoutes = require("./routes/appointment");
const reviewsRoutes = require("./routes/reviews");
const serviceProviderRoutes = require("./routes/serviceProvider");

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/categories", serviceCategories);
app.use("/api/services", serviceRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/api/serviceProvider", serviceProviderRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

const mongoose = require("mongoose");
const { User } = require("../models/user.model");
const data = require("./admin.js");

const exportData = async (req, res) => {
  try {
    // Drop the entire database
    await mongoose.connection.db.dropDatabase();
    console.log("Database dropped successfully.");

    // Insert the admin user (will be hashed automatically)
    await User.create(data);
    const message = "Database cleared. Admin user inserted.";

    res.status(201).send({ message });
  } catch (error) {
    console.error("Export Error:", error);
    res.status(500).send({ error: "Something went wrong" });
  }
};

module.exports = exportData;

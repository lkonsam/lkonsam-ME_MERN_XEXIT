const User = require("../models/user.model");
const Resignation = require("../models/resignation.model");
const Response = require("../models/response.model");
const data = require("./admin.js");

const exportData = async (req, res) => {
  try {
    // Delete all documents from specific collections
    await User.deleteMany({});
    await Resignation.deleteMany({});
    await Response.deleteMany({});

    // Insert admin user
    await User.create(data);

    const message =
      "User, Resignation, and Response collections cleared. Admin user inserted.";
    res.status(201).send({ message });
  } catch (error) {
    console.error("Export Error:", error);
    res.status(500).send({ error: "Something went wrong" });
  }
};

module.exports = exportData;

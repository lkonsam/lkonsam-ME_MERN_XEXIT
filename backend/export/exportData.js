const User = require("../models/user.model");
const data = require("./admin.js");

const exportData = async (req, res) => {
  try {
    let message = "";
    const exists = await User.findOne({ username: data.username });
    if (!exists) {
      await User.create(data);
      message = "Admin user inserted.";
    } else {
      exists.password = data.password; // new plain password
      await exists.save(); // triggers pre-save hook to hash it
      message = "Admin password updated.";
    }

    res.status(201).send({ message });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Something went wrong" });
  }
};

module.exports = exportData;

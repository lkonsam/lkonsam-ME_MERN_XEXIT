const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");

const router = require("./routes/v1/index");
const exportData = require("./export/exportData");

const app = express();
const PORT = config.port || 8082;



// mongoose.set("strictQuery", true);
mongoose
  .connect(config.mongoose.url, config.mongoose.options)
  .then(() => console.log("DB Connected!"))
  .catch((error) => console.log("Error in connecting DB", error));

app.use(cors());
app.use(express.json());

app.use("/api", router);
app.post("/export", exportData);




app.listen(PORT, () => {
  console.log(`Backend listening on Port ${PORT}!`);
});

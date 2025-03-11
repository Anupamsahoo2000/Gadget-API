const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./db");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const gadgets = require("./routes/gadgetRouts");

app.use("/gadgets", gadgets);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

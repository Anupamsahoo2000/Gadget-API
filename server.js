const express = require("express");
const app = express();
const sequelize = require("./db");
require("dotenv").config();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

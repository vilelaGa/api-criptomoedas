// const env = require("dotenv");
const express = require("express");
const cors = require("cors");
const routes = require("../routes/routes");

// env.config();
const app = express();
const port = process.env.PORT ? process.env.PORT : 3333;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port);

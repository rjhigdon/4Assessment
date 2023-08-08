const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addAccomp } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)

app.post("/api/accompArr", addAccomp)

app.listen(4000, () => console.log("Server running on 4000"));

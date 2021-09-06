import express from "express";
import cors from "cors";

const app = express();
let counter = 0;

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors());

app.post("/", function (req, res) {
  counter++;
  console.log(`${counter}`);
  res.send(`${counter}`);
});

app.get("/", function (req, res) {
  console.log("GET clicked again");
  res.send(`${counter}`);
});

const callback = () => {
  console.log("Server has started in http://localhost:3012");
};
app.listen(3012, callback);

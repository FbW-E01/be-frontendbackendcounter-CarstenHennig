import express from "express";
import cors from "cors";

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors());

app.post("/", function (req, res) {
  console.log("Post clicked again", req.body);
  res.send("POST Request received!\n");
});

app.get("/", function (req, res) {
  console.log("GET clicked again");
  res.send(req.body);
});

const callback = () => {
  console.log("Server has started in http://localhost:3012");
};
app.listen(3012, callback);

import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Hello CI!"));

app.listen(process.env.port || 3000, () =>
  console.log(`CI example app listening on port ${port}!`)
);

const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello CI!"));

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`CI example app listening on port ${port}!`)
);

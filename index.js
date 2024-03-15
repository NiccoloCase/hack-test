const express = require("express");
const requestIp = require("request-ip");

const app = express();
app.use(requestIp.mw());

app.get("/img", (req, res) => {
  // prende indirizzo ip e porta del server
  console.log(req.headers.host);
  // prende indirizzo ip del client
  console.log(req.connection.remoteAddress);
  // prende indirizzo ip del client
  console.log(req.ip);
  console.log(req.headers["x-forwarded-for"]);
  const ip = req.clientIp;
  console.log({ ip });

  res.sendFile(__dirname + "/img.jpeg");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

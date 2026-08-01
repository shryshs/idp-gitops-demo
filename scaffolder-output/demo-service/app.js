const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_, res) => {
  res.json({ service: "demo-service", status: "ok", platform: "idp-mvp" });
});

app.listen(port, () => {
  console.log(`demo-service listening on ${port}`);
});

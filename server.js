const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, mynewapp-server is running!");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API của bạn đang chạy trên Render!" });
});

app.get("/api/ping", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


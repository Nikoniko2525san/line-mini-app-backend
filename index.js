const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, LINE Mini App!");
});

app.get("/api/user", (req, res) => {
  res.json({ message: "ユーザー情報を取得しました！" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
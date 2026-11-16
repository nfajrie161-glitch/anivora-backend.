
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    app: "AniVora Backend",
    status: "online",
    message: "Backend berhasil berjalan!"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`AniVora berjalan di port ${PORT}`);
});

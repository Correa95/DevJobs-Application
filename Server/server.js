const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(require("morgan")("dev"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

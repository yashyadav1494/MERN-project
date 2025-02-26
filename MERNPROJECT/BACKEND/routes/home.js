const express = require("express");
const auth = require("./middleware/auth");
const router = express.Router();

router.get("/home", auth, (req, res) => {
  res.json({ message: "Welcome to the Organic Food Website!" });
});

module.exports = router;

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/calibrate", function(req, res, next) {
  res.render("calibration", { title: "Calibtration" });
});

module.exports = router;

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("crown_57", { title: "Express", name: "游志信", id: 209410157 });
});

module.exports = router;

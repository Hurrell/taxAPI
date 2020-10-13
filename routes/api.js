var express = require("express");
var router = express.Router();
var apiController = require("../controllers/apiController");

/* GET api. */
router.get("/", function (req, res, next) {
  //Return some info about using the api
  res.send("Received GET HTTP method");
});

/* POST api. */
router.post("/", function (req, res, next) {
  res.json(apiController(req.body));
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  Tips.find().then((data) => {
    console.log(data);
  })
});

module.exports = router;
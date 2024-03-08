var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/tip", (req, res) => {
  Tip.find().then((data) => {
    res.json({result: true, tip: data})
  })
});

router.get("/tip/:id", (req, res) => {
  Tip.findOne({
    id: (req.params.id, "i")
  }).then(data) 
  res.json({result: true, id: data})
  console.log(data);

})

module.exports = router;

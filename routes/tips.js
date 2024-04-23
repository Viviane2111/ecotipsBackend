var express = require("express");
var router = express.Router();
const Tips = require("../models/tipsModel");

// Récupérer l'ensemble des tips
// router.get("/tips", (req, res) => {
//    Tips.find().then((data) => {
//       res.json({result: true, tips: data});
//       console.log(data);
//    })
// });

// Tips aléatoires
router.get("/tips", (req, res) => {
  Tips.countDocuments()
    .then((count) => {
      const randomIndex = Math.floor(Math.random() * count);
      Tips.aggregate([{ $skip: randomIndex }, { $limit: 1 }])
        .then((result) => {
          res.json({ result: true, tip: result });
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
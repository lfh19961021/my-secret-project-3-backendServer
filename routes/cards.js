var express = require('express');
const Card = require("./Schema/Card");
const Content = require("./Schema/Content");
var router = express.Router();

/* GET localhost:3000/test */
router.get("/cards", async (req, res) => {
  try {
    let cards = await Card.find().sort({order: 1});
    res.status(200).json({
      status: 200,
      data: cards,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});
router.post("/cards", async (req, res) => {
  try {
    let card = new Card(req.body);
    card = await card.save();
    res.status(200).json({
      status: 200,
      data: card,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});
router.put("/cards/:cardId", async (req, res) => {
  try {
    let card = await Card.findOneAndUpdate({ id: req.params.cardId }, req.body, {
      new: true,
    });
    if (card) {
      res.status(200).json({
        status: 200,
        data: card,
      });
    }
    res.status(400).json({
      status: 400,
      message: "No post found",
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.delete("/cards/:cardId", async (req, res) => {
  try {
    let card = await Card.findOneAndDelete({ id: req.params.cardId });
    
    if (card) {
      res.status(200).json({
        status: 200,
        message: "Card deleted successfully",
      });
    } else {
      res.status(400).json({
        status: 400,
        message: "No card found",
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

module.exports = router;

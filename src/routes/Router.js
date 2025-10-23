const express = require("express");
const router = express.Router();
const questController = require("../controllers/questController");

router.get("/all", questController.getAllQuests);
router.post("/", questController.createQuest);
module.exports = router;

const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");

router.get("/books", bookController.index);
router.get("/fake-books",bookController.fakeBook)
module.exports = router;


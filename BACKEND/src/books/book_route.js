const express = require('express')
const router = express.Router();

const Book = require("./book_model");
const { postAbook, getAllBooks, getSingleBook, updateBook, deleteBook } = require('./book_controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');

router.post("/create-book", verifyAdminToken,postAbook)

router.get("/", getAllBooks)

router.get("/:id", getSingleBook)

router.put("/edit/:id", verifyAdminToken, updateBook)

router.delete("/del/:id", verifyAdminToken, deleteBook)

module.exports = router;
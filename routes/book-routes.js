import express from "express";
import {
  getAllBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
} from "../controllers/book-controller.js";

const router = express.Router();

router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBook);
router.post("/add", addBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

export default router;

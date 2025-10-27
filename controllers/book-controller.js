import bookModel from "../models/book.js";

const getAllBooks = async (req, res) => {
  try {
    const allBook = await bookModel.find({});
    if (allBook.length > 0) {
      res.status(200).json({
        message: "here is all your books",
        data: allBook,
      });
    } else {
      res.status(404).json({
        message: "book not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const getId = req.params.id;
    const findByID = await bookModel.findById(getId);
    if (findByID) {
      res.status(200).json({
        message: "here is your book",
        data: findByID,
      });
    } else {
      res.status(404).json({
        message: "book not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

const addBook = async (req, res) => {
  try {
    const bookData = req.body;
    const createBook = await bookModel.create(bookData);
    if (createBook) {
      res.status(201).json({
        message: "book created sucessfully",
        data: createBook,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "book is not created",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const getData = req.body;
    const getId = req.params.id;
    const updateById = await bookModel.findByIdAndUpdate(getId, getData, {
      new: true,
    });
    if (updateById) {
      res.status(200).json({
        message: "updated sucessfully",
        data: updateById,
      });
    } else {
       res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    }
  } catch (error) {
    console.log(error);
     res.status(500).json({
        message: "something went wrong try again",
      });
  }
};

const deleteBook = async (req, res) => {
  try {
    const getId = req.params.id;
    const deleteBookById = await bookModel.findByIdAndDelete(getId);
    if (deleteBookById) {
      req.status(200).json({
        message: "deleted book sucessfully",
        data: deleteBookById,
      });
    } else {
      res.status(404).json({
        message: "Book is not found with this ID",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export { getAllBooks, getSingleBook, addBook, updateBook, deleteBook };

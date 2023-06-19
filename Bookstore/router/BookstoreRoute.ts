import express from "express";

// import { UploadBooks, ViewAllBooks } from "../controller/BookstoreController";
import {
  UploadBooks,
  ViewAllBooks,
  ViewSingleBook,
} from "../controller/BookstoreController";

const Router = express.Router();

Router.route("/upload-books").post(UploadBooks);
Router.route("/all-books").get(ViewAllBooks);
Router.route("/one-book/:bookID/details").get(ViewSingleBook);

export default Router;

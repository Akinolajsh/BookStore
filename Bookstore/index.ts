import express, { Application } from "express";
import mongoose from "./config/BookStoreDB";
import Router from "./router/BookstoreRoute";
const port: number = 3500;
// Extantiated my server from express
const app: Application = express();
mongoose;
app.use(express.json());

// Configuring the routes for the project
app.use("/api", Router);
app.listen(port, () => {
  console.log("");
  console.log(`Server is running and listening to port on ${port}`);
});
import express from "express";
import { router as MovieRouter } from "./router/MovieRouter.mjs";
import {initDB} from './communication/database.mjs'


const app = express();

app.use(MovieRouter);
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  initDB()
  console.log(`Example app listening on port ${port}`);
});

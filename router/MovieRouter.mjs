import express from "express";
import { getMovieData } from "../communication/api.mjs";

export const router = express.Router();

router.get("/movie", async (req, res) => {
  try {
    console.log("about to send data");
    const data = await getMovieData();
    console.log(data)
    return res.json(data);
  } catch (err) {
    console.log("error is encountered: ", err);
  }
});

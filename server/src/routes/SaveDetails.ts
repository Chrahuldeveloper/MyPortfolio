import { Router } from "express";
import db from "../dbconfig/ConnectDb";
const saveDetails = Router();

saveDetails.post("/api/user", async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(404).json({
        err: "Name and email are required",
      });
    }
    await db.query("INSERT INTO users (name,email) VALUES  ($1,$2)", [
      name,
      email,
    ]);
    console.log("saved saved");
    res.status(200).json({
      sucess: true,
    });
  } catch (error) {
    console.log(error);
  }
});

export default saveDetails;

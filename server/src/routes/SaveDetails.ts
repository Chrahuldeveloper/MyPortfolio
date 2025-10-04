import { Router } from "express";
import db from "../dbconfig/ConnectDb";
import rateLimiter from "../ratelimiter/RateLimiter";
const saveDetails = Router();
saveDetails.post("/api/user", async (req, res) => {
  try {
    const userKey = req.ip;

    const allowed = rateLimiter.limiter(userKey?.toString()!);
    if (!allowed) {
      return res.status(429).json({
        error: "Too many requests. Please try again later.",
      });
    }

    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(404).json({
        err: "Name and email are required",
      });
    }

    const existingEmails = await db.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingEmails.rows[0]) {
      return res.status(429).json({
        error: "Email already exits",
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

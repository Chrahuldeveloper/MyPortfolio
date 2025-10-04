require("dotenv").config();
import { Pool } from "pg";  
const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "myportfolio",
  password: "1234",
  port: 5432,
});

db.query("SELECT NOW()", (err:unknown, res:unknown) => {
  if (res) {
    console.log("db Connected");
  } else {
    console.error("Connection error", err);
  }
});

export default db; 

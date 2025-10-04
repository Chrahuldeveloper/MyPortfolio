import db from "../dbconfig/ConnectDb";  
const createUsersTable = async () => {
  try {
    const query = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
      );
    `;
    await db.query(query);
    console.log("Users table created");
  } catch (error) {
    console.log(error);
  }
};

export default createUsersTable;

import createUsersTable from "./tables/UserTable";
import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;
import saveDetails from "./routes/SaveDetails";


app.use(express.json())
app.use("/", saveDetails);


app.listen(PORT, () => {
  console.log("server started");
  createUsersTable();
});

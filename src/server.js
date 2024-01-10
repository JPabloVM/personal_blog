import express from "express";
import routes from "./routes/index.routes.js";
import "dotenv/config";
import connectDatabase from "./config/database.connection.js";

const connect = await connectDatabase();

connect.on("error", (error) => {
  console.log(`Error on connection with database, error: ${error}`);
});

connect.once("open", () => {
  console.log("Sucess on connection with Database!");
});
const PORT = process.env.PORT || 3000;

const app = express();
routes(app);

app.listen(PORT, () => {
  console.log(`Server online on port ${PORT}`);
});
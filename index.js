import express from "express";
import { pkg } from "body-parser";
import { router } from "./medApp/routes/router.js";
import db from "./medApp/database/database.js";

const app = express();
const { json, urlenconded } = pkg;

app.use(json());
app.use(urlenconded({ extended: true }));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/", router);


import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { PORT, mongoDBURL } from "./config.js";
import bookRoute from "./routes/bookRoute.js";

const app = express();

/* ---------- Middleware ---------- */
app.use(express.json());
app.use(cors());

/* ---------- Health Check ---------- */
app.get("/", (req, res) => {
  res.status(200).send("✅ Server is running");
});

/* ---------- Routes ---------- */
app.use("/books", bookRoute);

/* ---------- Database + Server ---------- */
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 App is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  });

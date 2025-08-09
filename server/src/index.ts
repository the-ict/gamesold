import express, { Request, Response } from "express";
const session = require("express-session");
const passport = require("passport");
import { createServer } from "http";
import mongoose from "mongoose";
import multer from "multer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import "./routes/authPassport";
import path from "path";
const Message = require("./models/Message");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true })); // ✅ MUHIM
app.use("/upload", express.static(path.join(__dirname, "upload")));

// the configuration of multer
const uploadPathName = path.join(__dirname, "dist", "upload");
console.log(uploadPathName);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPathName);
  },
  filename: (req: any, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req: Request, res: Response) => {
  try {
    console.log(req.file); // Fayl haqida info
    res.send("File uploaded successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("There's an error during upload");
  }
});

const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/game-accounts";
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send("Welcome to the Game Accounts API");
});

app.get("/auth/google", (req: Request, res: Response) => {
  passport.authenticate("google", { scope: ["profile", "email"] })(req, res);
});

app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/dashboard",
    failureRedirect: "http://localhost:5173/login",
    session: true,
  })
);

app.get("/google/me", (req: any, res: Response) => {
  try {
    console.log("requesting");
    console.log(req.user);
    if (req.isAuthenticated()) {
      console.log("user informations: ", req.user);
      res.send(req.user);
    } else {
      res.send("You have'nt registreted before");
    }
  } catch (error) {
    res.status(401).json({ message: "Google informations not founded" });
  }
});

// app.use((req: Request, res: Response, next: Function) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

// importing routes
const conversationRoutes = require("./routes/Conversation");
const userAccountRoutes = require("./routes/UserAccount");
const gameAccountRoutes = require("./routes/GameAccount");
const messageRoutes = require("./routes/Message");
const authRoutes = require("./routes/auth");

app.use("/api/conversation", conversationRoutes);
app.use("/api/game", gameAccountRoutes);
app.use("/api/user", userAccountRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/auth", authRoutes);

// app.get('/logout', (req: Request, res: Response) => {
//   req.logout(() => {
//     res.sendStatus(200);
//   });
// });

app.listen(PORT, () => {
  console.log(`Listening on: ${PORT}`);
  connectDB();
});

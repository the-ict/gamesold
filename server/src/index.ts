import express, { Request, Response } from "express"
const session = require("express-session");
const passport = require("passport")
import mongoose from "mongoose"
import dotenv from 'dotenv'
import cors from "cors"
import {
  Server,
} from 'socket.io'
import { createServer } from 'http';

dotenv.config();

import "./routes/authPassport"
const Message = require("./models/Message");

const app = express()

app.use(cors())
app.use(express.json())

app.use(session({
  secret: "my-secret-key",
  resave: false,
  saveUninitialized: true,
}))

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/game-accounts"
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log("MongoDB connected")
  } catch (error) {
    console.error("MongoDB connection error:", error)
    process.exit(1)
  }
}

app.get("/", (req, res) => {
  res.send("Welcome to the Game Accounts API")
})

app.get("/auth/google", (req: Request, res: Response) => {
  passport.authenticate("google", { scope: ["profile", "email"] })(req, res);
});

app.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:5000/',
    failureRedirect: 'http://localhost:5000/failure',
  })
);

app.use((req: Request, res: Response, next: Function) => {
  console.log(`${req.method} ${req.url}`);
  next();
})


// importing routes
const userAccountRoutes = require("./routes/UserAccount");
const gameAccountRoutes = require("./routes/GameAccount");
const messageRoutes = require("./routes/Message");
const authRoutes = require("./routes/auth");

app.use("/api/game", gameAccountRoutes);
app.use("/api/user", userAccountRoutes);  
app.use("/api/message", messageRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/chat", require("./routes/Chat"));


// socket.io setup
const httpServer = createServer(app);
const socketIo = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

socketIo.on("connection", (socket) => {
  console.log("New client connected", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected", socket.id);
  });

  // Add more socket event handlers here
});


socketIo.on("send_message", async(data) => {
  console.log("Message received:", data);

  const { sender, receiver, content } = data;
  const message = new Message({
    sender,
    receiver,
    content,
  })
  
  await message.save()

  console.log("Message saved to database:", message);

  socketIo.emit("receive_message", message);
})

// app.get('/logout', (req: Request, res: Response) => {
//   req.logout(() => {
//     res.sendStatus(200);
//   });
// });

app.listen(PORT, () => {
  console.log(`Listening on: ${PORT}`)
  connectDB()
})
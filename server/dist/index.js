"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const session = require("express-session");
const passport = require("passport");
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const http_1 = require("http");
dotenv_1.default.config();
require("./routes/authPassport");
const Message = require("./models/Message");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/game-accounts";
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(MONGO_URI);
        console.log("MongoDB connected");
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};
app.get("/", (req, res) => {
    res.send("Welcome to the Game Accounts API");
});
app.get("/auth/google", (req, res) => {
    passport.authenticate("google", { scope: ["profile", "email"] })(req, res);
});
app.get('/google/callback', passport.authenticate('google', {
    successRedirect: 'http://localhost:5000/',
    failureRedirect: 'http://localhost:5000/failure',
}));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
// importing routes
const userAccountRoutes = require("./routes/UserAccount");
const gameAccountRoutes = require("./routes/GameAccount");
const messageRoutes = require("./routes/Message");
const authRoutes = require("./routes/auth");
app.use("/api/game", gameAccountRoutes);
app.use("/api/user", userAccountRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/auth", authRoutes);
// socket.io setup
const httpServer = (0, http_1.createServer)(app);
const socketIo = new socket_io_1.Server(httpServer, {
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
socketIo.on("send_message", async (data) => {
    console.log("Message received:", data);
    const { sender, receiver, content } = data;
    const message = new Message({
        sender,
        receiver,
        content,
    });
    await message.save();
    console.log("Message saved to database:", message);
    socketIo.emit("receive_message", message);
});
// app.get('/logout', (req: Request, res: Response) => {
//   req.logout(() => {
//     res.sendStatus(200);
//   });
// });
app.listen(PORT, () => {
    console.log(`Listening on: ${PORT}`);
    connectDB();
});

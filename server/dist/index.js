"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const session = require("express-session");
const passport = require("passport");
const mongoose_1 = __importDefault(require("mongoose"));
const multer_1 = __importDefault(require("multer"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
require("./routes/authPassport");
const path_1 = __importDefault(require("path"));
const Message = require("./models/Message");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express_1.default.json());
app.use(session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express_1.default.urlencoded({ extended: true })); // ✅ MUHIM
app.use("/upload", express_1.default.static(path_1.default.join(__dirname, "upload")));
// the configuration of multer
const uploadPathName = path_1.default.join(__dirname, "upload");
console.log(uploadPathName);
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPathName);
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    },
});
const upload = (0, multer_1.default)({ storage });
app.post("/upload", upload.single("file"), (req, res) => {
    try {
        console.log(req.file); // Fayl haqida info
        res.send("File uploaded successfully");
    }
    catch (error) {
        console.error(error);
        res.status(500).send("There's an error during upload");
    }
});
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
app.get("/google/callback", passport.authenticate("google", {
    successRedirect: "http://localhost:5173/dashboard",
    failureRedirect: "http://localhost:5173/login",
    session: true,
}));
app.get("/google/me", (req, res) => {
    try {
        console.log("requesting");
        console.log(req.user);
        if (req.isAuthenticated()) {
            console.log("user informations: ", req.user);
            res.send(req.user);
        }
        else {
            res.send("You have'nt registreted before");
        }
    }
    catch (error) {
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

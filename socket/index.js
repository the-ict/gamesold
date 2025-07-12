"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const io = new socket_io_1.Server(8900, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});
let users = [];
const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId });
};
const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
};
const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
};
io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("addUser", (userId) => {
        addUser(userId, socket.id);
        console.log("users: ", users);
        io.emit("getUsers", users);
    });
    socket.on("disconnect", () => {
        removeUser(socket.id);
        console.log("user removed");
        io.emit("getUsers", users);
    });
    socket.on("getMessage", ({ userId, receiverId, text }) => {
        const user = getUser(receiverId);
        console.log("message given user: ", user);
        io.to(String(user === null || user === void 0 ? void 0 : user.socketId)).emit("getMessage", {
            userId,
            text,
        });
    });
});

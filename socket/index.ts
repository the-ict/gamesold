import { Server } from "socket.io";

const io = new Server(8900, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

interface IUser {
  userId: string | number;
  socketId: string | number;
}

let users: IUser[] = [];

const addUser = (userId: string | number, socketId: string | number) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const getUser = (userId: string | number) => {
  return users.find((user) => user.userId === userId);
};

const removeUser = (socketId: string | number) => {
  users = users.filter((user) => user.socketId !== socketId);
};

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("addUser", (userId: string | number) => {
    addUser(userId, socket.id);
    console.log("users: ", users);

    io.emit("getUsers", users);
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
    io.emit("getUsers", users);
  });

  socket.on("getMessage", ({ userId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(String(user?.socketId)).emit("getMessage", {
      userId,
      text,
    });
  });
});

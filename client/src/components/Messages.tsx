import React, { type ChangeEvent } from "react";
import userAvatar from "@/assets/profile-avatar.svg";
import { PiDotsNine } from "react-icons/pi";
import EmojiPicker from "emoji-picker-react";
import io from "socket.io-client";

type Props = {};

const socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

socket.on("message", (message: string) => {
  console.log(`Received message: ${message}`);
});

socket.emit("message", "Hello, server!");

export default function Messages({}: Props) {
  const [messages, setMessages] = React.useState<string>("");
  const [showEmojiPicker, setShowEmojiPicker] = React.useState<boolean>(false);

  return (
    <div className="messages-container flex flex-col items-center justify-center h-[calc(100vh-60px)] bg-[#121212] text-white">
      <div className="w-[1200px] h-[90%] flex items-start justify-between gap-5 bg-[#1E1E1E] rounded-lg shadow-2xl p-6">
        <div className="w-[30%] overflow-y-scroll px-3 overflow-hidden h-full flex flex-col left-sidebar">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div
              key={item}
              className="flex  items-center gap-4 mb-6 p-5 rounded-lg bg-[#2A2A2A] cursor-pointer hover:bg-[#3A3A3A] transition-colors"
            >
              <img
                src={userAvatar}
                alt="User Avatar"
                className="w-[50px] h-[50px] object-cover cursor-pointer rounded-full"
              />
              <span>John Doe</span>
            </div>
          ))}
        </div>

        <div className="w-[70%] rounded-lg bg-[#2A2A2A] h-full overflow-y-auto overflow-hidden flex flex-col gap-4">
          <div className="h-[10%] flex items-center justify-between p-5 border-b border-gray-600">
            <div className="flex items-center gap-4">
              <img
                src={userAvatar}
                alt=""
                className="w-[50px] h-[50px] object-cover cursor-pointer rounded-full"
              />
              <span className="font-bold cursor-pointer">John Doe</span>
            </div>

            <PiDotsNine className="text-2xl text-gray-400 cursor-pointer hover:text-white transition-colors" />
          </div>

          <div className="h-[80%]">
            <div className="flex flex-col gap-4 p-5 overflow-y-auto h-full">
              {/* Example messages */}
              <div className="bg-blue-500 text-white p-3 rounded-lg self-end max-w-[70%]">
                Hello! How are you?
              </div>
              <div className="bg-gray-700 text-white p-3 rounded-lg self-start max-w-[70%]">
                I'm good, thanks! And you?
              </div>
              <div className="bg-blue-500 text-white p-3 rounded-lg self-end max-w-[70%]">
                Doing great! Just working on a project.
              </div>
              <div className="bg-gray-700 text-white p-3 rounded-lg self-start max-w-[70%]">
                Sounds interesting!
              </div>
            </div>
          </div>

          <div className="h-[10%] flex items-center justify-between p-5 border-t border-gray-600">
            <input
              type="text"
              value={messages}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setMessages(e.target.value)
              }
              className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-400"
              placeholder="Type your message here..."
            />
            <div className="relative flex items-center gap-2 ml-5">
              <button className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-lg">
                Send
              </button>
              <button
                className="bg-gray-600 text-white px-4 py-2 rounded-lg cursor-pointer"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                {showEmojiPicker ? "X" : "Emoji"}
              </button>
              {showEmojiPicker && (
                <div className="absolute bottom-12 right-0 z-10">
                  <EmojiPicker
                    onEmojiClick={(emoji) => {
                      setMessages((previous) => previous + emoji.emoji);
                      setShowEmojiPicker(false);
                    }}
                    width={300}
                    height={400}
                    previewConfig={{ showPreview: false }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

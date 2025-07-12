import React, { useEffect, useRef, useState, type ChangeEvent } from "react";
import userAvatar from "@/assets/profile-avatar.svg";
import { PiDotsNine } from "react-icons/pi";
import EmojiPicker from "emoji-picker-react";
import store from "../store";
import axios from "axios";
import type { IConversation } from "@/types/Conversations";
import type { IUser } from "@/types/User";
import ConversationItem from "./ConversationItem";
import type { IMessage } from "@/types/Messages";
import MessagesItem from "./MessagesItem";
import { io } from "socket.io-client";

const IMAGE_URL = import.meta.env.VITE_PC;

type Props = {};

export default function Messages({}: Props) {
  const [messages, setMessages] = React.useState<string>("");
  const [showEmojiPicker, setShowEmojiPicker] = React.useState<boolean>(false);
  const [conversations, setConversations] = React.useState<IConversation[]>([]);
  const [arrivalMessage, setArrivalMessage] = useState<null | any>(null);
  const [currentConversation, setCurrentConversation] =
    React.useState<IConversation>({} as IConversation);
  const [chatMessages, setChatMessages] = React.useState<IMessage[]>([]);
  const [receiver, setReceiver] = React.useState<IUser>({} as IUser);

  const messageRef = useRef<HTMLDivElement | null>(null);
  const socket = useRef<ReturnType<typeof io> | null>(null);

  const { userId } = store();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");

    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.userId,
        text: data.text,
      });
    });
  }, []);

  useEffect(() => {
    // If a new message arrives and the sender is one of the members of the current conversation,
    // add the new message to the chat messages list

    if (
      arrivalMessage &&
      currentConversation?.members.includes(arrivalMessage.sender)
    ) {
      setChatMessages((prev) => [...prev, arrivalMessage]);
    }
  }, [arrivalMessage, currentConversation]);

  useEffect(() => {
    const getCurrentConversation = async (conversationId: string) => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/conversation/conversation/" +
            conversationId
        );

        console.log(
          res.data,
          "current Conversation that we got from our search"
        );

        setCurrentConversation(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (location.search.includes("conversationId")) {
      console.log("conversationId", location.search.split("=")[1]);
      getCurrentConversation(String(location.search.split("=")[1]));
    }
  }, [location]);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/conversation/${userId}`
        );

        if (res.data) {
          setConversations(res.data);
          console.log(res.data, "conversations");
        }
      } catch (error) {
        alert("Failed to get the conversations");
      }
    };

    getConversation();
  }, [userId]);

  useEffect(() => {
    console.log("currentConversation", currentConversation);
    const getConversationMessages = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/message/" + currentConversation._id
        );

        if (res.data) {
          setChatMessages(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getConversationMessages();

    const getReceiver = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/user/" +
            currentConversation.members.filter((id) => id !== userId)
        );

        console.log(res.data, "receiver data");

        if (res.data) {
          setReceiver(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getReceiver();
  }, [currentConversation]);

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const handleSubmit = async () => {
    try {
      const message = {
        sender: userId,
        text: messages,
        conversationId: currentConversation._id,
      };

      const receiverId = currentConversation.members.find(
        (member) => member !== userId
      );

      if (socket.current) {
        socket.current.emit("sendMessage", {
          userId,
          receiverId,
          text: messages,
        });
      }

      const res = await axios.post(
        "http://localhost:5000/api/message",
        message
      );

      if (res.data) {
        console.log(res.data);
        setMessages("");
        setChatMessages([...chatMessages, res.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="messages-container flex flex-col items-center justify-center h-[calc(100vh-60px)] bg-[#121212] text-white">
      <div className="w-[1200px] h-[90%] flex items-start justify-between gap-5 bg-[#1E1E1E] rounded-lg shadow-2xl p-6">
        <div className="w-[30%] overflow-y-scroll px-3 overflow-hidden h-full flex flex-col left-sidebar">
          {conversations.length === 0 ? (
            <p>No conversations</p>
          ) : (
            conversations.map((item) => (
              <div
                onClick={() => {
                  console.log("clicked");
                  setCurrentConversation(item);
                }}
                key={item._id}
              >
                <ConversationItem
                  userId={String(userId)}
                  active={item._id === currentConversation._id}
                  conversation={item}
                />
              </div>
            ))
          )}
        </div>

        <div className="w-[70%] rounded-lg bg-[#2A2A2A] h-full overflow-hidden flex flex-col justify-between">
          {currentConversation._id && (
            <div className="h-[10%] flex items-center justify-between p-5 border-b border-gray-600">
              <div className="flex items-center gap-4">
                <img
                  src={
                    receiver.name && receiver?.image.includes("google")
                      ? receiver.image
                      : receiver.image
                      ? IMAGE_URL + receiver.image
                      : userAvatar
                  }
                  alt="User default avatar"
                  className="w-[50px] h-[50px] object-cover cursor-pointer rounded-full"
                />
                <span className="font-bold cursor-pointer">
                  {receiver.name}
                </span>
              </div>

              <PiDotsNine className="text-2xl text-gray-400 cursor-pointer hover:text-white transition-colors" />
            </div>
          )}

          {currentConversation._id ? (
            <div className="h-[80%]">
              <div className="flex flex-col gap-4 p-5 overflow-y-auto h-full no-scrollbar">
                {/* Example messages */}
                {Array.isArray(chatMessages) ? (
                  chatMessages.map((message) => (
                    <div ref={messageRef}>
                      <MessagesItem
                        key={message._id}
                        message={message}
                        own={message.sender === userId}
                      />
                    </div>
                  ))
                ) : (
                  <div className="bg-blue-500 text-white p-3 rounded-lg self-end max-w-[70%]">
                    <p>Xabarlar mavjud emas</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="h-[100%] flex items-center justify-center">
              <p className="text-gray-400">Biror chatni tanlang!</p>
            </div>
          )}

          {currentConversation._id && (
            <div className="h-[10%] flex items-center justify-between p-5 border-t border-gray-600">
              <input
                type="text"
                value={messages}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setMessages(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit();
                  }
                }}
                className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-400"
                placeholder="Xabaringizni shu yerda yozing..."
              />
              <div className="relative flex items-center gap-2 ml-5">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-lg"
                >
                  Jo'natish
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
          )}
        </div>
      </div>
    </div>
  );
}

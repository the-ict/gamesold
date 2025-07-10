import type { IMessage } from "@/types/Messages";
import React from "react";

interface MessageItemProps {
  message: IMessage;
  own: boolean;
}

export default function MessageItem({ message, own }: MessageItemProps) {
  return (
    <div className="bg-blue-500 text-white p-3 rounded-lg self-end max-w-[70%]">
      <p>{message.text}</p>
    </div>
  );
}

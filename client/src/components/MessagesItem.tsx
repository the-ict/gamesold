import type { IMessage } from "@/types/Messages";

interface MessageItemProps {
  message: IMessage;
  own: boolean;
}

export default function MessageItem({ message, own }: MessageItemProps) {
  return (
    <div
      className={`bg-blue-500 text-white p-3 rounded-lg max-w-full break-words whitespace-pre-wrap`}
    >
      <p>{message.text}</p>
    </div>
  );
}

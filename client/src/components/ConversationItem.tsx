import type { IConversation } from "@/types/Conversations";
import type { IUser } from "@/types/User";
import { useEffect, useState } from "react";
import userAvatar from "@/assets/profile-avatar.svg";
import axios from "axios";

export default function ({
  userId,
  conversation,
  active,
}: {
  userId: string;
  conversation: IConversation;
  active?: boolean;
}) {
  const [friend, setFriend] = useState<IUser>({} as IUser);
  useEffect(() => {
    const firendId = conversation.members.find((m) => m !== userId);

    const getUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/user/" + firendId
        );

        if (res.data) {
          setFriend(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [conversation.members]);

  return (
    <div
      key={conversation._id}
      className={`flex items-center gap-4 mb-6 p-5 rounded-lg bg-[#2A2A2A] ${
        active && "bg-[#3A3A3A]"
      } cursor-pointer hover:bg-[#3A3A3A] transition-colors`}
    >
      {friend.image ? (
        <img
          src={friend.image}
          alt="User Avatar"
          className="w-[50px] h-[50px] object-cover cursor-pointer rounded-full"
        />
      ) : (
        <img
          src={userAvatar}
          alt="User Avatar"
          className="w-[50px] h-[50px] object-cover cursor-pointer rounded-full"
        />
      )}
      <span>{friend.name}</span>
    </div>
  );
}

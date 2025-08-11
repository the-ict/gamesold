import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchForm from "./SearchForm";
import useStore from "../store";
import { BsChat } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import type { IUser } from "@/types/User";

export default function Navbar() {
  const [user, setUser] = useState<IUser>({} as IUser)

  const { userId } = useStore();

  useEffect(() => {
    const getUserInformations = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/user/" + localStorage.getItem("userId")
        );

        setUser(res.data)
      } catch (error) {
        alert(error);
      }
    };

    getUserInformations()
  }, [])

  const [searchModelOpen, setSearchModelOpen] = useState(false);
  return (
    <div className="bg-[#27282D] text-white flex items-center justify-center sticky top-0 z-50">
      <div className="w-[1200px] flex items-center justify-between py-3">
        <div className="flex items-center">
          <Link to={"/"}>
            <h1 className="text-3xl font-bold">GAMESOLD</h1>
          </Link>
          <form className="flex items-center ml-10 p-2 border-[1px] w-[500px] justify-between rounded-[15px]">
            <input
              type="text"
              onFocus={() => setSearchModelOpen(true)}
              placeholder="Qidiruv...."
              className="outline-none w-full"
            />
            <button className="cursor-pointer">
              <FaSearch />
            </button>
          </form>
        </div>

        {userId ? (
          <div className="flex items-center gap-5">
            {
              user.chats && user.chats.length > 0 && (
                <Link to={`/messages`}>
                  <BsChat className="w-[30px] h-[30px] cursor-pointer" />
                </Link>
              )
            }
            <Link to={`/dashboard`}>
              {
                user?.profile_pic && (
                  user?.profile_pic.includes("google") ? (
                    <img src={user.profile_pic} alt="Google profile image" className={"w-[35px] h-[35px] object-cover cursor-pointer rounded-full"} />
                  ) : (
                    <img src={"http://localhost:5000/" + user.image} className={"w-[35px] h-[35px] object-cover cursor-pointer rounded-full"} alt="" />
                  )
                )
              }
            </Link>
          </div>
        ) : (
          <button
            onClick={() => window.location.replace("/login")}
            className="p-2 outline-none cursor-pointer bg-red-400 rounded-[15px] font-bold"
          >
            Login / Register
          </button>
        )}
      </div>

      {searchModelOpen && <SearchForm setSearchForm={setSearchModelOpen} />}
    </div>
  );
}

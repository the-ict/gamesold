import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchForm from "./SearchForm";
import useStore from "../store";
import { IoNotificationsCircle } from "react-icons/io5";
import { BsChat } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { userId } = useStore();

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
            <Link to={`/messages`}>
              <BsChat className="w-[30px] h-[30px] cursor-pointer" />
            </Link>
            <Link to={`/dashboard`}>
              <img
                src="https://i.pinimg.com/236x/2c/47/d5/2c47d5dd5b532f83bb55c4cd6f5bd1ef.jpg"
                alt=""
                className="w-[30px] h-[30px] cursor-pointer rounded-full object-cover"
              />
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

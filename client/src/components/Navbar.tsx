import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";
import useStore from "../store";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [searchForm, setSearchForm] = useState<boolean>(false);

  const { userId } = useStore();

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <div
      className={`flex bg-[#222] text-white items-center w-full justify-center ${
        scrolled ? "fixed transition-all z-50" : ""
      }`}
    >
      <div className="w-[1200px] py-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link to={"/"}>
            <h1 className="text-2xl font-bold cursor-pointer">GameSold</h1>
          </Link>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="w-[500px] flex items-center gap-2 justify-between p-2 border border-gray-300 rounded-full"
          >
            <input
              type="text"
              onFocus={() => setSearchForm(true)}
              className="w-full rounded-full h-full outline-none border-none px-3"
              placeholder="Qidirish..."
            />
            {/* <button type="submit" className="cursor-pointer p-2 bg-red-400 rounded-full text-white"><FaSearch size={18}/></button> */}
          </form>
        </div>
        <div className="flex items-center gap-5 justify-between w-max">
          {userId ? (
            <div>
              <img
                onClick={() => window.location.replace("/dashboard")}
                className="w-[40px] h-[40px] rounded-full cursor-pointer"
                src="https://i.pinimg.com/236x/2c/47/d5/2c47d5dd5b532f83bb55c4cd6f5bd1ef.jpg"
                alt=""
              />
            </div>
          ) : (
            <Link to={"/login"} className="cursor-pointer">
              <button className="cursor-pointer bg-red-500 px-3 py-3 text-white font-bold transition-all hover:bg-red-400 hover:text-white rounded-full">
                Sign In / Sign Up
              </button>
            </Link>
          )}
        </div>
      </div>
      {searchForm && <SearchForm setSearchForm={setSearchForm} />}
    </div>
  );
}

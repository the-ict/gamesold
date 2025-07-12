import { FaArrowDown } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import type { IGameAccount } from "@/types/GameAccount";
import { currencyFormatter } from "@/components/Trending";

const IMAGE_URL = import.meta.env.VITE_PC;

export default function SearchedForm() {
  const [fetchAccounts, setFetchAccounts] = useState<IGameAccount[]>([]);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 0,
    region: "Hammasi",
    game: "PUBG",
  });
  const location = useLocation();

  useEffect(() => {
    console.log(location.search);

    const fetchSearch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/game/search${location.search}`
        );
        console.log(response.data);

        if (response.data) {
          setFetchAccounts(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearch();
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilter = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/game/search",
        {
          params: filters,
        }
      );

      if (response.data) {
        setFetchAccounts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center min-h-[120vh] pt-5 pb-5 bg-[#121212]">
        <div className="w-[1200px]">
          <h1 className="text-2xl text-white font-bold mt-[50px]">
            Qidiruv natijalari:{" "}
            <span className="text-red-500">{fetchAccounts.length}</span>
          </h1>
          <div className="flex items-start justify-between w-ful gap-2">
            <div className="w-[30%] mt-5 p-5 bg-[#1e1f28] text-white rounded-[10px]">
              <div className="flex items-center flex-col gap-2 justify-between px-5 py-2 rounded cursor-pointer">
                <div className="w-full flex items-center gap-2 justify-between">
                  <span>Narxi bilan saralash</span>
                  <FaArrowDown />
                </div>

                <div className="flex w-full gap-2 items-center justify-between">
                  <input
                    type="number"
                    name="minPrice"
                    onChange={handleChange}
                    placeholder="Min"
                    className="p-2 border border-gray-300 rounded w-[45%]"
                  />

                  <input
                    type="number"
                    name="maxPrice"
                    onChange={handleChange}
                    placeholder="Max"
                    className="p-2 border border-gray-300 rounded w-[45%]"
                  />
                </div>
              </div>

              <div className="flex items-center flex-col gap-2 justify-between px-5 py-2 mt-4 rounded cursor-pointer">
                <div className="w-full flex items-center gap-2 justify-between">
                  <span>Yashash joyi</span>
                  <FaArrowDown />
                </div>

                <div className="flex w-full gap-2 items-center justify-between">
                  <select
                    name=""
                    className="p-2 border border-gray-300 rounded w-[100%] bg-gray-700 cursor-pointer"
                    id=""
                    onChange={(e) =>
                      setFilters({ ...filters, region: e.target.value })
                    }
                  >
                    {[
                      "Hammasi",
                      "Farg'ona",
                      "Toshkent",
                      "Andijon",
                      "Buxoro",
                      "Jizzax",
                      "Namangan",
                      "Navoiy",
                      "Qashqadaryo",
                      "Samarqand",
                      "Surxondaryo",
                      "Sirdaryo",
                      "Xorazm",
                      "Qoraqalpoqiston",
                    ].map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center flex-col gap-2 justify-between px-5 py-2 mt-4 rounded cursor-pointer">
                <div className="w-full flex items-center gap-2 justify-between">
                  <span>Hisob turi</span>
                  <FaArrowDown />
                </div>

                <div className="flex w-full gap-2 items-center justify-between">
                  <select
                    name="hisob"
                    id="hisob"
                    className="p-2 border border-gray-300 rounded w-[100%] bg-gray-700 cursor-pointer"
                    onChange={(e) =>
                      setFilters({ ...filters, game: e.target.value })
                    }
                  >
                    <option value="PUBG">Pubg Mobile</option>
                    <option value="Fortnite">Fortnite</option>
                    <option value="CSGO">CSGO</option>
                    <option value="Call of Duty">Call of Duty</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleFilter}
                className="p-2 bg-red-400 rounded-[10px] cursor-pointer text-white w-[100%] mt-10"
              >
                Qaytadan qidirish
              </button>
            </div>
            <div className="flex items-center w-[70%] gap-10 flex-wrap mt-5">
              {fetchAccounts.map((gameAccount) => (
                <Link to={`/account/${gameAccount._id}`} key={gameAccount._id}>
                  <div className="w-[250px] relative group h-[400px]">
                    <p className="absolute bottom-0 left-0 right-0 top-0 h-max z-10 group-hover:hidden text-center w-full bg-black text-white py-3">
                      {gameAccount.game}
                    </p>
                    <img
                      className="w-full h-full object-contain blur-[5px] hover:blur-none cursor-pointer  transition-all duration-300 ease-in-out"
                      src={IMAGE_URL + gameAccount.image}
                      alt=""
                    />
                    <div className="absolute bottom-0 left-0 font-bold right-0 h-max z-10 text-center w-full bg-gray-200 text-black py-3">
                      <p className="text-sm w-full bg-red-500 text-white py-1">
                        Narxi: {currencyFormatter(gameAccount.price)}
                      </p>
                      <p className="text-sm w-full bg-gray-500 text-white py-1 mt-3">
                        Manzili: {gameAccount.region}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

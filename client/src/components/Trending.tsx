import pubgGameIcon from "@/assets/pubg1.png";
import codGameIcon from "@/assets/callofduty.png";
import csgoGameIcon from "@/assets/fortnite.png";
import { useEffect, useState } from "react";
import axios from "axios";
import type { IGameAccount } from "@/types/GameAccount";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function Trending() {
  const [gameAccounts, setGameAccounts] = useState<IGameAccount[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const themostexpensive = async () => {
      setLoading(true);
      try {
        const result = await axios.get(
          "http://localhost:5000/api/game/search/most-expensive"
        );
        console.log(result.data);
        if (result.data) {
          setGameAccounts(result.data);
          setLoading(false);
        }
      } catch (error) {
        alert("Xatolik yuz berdi");
        console.log(error);
        setLoading(false);
      }
    };
    themostexpensive();
  }, []);

  useEffect(() => {
    console.log(gameAccounts, "o'yin accountlar!");
  }, [gameAccounts]);

  const currencyFormatter = (price: number) => {
    return new Intl.NumberFormat("uz-UZ", {
      style: "currency",
      currency: "UZS",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="flex items-center bg-[#212224] justify-center pt-15 text-white py-20">
      <div className="w-[1200px]">
        <h1 className="text-3xl font-bold">Eng qimmat akkountlar</h1>
        <div className="flex items-center gap-10 flex-wrap mt-10 ">
          {loading ? (
            <div className="w-[270px] relative h-[400px] cursor-pointer">
              {/* Skeleton rasm o‘rniga */}
              <Skeleton variant="rectangular" width="100%" height="100%" />

              {/* Absolute pastki qismdagi bar */}
              <div className="absolute bottom-0 left-0 right-0 w-full px-3 py-3 bg-gray-200 flex items-center justify-between">
                <Skeleton variant="rounded" width={100} height={40} />
                <Skeleton variant="circular" width={30} height={30} />
              </div>
            </div>
          ) : (
            gameAccounts.map((gameAccount) => (
              <div
                className="w-[270px] relative h-[400px]"
                key={String(gameAccount._id)}
              >
                <img
                  className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out"
                  src="https://www.g2g.com/img/affiliate-home.webp"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 right-0 text-center w-full bg-gray-200 text-black py-3 flex items-center justify-between px-3">
                  <p className="font-bold py-3 px-4 bg-red-400 rounded cursor-pointer hover:bg-red-500 transition">
                    {gameAccount.price} UZS
                  </p>
                  <img
                    src={pubgGameIcon}
                    className="w-[30px] h-[30px] object-cover cursor-pointer"
                    alt="pubg game icon"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

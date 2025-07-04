import axios from "axios";
import { useEffect } from "react";
import HeroImage from "@/assets/heroimage.png";
import useStore from "@/store";

export default function Hero() {
  const { userId } = useStore();
  return (
    <div className="bg-cover justify-center flex bg-[#212224] text-white">
      <div className="w-[1200px] min-h-[calc(100vh-60px)] flex flex-col justify-between">
        <div className="mt-10 flex justify-between items-center h-full">
          <div>
            <h1 className="text-5xl font-bold mt-10">
              Game Deals Beyond Borders
            </h1>
            <p className="text-xl mt-5">
              Fresh deals drop 24/7. Miss it? it's gone
            </p>
            {!userId && (
              <button
                onClick={() => window.location.replace("/register")}
                className="p-2 border cursor-pointer bg-red-400 rounded-[10px] font-bold text-white px-5 py-3 mt-3"
              >
                Sign up now
              </button>
            )}
          </div>
          <img src={HeroImage} alt="" className="w-[500px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

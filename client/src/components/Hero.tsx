import axios from "axios";
import { useEffect } from "react";
import HeroImage from "@/assets/heroimage.png";


export default function Hero() {
  useEffect(() => {
    const response = async () => {
      try {
        const res = await axios.get("http://localhost:5000/google/me", {
          withCredentials: true,
        });

        console.log(res.data);
        console.log("Hello");
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    response();
  }, []);

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
            <button
              onClick={() => window.location.replace("/register")}
              className="p-2 border cursor-pointer bg-red-400 rounded-[10px] font-bold text-white px-5 py-3 mt-3"
            >
              Sign up now
            </button>
          </div>
          <img src={HeroImage} alt="" className="w-[500px] cursor-pointer"  />
        </div>
      </div>
    </div>
  );
}

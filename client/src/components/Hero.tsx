import axios from "axios";
import { useEffect } from "react";
import { FaPlaystation } from "react-icons/fa";
import useStore from "../store"

export default function Hero() {

    useEffect(( )=> {
        const response = async () => {
            try {
                const res = await axios.get("http://localhost:5000/google/me", {
                  withCredentials: true
                })

                console.log(res.data)
                console.log("Hello")
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        }

        response()
    }, [])
  return (
    <div className="bg-cover justify-center flex bg-[#0e0e11] text-white">

      <div className="w-[1200px] min-h-[calc(100vh-80px)] flex flex-col justify-between">
        <div className="mt-10 flex justify-between items-center h-full">
          <div>
            <h1 className="text-5xl font-bold mt-10">Game Deals Beyond Borders</h1>
            <p className="text-xl mt-5">Fresh deals drop 24/7. Miss it? it's gone</p>
            <button className="p-2 border cursor-pointer bg-red-400 rounded-[10px] font-bold text-white px-5 py-3 mt-3">Sign up now</button>
          </div>
          <FaPlaystation size={400} />
        </div>

        {/* <div className="flex items-center justify-center">
          <div className="w-[1200px] flex items-center gap-10">
            <FaArrowLeft size={25} className="cursor-pointer" />
            <div className="overflow-x-hidden">
              <div className="flex items-center gap-10 w-max flex-nowrap">
                {
                  [
                    {img: callofduty, name: "Call of Duty"},
                    {img: fortnite, name: "Fortnite"},
                    {img: pubg, name: "Action"},
                  ].map((item,index) => (
                    <div key={index} className="flex flex-col items-center p-3 group transition-all">
                      <img src={item.img} className="w-20 h-20 object-contain cursor-pointer" alt={item.name} />
                      <p className="text-xl font-bold">{item.name}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <FaArrowRight size={24} className="cursor-pointer" />
          </div>
        </div> */}
      </div>
    </div>
  );
}

import { FaArrowDown } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function SearchedForm() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <>
      <Navbar />
      <div className="flex justify-center min-h-[120vh] pt-5 pb-5 bg-[#121212]">
        <div className="w-[1200px]">
          <h1 className="text-2xl text-white font-bold mt-[50px]">
            Qidiruv natijalari: <span className="text-red-500">45223</span>
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
                    placeholder="Min"
                    className="p-2 border border-gray-300 rounded w-[45%]"
                  />
                  
                  
                  <input
                    type="number"
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
                  >
                    <option value="pubgm">Pubg Mobile</option>
                    <option value="ml">Mobile Legends</option>
                    <option value="callofduty">Call of Duty</option>
                  </select>
                </div>
              </div>

              <button className="p-2 bg-red-400 rounded-[10px] cursor-pointer text-white w-[100%] mt-10">
                Qaytadan qidirish
              </button>
            </div>
            <div className="flex items-center w-[70%] gap-10 flex-wrap mt-5">
              <div className="w-[250px] relative border group">
                <p className="absolute bottom-0 left-0 right-0 top-0 h-max z-10 group-hover:hidden text-center w-full bg-black text-white py-3">
                  Game
                </p>
                <img
                  className="w-full h-full object-contain blur-[5px] hover:blur-none cursor-pointer  transition-all duration-300 ease-in-out"
                  src="https://www.g2g.com/img/affiliate-home.webp"
                  alt=""
                />
                <p className="absolute bottom-0 left-0 right-0 text-center w-full z-10 bg-black group-hover:hidden text-white py-3">
                  narxi: 100$
                </p>
              </div>
              <div className="w-[250px] relative border group">
                <p className="absolute bottom-0 left-0 right-0 top-0 h-max z-10 group-hover:hidden text-center w-full bg-black text-white py-3">
                  Game
                </p>
                <img
                  className="w-full h-full object-contain blur-[5px] hover:blur-none cursor-pointer  transition-all duration-300 ease-in-out"
                  src="https://www.g2g.com/img/affiliate-home.webp"
                  alt=""
                />
                <p className="absolute bottom-0 left-0 right-0 text-center w-full z-10 bg-black group-hover:hidden text-white py-3">
                  narxi: 100$
                </p>
              </div>
              <div className="w-[250px] relative border group">
                <p className="absolute bottom-0 left-0 right-0 top-0 h-max z-10 group-hover:hidden text-center w-full bg-black text-white py-3">
                  Game
                </p>
                <img
                  className="w-full h-full object-contain blur-[5px] hover:blur-none cursor-pointer  transition-all duration-300 ease-in-out"
                  src="https://www.g2g.com/img/affiliate-home.webp"
                  alt=""
                />
                <p className="absolute bottom-0 left-0 right-0 text-center w-full z-10 bg-black group-hover:hidden text-white py-3">
                  narxi: 100$
                </p>
              </div>
              <div className="w-[250px] relative border group">
                <p className="absolute bottom-0 left-0 right-0 top-0 h-max z-10 group-hover:hidden text-center w-full bg-black text-white py-3">
                  Game
                </p>
                <img
                  className="w-full h-full object-contain blur-[5px] hover:blur-none cursor-pointer  transition-all duration-300 ease-in-out"
                  src="https://www.g2g.com/img/affiliate-home.webp"
                  alt=""
                />
                <p className="absolute bottom-0 left-0 right-0 text-center w-full z-10 bg-black group-hover:hidden text-white py-3">
                  narxi: 100$
                </p>
              </div>

              <div className="w-[250px] relative border group">
                <p className="absolute bottom-0 left-0 right-0 top-0 h-max z-10 group-hover:hidden text-center w-full bg-black text-white py-3">
                  Game
                </p>
                <img
                  className="w-full h-full object-contain blur-[5px] hover:blur-none cursor-pointer  transition-all duration-300 ease-in-out"
                  src="https://www.g2g.com/img/affiliate-home.webp"
                  alt=""
                />
                <p className="absolute bottom-0 left-0 right-0 text-center w-full z-10 bg-black group-hover:hidden text-white py-3">
                  narxi: 100$
                </p>
              </div>
              <div className="w-[250px] relative border group">
                <p className="absolute bottom-0 left-0 right-0 top-0 h-max z-10 group-hover:hidden text-center w-full bg-black text-white py-3">
                  Game
                </p>
                <img
                  className="w-full h-full object-contain blur-[5px] hover:blur-none cursor-pointer  transition-all duration-300 ease-in-out"
                  src="https://www.g2g.com/img/affiliate-home.webp"
                  alt=""
                />
                <p className="absolute bottom-0 left-0 right-0 text-center w-full z-10 bg-black group-hover:hidden text-white py-3">
                  narxi: 100$
                </p>
              </div>
              <div className="w-[250px] relative border group">
                <p className="absolute bottom-0 left-0 right-0 top-0 h-max z-10 group-hover:hidden text-center w-full bg-black text-white py-3">
                  Game
                </p>
                <img
                  className="w-full h-full object-contain blur-[5px] hover:blur-none cursor-pointer  transition-all duration-300 ease-in-out"
                  src="https://www.g2g.com/img/affiliate-home.webp"
                  alt=""
                />
                <p className="absolute bottom-0 left-0 right-0 text-center w-full z-10 bg-black group-hover:hidden text-white py-3">
                  narxi: 100$
                </p>
              </div>
              <div className="w-[250px] relative border group">
                <p className="absolute bottom-0 left-0 right-0 top-0 h-max z-10 group-hover:hidden text-center w-full bg-black text-white py-3">
                  Game
                </p>
                <img
                  className="w-full h-full object-contain blur-[5px] hover:blur-none cursor-pointer  transition-all duration-300 ease-in-out"
                  src="https://www.g2g.com/img/affiliate-home.webp"
                  alt=""
                />
                <p className="absolute bottom-0 left-0 right-0 text-center w-full z-10 bg-black group-hover:hidden text-white py-3">
                  narxi: 100$
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

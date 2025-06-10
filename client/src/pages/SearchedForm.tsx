import { FaArrowDown } from "react-icons/fa"
import Navbar from "../components/Navbar"

export default function SearchedForm() {
    return (
        <div className="">
            <Navbar />
            <div className="flex items-center justify-center">
                <div className="w-[1200px]">
                    <h1 className="text-2xl font-bold">Search results: <span className="text-red-500">nasdnf</span></h1>
                    <div className="flex items-start justify-between w-ful gap-2">
                        <div className="w-[30%] mt-10">
                            <div className="flex items-center flex-col gap-2 justify-between px-5 py-2 rounded hover:bg-gray-200 cursor-pointer">
                                <div className="w-full flex items-center gap-2 justify-between">
                                    <span>Narxi bilan saralash</span>
                                    <FaArrowDown />
                                </div>

                                <div className="flex w-full gap-2 items-center justify-between">
                                    <input type="number" placeholder="Min" className="p-2 border border-gray-300 rounded w-[45%]"/>
                                    <input type="number" placeholder="Max" className="p-2 border border-gray-300 rounded w-[45%]"/>
                                </div>
                            </div>

                            <div className="flex items-center flex-col gap-2 justify-between px-5 py-2 mt-4 rounded hover:bg-gray-200 cursor-pointer">
                                <div className="w-full flex items-center gap-2 justify-between">
                                    <span>Yashash joyi</span>
                                    <FaArrowDown />
                                </div>

                                <div className="flex w-full gap-2 items-center justify-between">
                                    <input type="text" placeholder="Yashash joyi" className="p-2 border border-gray-300 rounded w-[100%]"/>
                                </div>
                            </div>

                            <div className="flex items-center flex-col gap-2 justify-between px-5 py-2 mt-4 rounded hover:bg-gray-200 cursor-pointer">
                                <div className="w-full flex items-center gap-2 justify-between">
                                    <span>Hisob turi</span>
                                    <FaArrowDown />
                                </div>

                                <div className="flex w-full gap-2 items-center justify-between">
                                    <select name="hisob" id="hisob" className="p-2 border border-gray-300 rounded w-[100%]">
                                        <option value="pubgm">Pubg Mobile</option>
                                        <option value="ml">Mobile Legends</option>
                                        <option value="callofduty">Call of Duty</option>
                                    </select>
                                </div>
                            </div>

                            <button className="p-2 bg-red-400 rounded-[10px] cursor-pointer text-white w-[100%] mt-10">Qaytadan qidirish</button>
                        </div>
                        <div className="flex items-center w-[70%] gap-10 flex-wrap mt-10">
                            <div className="w-[250px] relative border group">
                                <p className="absolute bottom-0 left-0 right-0 top-0 h-max z-50 group-hover:hidden text-center w-full bg-black text-white py-3">Game</p>
                                <img className="w-full h-full object-contain blur-[5px] hover:blur-none cursor-pointer  transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                                <p className="absolute bottom-0 left-0 right-0 text-center w-full z-50 bg-black group-hover:hidden text-white py-3">narxi: 100$</p>
                            </div>
                            <div className="w-[250px] relative border group">
                                <p className="absolute bottom-0 left-0 right-0 top-0 h-max z-50 group-hover:hidden text-center w-full bg-black text-white py-3">Game</p>
                                <img className="w-full h-full object-contain blur-[5px] hover:blur-none cursor-pointer  transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                                <p className="absolute bottom-0 left-0 right-0 text-center w-full z-50 bg-black group-hover:hidden text-white py-3">narxi: 100$</p>
                            </div>
                            <div className="w-[250px] relative border group">
                                <p className="absolute bottom-0 left-0 right-0 top-0 h-max z-50 group-hover:hidden text-center w-full bg-black text-white py-3">Game</p>
                                <img className="w-full h-full object-contain blur-[5px] hover:blur-none cursor-pointer  transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                                <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-black group-hover:hidden text-white py-3">narxi: 100$</p>
                            </div>
                            <div className="w-[250px] relative border group">
                                <p className="absolute bottom-0 left-0 right-0 top-0 h-max z-50 group-hover:hidden text-center w-full bg-black text-white py-3">Game</p>
                                <img className="w-full h-full object-contain blur-[5px] hover:blur-none cursor-pointer  transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                                <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-black group-hover:hidden text-white py-3">narxi: 100$</p>
                            </div>

                            <div className="w-[250px] relative border group">
                                <p className="absolute bottom-0 left-0 right-0 top-0 h-max z-50 group-hover:hidden text-center w-full bg-black text-white py-3">Game</p>
                                <img className="w-full h-full object-contain blur-[5px] hover:blur-none cursor-pointer  transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                                <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-black group-hover:hidden text-white py-3">narxi: 100$</p>
                            </div>
                            <div className="w-[250px] relative border group">
                                <p className="absolute bottom-0 left-0 right-0 top-0 h-max z-50 group-hover:hidden text-center w-full bg-black text-white py-3">Game</p>
                                <img className="w-full h-full object-contain blur-[5px] hover:blur-none cursor-pointer  transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                                <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-black group-hover:hidden text-white py-3">narxi: 100$</p>
                            </div>
                            <div className="w-[250px] relative border group">
                                <p className="absolute bottom-0 left-0 right-0 top-0 h-max z-50 group-hover:hidden text-center w-full bg-black text-white py-3">Game</p>
                                <img className="w-full h-full object-contain blur-[5px] hover:blur-none cursor-pointer  transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                                <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-black group-hover:hidden text-white py-3">narxi: 100$</p>
                            </div>
                            <div className="w-[250px] relative border group">
                                <p className="absolute bottom-0 left-0 right-0 top-0 h-max z-50 group-hover:hidden text-center w-full bg-black text-white py-3">Game</p>
                                <img className="w-full h-full object-contain blur-[5px] hover:blur-none cursor-pointer  transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                                <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-black group-hover:hidden text-white py-3">narxi: 100$</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
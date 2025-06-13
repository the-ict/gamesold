import Navbar from "@/components/Navbar"
import React from "react"
import BackgroundImage from "../assets/user-page-banner.svg"
import UserProfile from "../assets/profile-avatar.svg"
import { SlSettings } from "react-icons/sl"
import Footer from "@/components/Footer"
import { BiEdit } from "react-icons/bi"

import NotFound from "@/assets/goldie-no-results.svg"
import SidebarDrawer from "@/components/SidebarDrawer"

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    return (
        <React.Fragment>
            <Navbar />
            {
                sidebarOpen &&
                <SidebarDrawer
                    openAnimation={true}
                    closeAnimation={!sidebarOpen}
                    sidebarName="Dashboard"
                    setSidebarOpen={setSidebarOpen}
                >
                    <input type="text" placeholder="Tahallusingiz" />
                    <input type="text" placeholder="Emailingiz" />
                    <input type="text" placeholder="Eski parolingiz" />
                    <input type="text" placeholder="Yangi parolingiz" />
                    <input type="text" placeholder="Yangi parolni takrorlang" />
                    <button>O'zgartirish</button>
                </SidebarDrawer>
            }
            <div className={`w-screen h-[100px] relative flex items-center justify-center`} style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: 'repeat-y' }}>
                <div className="absolute -bottom-30 text-white w-[1200px] h-max bg-[#1e1f28] rounded-2xl shadow-lg p-5">
                    <div className="flex items-center justify-between relative">
                        <div className="flex items-center gap-5">
                            <img src={UserProfile} className="w-20 h-20 rounded-full cursor-pointer" alt="" />
                            <div className="flex flex-col items-start justify-center gap-2">
                                <span className="text-[20px] font-bold cursor-pointer">John Doe</span>
                                <span className="px-5 py-2 hover:bg-green-500 bg-green-300 text-black cursor-pointer">300$</span>
                            </div>
                        </div>

                        <SlSettings className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-300" size={30} />
                    </div>
                    <div className="flex items-center gap-5 mt-3">
                        <span className="text-gray-400">ID: 123456789</span>
                        <span className="text-gray-400">Email: john.doe@example.com</span>
                    </div>

                    <ul className="flex items-center gap-5 font-semibold mt-5">
                        <li className="cursor-pointer border-b-2 border-gray-200">Hisob</li>
                        <li className="cursor-pointer border-b-2 border-gray-200">Saqlanganlar</li>
                        <li className="cursor-pointer border-b-2 border-gray-200">Haqida</li>
                    </ul>
                </div>
            </div>

            <div className="w-screen min-h-screen flex items-start justify-center bg-[#141414]">
                <div className="w-[1200px] h-max rounded-2xl shadow-lg p-5 mt-[130px]">
                    <DashboardContent />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}


function DashboardContent() {
    return (
        <>
            <h1 className="text-white text-2xl border-b-2 border-[#1e1f28] w-full">Hisobni boshqarish</h1>

            <div className="mt-5">
                <div className="text-white">Sizning mablag'ingiz: <span className="font-bold">300$</span></div>
                <div>
                    <p className="text-gray-400 mt-2">Bu yerda sizning hisobingiz haqida ma'lumotlar bo'ladi. Siz o'z mablag'ingizni boshqarishingiz, saqlangan narsalarni ko'rishingiz va boshqa funksiyalarni bajarishingiz mumkin.</p>
                </div>
                <div className="flex items-center gap-3 mt-5 text-white">
                    <input type="number" className="flex-1/3 bg-[#1e1f28] text-white px-3 py-2 rounded" placeholder="qancha" />
                    <select name="" id="" className="flex-1/3 bg-[#1e1f28] text-white px-3 py-2 rounded">
                        <option value="Humo">Humo</option>
                        <option value="Uzcard">Uzcard</option>
                    </select>
                    <button className="bg-indigo-300 cursor-pointer text-black font-bold px-4 py-2 rounded flex-1/3">To'dirish</button>
                </div>

                <h1 className="text-white text-2xl mt-5">Tranzaksiyalar</h1>
                <div className="mt-5 flex items-center text-white gap-5 flex-wrap w-full justify-center">
                    <img src={NotFound} alt="notfoundimg" />
                    <p>Hozircha hech qanday tranzaksiya topilmadi</p>
                </div>
            </div>
        </>)
}

function SavedItems() {
    return (
        <>
            <h1 className="text-white text-2xl border-b-2 border-[#1e1f28] w-full">Saqlangan accountlar</h1>
            <div className="mt-5 flex items-center gap-5 flex-wrap">
                <div className="w-[270px] relative border">
                    <img className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                    <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-gray-200 text-black py-3">narxi: 100$</p>
                </div>
                <div className="w-[270px] relative border">
                    <img className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                    <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-gray-200 text-black py-3">narxi: 100$</p>
                </div>
                <div className="w-[270px] relative border">
                    <img className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                    <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-gray-200 text-black py-3">narxi: 100$</p>
                </div>
                <div className="w-[270px] relative border">
                    <img className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                    <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-gray-200 text-black py-3">narxi: 100$</p>
                </div>

                <div className="w-[270px] relative border">
                    <img className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                    <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-gray-200 text-black py-3">narxi: 100$</p>
                </div>
                <div className="w-[270px] relative border">
                    <img className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                    <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-gray-200 text-black py-3">narxi: 100$</p>
                </div>
                <div className="w-[270px] relative border">
                    <img className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                    <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-gray-200 text-black py-3">narxi: 100$</p>
                </div>
                <div className="w-[270px] relative border">
                    <img className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                    <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-gray-200 text-black py-3">narxi: 100$</p>
                </div>

            </div>
        </>
    )
}

function About() {
    return (
        <>
            <h1 className="text-white text-2xl border-b-2 border-[#1e1f28] w-full">Haqida</h1>
            <div className="mt-5 relative text-white w-[900px] p-5 bg-[#1e1f28] rounded-lg">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque modi quasi molestias provident reprehenderit laudantium possimus, dolores id facere hic placeat vitae ducimus ut corporis consectetur adipisci deleniti architecto ullam.</p>
                <BiEdit className="absolute top-5 right-5 text-gray-400 cursor-pointer hover:text-white transition-colors duration-300" size={30} />
            </div>
        </>
    )
}


export function DashboardContentWrapper({ activeTab }: { activeTab: string }) {
    switch (activeTab) {
        case "account":
            return <DashboardContent />;
        case "saved":
            return <SavedItems />;
        case "about":
            return <About />;
        default:
            return <DashboardContent />;
    }
}


import Video from "@/assets/videos/homepagevideo.mp4"
import { MdOutlineAttractions } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import useStore from "../store"
import SearchForm from "./SearchForm";
import { useState } from "react";


export default function Hero() {
  const [showSearchForm, setShowSearchForm] = useState<boolean>(false)

  const { userId, setUserId } = useStore()

  return (
    <div className="bg-cover justify-center flex bg-[#212224] text-white flex-col items-center">

      {/* Search Form */}
      {
        showSearchForm && (
          <SearchForm setSearchForm={setShowSearchForm} />
        )
      }


      <div className="w-[1200px] mt-[10px] relative">
        <video src={Video} autoPlay loop muted className="h-[600px]">
          <source src={Video} type="video/mp4" />
        </video>

        <div className="black absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/80 flex items-center justify-center">
          <div className="flex items-center flex-col gap-5">
            <h1 className="text-3xl font-bold">O'YIN AKKOUNTLARNI SOLIB OLISH / SOTIB YUBORISH</h1>
            <p className="text-[12px] text-gray-300">Lorem ipsum dolor porro,nsequatur aliquam accusamus magni, earum saepe, animi molestiae! Quibusdam, modi non.</p>
            {
              userId ? (
                <button onClick={() => setShowSearchForm(true)} className="bg-red-500 px-5 transition hover:bg-red-600 py-2 cursor-pointer rounded-full ">Try Yourself</button>

              ) : (
                <button onClick={() => window.location.replace("/login")} className="bg-red-500 px-5 transition hover:bg-red-600 py-2 cursor-pointer rounded-full ">Sign in</button>
              )
            }
          </div>
        </div>


      </div>

      <div className="w-[1200px] flex items-center justify-between mt-[50px]">
        {/* Recomending */}
        <div className="flex items-center justify-between gap-5 w-full">
          <div className="flex items-center w-[300px]  flex-col p-5 rounded bg-gray-700 py-8 gap-3 cursor-pointer">
            <h1>
              1000+ muvaffaqiyatli tranzaksiyalar
            </h1>

            <MdOutlineAttractions size={30} />
          </div>


          <div className="flex items-center w-[300px]  flex-col p-5 rounded bg-gray-700 py-8 gap-3 cursor-pointer">
            <h1>
              “24/7 support”
            </h1>
            <MdOutlineContactSupport size={30} />
          </div>
          <div className="flex items-center w-[300px] flex-col p-5 rounded bg-gray-700 py-8 gap-3 cursor-pointer">
            <h1>Secure payment system</h1>
            <MdOutlinePayment size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

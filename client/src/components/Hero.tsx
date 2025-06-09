import { FaArrowLeft, FaArrowRight, FaGifts, FaPlay, FaPlaystation } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="bg-cover justify-center flex">

      <div className="w-[1200px] h-[600px] flex flex-col justify-between">
        <div className="mt-10 flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold mt-10">Game Deals Beyond Borders</h1>
            <p className="text-xl">Fresh deals drop 24/7. Miss it? it's gone</p>

          </div>
          <FaPlaystation size={400} />
        </div>

        <div className="flex items-center justify-center">
          <div className="w-[1200px] flex items-center gap-10">
            <FaArrowLeft size={25} className="cursor-pointer" />
            <div className="overflow-x-hidden">
              <div className="flex items-center gap-10 w-max flex-nowrap">
                <div className="flex items-center flex-col justify-center cursor-pointer rounded-[10px] hover:bg-[#141414] hover:text-white p-2 transition-all duration-300 ease-in-out">
                  <FaGifts className="mr-2 text-4xl" />
                  <p className="text-xl font-semibold">Gift cards</p>
                </div>
                <div className="flex items-center flex-col justify-center cursor-pointer rounded-[10px] hover:bg-[#141414] hover:text-white p-2 transition-all duration-300 ease-in-out">
                  <FaGifts className="mr-2 text-4xl" />
                  <p className="text-xl font-semibold">Gift cards</p>
                </div>
                <div className="flex items-center flex-col justify-center cursor-pointer rounded-[10px] hover:bg-[#141414] hover:text-white p-2 transition-all duration-300 ease-in-out">
                  <FaGifts className="mr-2 text-4xl" />
                  <p className="text-xl font-semibold">Gift cards</p>
                </div>
                <div className="flex items-center flex-col justify-center cursor-pointer rounded-[10px] hover:bg-[#141414] hover:text-white p-2 transition-all duration-300 ease-in-out">
                  <FaGifts className="mr-2 text-4xl" />
                  <p className="text-xl font-semibold">Gift cards</p>
                </div>
                <div className="flex items-center flex-col justify-center cursor-pointer rounded-[10px] hover:bg-[#141414] hover:text-white p-2 transition-all duration-300 ease-in-out">
                  <FaGifts className="mr-2 text-4xl" />
                  <p className="text-xl font-semibold">Gift cards</p>
                </div>
                <div className="flex items-center flex-col justify-center cursor-pointer rounded-[10px] hover:bg-[#141414] hover:text-white p-2 transition-all duration-300 ease-in-out">
                  <FaGifts className="mr-2 text-4xl" />
                  <p className="text-xl font-semibold">Gift cards</p>
                </div>
                <div className="flex items-center flex-col justify-center cursor-pointer rounded-[10px] hover:bg-[#141414] hover:text-white p-2 transition-all duration-300 ease-in-out">
                  <FaGifts className="mr-2 text-4xl" />
                  <p className="text-xl font-semibold">Gift cards</p>
                </div>
                <div className="flex items-center flex-col justify-center cursor-pointer rounded-[10px] hover:bg-[#141414] hover:text-white p-2 transition-all duration-300 ease-in-out">
                  <FaGifts className="mr-2 text-4xl" />
                  <p className="text-xl font-semibold">Gift cards</p>
                </div>
                <div className="flex items-center flex-col justify-center cursor-pointer rounded-[10px] hover:bg-[#141414] hover:text-white p-2 transition-all duration-300 ease-in-out">
                  <FaGifts className="mr-2 text-4xl" />
                  <p className="text-xl font-semibold">Gift cards</p>
                </div>
                <div className="flex items-center flex-col justify-center cursor-pointer rounded-[10px] hover:bg-[#141414] hover:text-white p-2 transition-all duration-300 ease-in-out">
                  <FaGifts className="mr-2 text-4xl" />
                  <p className="text-xl font-semibold">Gift cards</p>
                </div>
              </div>
            </div>
            <FaArrowRight size={24} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

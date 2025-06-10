import { FaPlaystation } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="bg-cover justify-center flex">

      <div className="w-[1200px] min-h-[calc(100vh-120px)] flex flex-col justify-between">
        <div className="mt-10 flex justify-between items-center h-full">
          <div>
            <h1 className="text-5xl font-bold mt-10">Game Deals Beyond Borders</h1>
            <p className="text-xl mt-5">Fresh deals drop 24/7. Miss it? it's gone</p>
            <button className="p-2 border bg-red-400 rounded-[10px] font-bold text-white">Sign up now</button>
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

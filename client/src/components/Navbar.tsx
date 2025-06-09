import { FaSearch } from "react-icons/fa"

export default function Navbar() {
    return (
        <div className="flex items-center w-full justify-center">
            <div className="w-[1200px] py-3 flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <h1 className="text-2xl font-bold cursor-pointer">GameSold</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        console.log("search")
                    }}  className="w-[500px] flex items-center gap-2 justify-between p-2 border border-gray-300 rounded-full">
                        <input type="text" className="w-full rounded-full h-full outline-none border-none px-3" placeholder="Qidirish..."/>
                        <button type="submit" className="cursor-pointer p-2 bg-red-400 rounded-full text-white"><FaSearch size={18}/></button>
                    </form>
                </div>
                <div className="flex items-center gap-5 justify-between w-max">
                    <select name="language" id="language" className="p-2 px-3.5 border rounded-[10px]">
                        <option value="en">English </option>
                        <option value="ar">Arabic</option>
                    </select>

                    <button className="cursor-pointer bg-gray-200 p-2 text-red-400 font-bold transition-all hover:bg-red-400 hover:text-white rounded-full">Sign In / Sign Up</button>
                </div>
            </div>
        </div>
    )
}

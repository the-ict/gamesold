import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import SearchForm from "./SearchForm"

export default function Navbar() {
    const [scrolled, setScrolled] = useState<boolean>(false)
    const [searchForm, setSearchForm] = useState<boolean>(false)
    
    window.addEventListener("scroll", () => {
        if(window.scrollY > 200) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    })

    return (
        <div className={`flex bg-[#222] text-white items-center w-full justify-center ${scrolled ? "fixed transition-all z-50" : ""}`}>
            <div className="w-[1200px] py-5 flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <h1 className="text-2xl font-bold cursor-pointer">GameSold</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                    }}  className="w-[500px] flex items-center gap-2 justify-between p-2 border border-gray-300 rounded-full">
                        <input type="text" onFocus={() => setSearchForm(true)} className="w-full rounded-full h-full outline-none border-none px-3" placeholder="Qidirish..."/>
                        {/* <button type="submit" className="cursor-pointer p-2 bg-red-400 rounded-full text-white"><FaSearch size={18}/></button> */}
                    </form>
                </div>
                <div className="flex items-center gap-5 justify-between w-max">
                    <button className="cursor-pointer bg-red-500 px-3 py-3 text-white font-bold transition-all hover:bg-red-400 hover:text-white rounded-full">Sign In / Sign Up</button>
                </div>
            </div>
            {
                searchForm && <SearchForm setSearchForm={setSearchForm}/>
            }
        </div>
    )
}

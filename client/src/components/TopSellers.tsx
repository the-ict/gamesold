export default function TopSellers() {
    return (
        <div className="flex items-center justify-center">
            <div className="w-[1200px] mt-10 overflow-x-hidden">
                <h1 className="text-3xl font-bold">Eng yaxshi sotuvchilar</h1>
                <div className="flex items-center gap-2 mt-5 infiniteAnimation">
                    {
                        [
                            "JohnDoe",
                            "JaneDoe",
                            "Maksimka",
                            "Sarvar",
                            "Doston",
                            "Nurbek",
                            "Sardor",
                            "Jasurbek",
                            "Farrux",
                            "Otabek",
                            "Bahrom",
                            "Abdulaziz",
                            "Sanjar",
                            "Asadbek",
                            "Jamshid",
                            "Temur",
                            "Doniyor",
                            "Rustam",
                            "Sunnatilla",
                        ].map((item,index) => (
                            <div key={index} className="px-3 py-2 cursor-pointer hover:bg-gray-200">{item}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
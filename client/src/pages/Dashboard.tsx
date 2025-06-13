import Navbar from "@/components/Navbar"
import React from "react"

export default function Dashboard() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="flex items-center justify-center">
                <div className={`w-full h-[200px] bg-[url('/images/dashboard-bg.png')] bg-cover bg-center bg-no-repeat`}></div>
                <div className="flex items-start gap-10 w-[1200px]">

                </div>
            </div>
        </React.Fragment>
    )
}
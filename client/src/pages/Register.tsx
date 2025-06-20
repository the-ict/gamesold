import Background from "@/assets/background.jpeg"
import { FaGoogle } from "react-icons/fa"

export default function Register() {
    return (
        <div className="flex items-center text-white justify-center h-screen w-screen" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
            <form className="flex flex-col gap-2 p-5 border border-gray-300 rounded w-[400px]">
                <input type="text" placeholder="Name" className="p-2 border border-gray-300 w-full rounded" />
                <input type="text" placeholder="Email" className="p-2 border border-gray-300 w-full rounded" />
                <input type="text" placeholder="Password" className="p-2 border border-gray-300 w-full rounded" />
                <input type="text" placeholder="Confirm Password" className="p-2 border border-gray-300 w-full rounded" />
               <div className="flex justify-between items-center flex-col w-full gap-2">
                    <button className="p-2 bg-red-400 rounded-[10px] cursor-pointer text-white w-full">Register</button>
                    <button className="p-2 bg-blue-500 rounded-[10px] cursor-pointer text-white w-full flex items-center justify-center gap-2">
                        <FaGoogle className="text-2xl text-white" />
                        <span>With Google</span>
                    </button>
                </div>
                 <p>Already have an account? <a href="/login">Login</a></p>
            </form>
        </div>
    )
}
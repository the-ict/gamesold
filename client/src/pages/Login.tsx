import Background from "@/assets/background.jpeg"
import { FaGoogle } from "react-icons/fa";

export default function Login() {
    return (
        <div className="flex text-white items-center justify-center h-screen w-screen" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <form className="flex flex-col gap-2 p-5 border border-gray-300 rounded w-[400px]">
                <input type="text" placeholder="Email" className="p-2 border border-gray-300 w-full rounded" />
                <input type="password" placeholder="Password" className="p-2 border border-gray-300 w-full rounded" />
                <div className="flex justify-between items-center flex-col w-full gap-2">
                    <button className="p-2 bg-red-400 rounded-[10px] cursor-pointer text-white w-full">Login</button>
                    <button className="p-2 bg-blue-500 rounded-[10px] cursor-pointer text-white w-full flex items-center justify-center gap-2">
                        <FaGoogle className="text-2xl text-white" />
                        <span>With Google</span>
                    </button>
                </div>
                <p>Don't have an account? <a href="/register">Register</a></p>
            </form>
        </div>
    )
}
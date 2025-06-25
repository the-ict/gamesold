import Background from "@/assets/background.jpeg"
import axios from "axios";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaGoogle } from "react-icons/fa";
import useStore from "../store";

export default function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const {setUserId, setLoading, setError} = useStore()


    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async() => {
        console.log(user, "login user informations")
        setLoading(true)
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login",user)
            if(response.data) {
                setUserId(response.data._id)
            }
        } catch (error) {
            setError("Login qilishda muammo chiqdi")
        }
    }

    return (
        <div className="flex text-white items-center justify-center h-screen w-screen" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <form onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()} className="flex flex-col gap-2 p-5 border border-gray-300 rounded w-[400px]">
                <input type="text" onChange={handleChange} name="email" placeholder="Email" className="p-2 border border-gray-300 w-full rounded" />
                <input type="password" onChange={(handleChange)} name="password" placeholder="Password" className="p-2 border border-gray-300 w-full rounded" />
                <div className="flex justify-between items-center flex-col w-full gap-2">
                    <button onClick={handleLogin} className="p-2 bg-red-400 rounded-[10px] cursor-pointer text-white w-full">Login</button>
                    <button onClick={() => window.location.replace("http://localhost:5000/auth/google")} className="p-2 bg-blue-500 rounded-[10px] cursor-pointer text-white w-full flex items-center justify-center gap-2">
                        <FaGoogle className="text-2xl text-white" />
                        <span>With Google</span>
                    </button>
                </div>
                <p>Don't have an account? <a href="/register">Register</a></p>
            </form>
        </div>
    )
}
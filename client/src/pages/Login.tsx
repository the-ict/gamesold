export default function Login() {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <form className="flex flex-col gap-2 p-5 border border-gray-300 rounded w-[400px]">
                <input type="text" placeholder="Email" className="p-2 border border-gray-300 w-full rounded"/>
                <input type="password" placeholder="Password" className="p-2 border border-gray-300 w-full rounded"/>
                <button className="p-2 bg-red-400 rounded-[10px] cursor-pointer text-white w-full">Login</button>
                <p>Don't have an account? <a href="/register">Register</a></p>
            </form>
        </div>
    )
}
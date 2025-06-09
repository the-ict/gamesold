export default function Register() {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <form className="flex flex-col gap-2 p-5 border border-gray-300 rounded w-[400px]">
                <input type="text" placeholder="Name" className="p-2 border border-gray-300 w-full rounded"/>
                <input type="text" placeholder="Email" className="p-2 border border-gray-300 w-full rounded"/>
                <input type="text" placeholder="Password" className="p-2 border border-gray-300 w-full rounded"/>
                <input type="text" placeholder="Confirm Password" className="p-2 border border-gray-300 w-full rounded"/>
                <button className="p-2 bg-red-400 rounded-[10px] cursor-pointer text-white w-full">Register</button>
                <p>Already have an account? <a href="/login">Login</a></p>
            </form>
        </div>
    )
}
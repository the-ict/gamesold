import {} from "react"

export default function Sidebar() {
  return (
    <div className="flex flex-1 flex-col gap-3 p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded">
      <h2 className="text-2xl font-bold">Menu</h2>
      <ul className="flex flex-col gap-2">
        <li className="px-3 py-2 rounded hover:bg-gray-700 cursor-pointer">
          <a href="#" className="text-white">
            Home
          </a>
        </li>
        <li className="px-3 py-2 rounded hover:bg-gray-700 cursor-pointer">
          <a href="#" className="text-white">
            About
          </a>
        </li>
        <li className="px-3 py-2 rounded hover:bg-gray-700 cursor-pointer">
          <a href="#" className="text-white">
            Contact
          </a>
        </li>
        <li className="px-3 py-2 rounded hover:bg-gray-700 cursor-pointer">
          <a href="#" className="text-white">
            Services
          </a>
        </li>
        <li className="px-3 py-2 rounded hover:bg-gray-700 cursor-pointer">
          <a href="#" className="text-white">
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
}
import { useState, type ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function SearchForm({
  setSearchForm,
}: {
  setSearchForm: (value: boolean) => void;
}) {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <div className="flex items-center flex-col fixed top-0 left-0 right-0 justify-center z-[100] h-screen w-screen bg-black/60 backdrop:blur-[10px]">
      <FaXmark
        size={25}
        className="cursor-pointer text-white absolute top-10 right-10"
        onClick={() => setSearchForm(false)}
      />

      <div className="w-[1200px] flex items-center gap-2 p-2 border border-gray-300 h-[80px] rounded px-4 py-5 bg-white">
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearchInput(e.target.value);
          }}
          type="text"
          autoFocus
          placeholder="Qidirish..."
          className="w-full h-full text-black outline-none border-none"
          onKeyDown={(e) => {
            if (e.key === "Backspace" && !e.currentTarget.value) {
              setSearchForm(false);
            }

            if (e.key == "Enter") {
              window.location.replace(`/search?search=${searchInput}`);
            }
          }}
        />
        <button
          onClick={() => {
            window.location.replace(`/search?search=${searchInput}`);
          }}
          className="p-2 bg-red-400 rounded-full cursor-pointer text-white"
          type="submit"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
}

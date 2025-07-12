import BackgroundImage from "../assets/user-page-banner.svg";
import UserProfile from "../assets/profile-avatar.svg";
import { BiAddToQueue, BiEdit } from "react-icons/bi";
import { SlSettings } from "react-icons/sl";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState, type ChangeEvent } from "react";
import Footer from "@/components/Footer";

import NotFound from "@/assets/goldie-no-results.svg";
import SidebarDrawer from "@/components/SidebarDrawer";
import useStore from "../store";
import axios from "axios";
import { CgAdd } from "react-icons/cg";
import type { IGameAccount } from "@/types/GameAccount";
import Description from "@/components/Description";
import type { IUser } from "@/types/User";
import { currencyFormatter } from "@/components/Trending";

const IMAGE_URL = import.meta.env.VITE_PC;

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
  const [newAccountOpen, setNewAccountOpen] = React.useState<boolean>(false);
  const [openDescription, setOpenDescription] = React.useState<boolean>(false);
  const [route, setRoute] = useState<"Saqlanganlar" | "Hisob" | "Haqida">(
    "Hisob"
  );
  const [loader, setLoader] = React.useState<boolean>(false);
  const [imageFile, setImageFile] = React.useState<File[]>([]);
  const [videoFile, setVideoFile] = React.useState<File[]>([]);
  const [user, setUser] = useState<IUser>({} as any);

  const { userId, setUserId } = useStore();

  const [accountInformation, setAccountInformation] =
    React.useState<IGameAccount>({
      author: String(userId),
      game: "PUBG",
      region: "Farg'ona",
      price: 0,
      description: "",
      image: "",
      seller: String(userId),
      status: "available",
      video: "",
      name: "",
    });

  const handleChangeNewAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccountInformation((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const setGoogleInfo = async () => {
      if (!userId) {
        try {
          const res = await axios.get("http://localhost:5000/google/me", {
            withCredentials: true,
          });

          if (res.data) {
            setUserId(res.data._id);
          }
        } catch (error) {
          alert(error);
        }
      }
    };

    setGoogleInfo();

    const getUserInformations = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/user/" + localStorage.getItem("userId")
        );

        console.log(res.data);
        setUser(res.data);
      } catch (error) {
        alert(error);
      }
    };

    if (localStorage.getItem("userId")) {
      getUserInformations();
    }
  }, []);

  const handleNewAccount = async () => {
    if (accountInformation.name === "") return;
    if (accountInformation.price === 0) return;
    if (accountInformation.region === "") return;

    console.log(accountInformation.description, "bu description");

    if (accountInformation.description === "") return;

    setLoader(true);

    try {
      if (imageFile.length != 0) {
        const formData = new FormData();

        formData.append("file", imageFile[0]);
        const imageUploadResponse = await axios.post(
          "http://localhost:5000/upload",
          formData
        );
        if (imageUploadResponse.data) {
          accountInformation.image = imageFile[0].name;
        } else {
          setLoader(false);
          alert("Yuklashda xatolik mavjud");
        }
      } else {
        alert("Rasmni tanlang bu majburiy");
        setLoader(false);
        return;
      }

      if (videoFile.length != 0) {
        const formData = new FormData();

        formData.append("file", videoFile[0]);
        const videoUploadResponse = await axios.post(
          "http://localhost:5000/upload",
          formData
        );
        if (videoUploadResponse.data) {
          accountInformation.video = videoFile[0].name;
        } else {
          setLoader(false);
          alert("Yuklashda xatolik mavjud");
        }
      } else {
        alert("Videoni tanlang bu majburiy");
        setLoader(false);
        return;
      }

      console.log(accountInformation);

      const response = await axios.post(
        "http://localhost:5000/api/game",
        accountInformation
      );

      if (response.data) {
        window.location.reload();
      } else {
        setLoader(false);
        alert("Yuklashda xatolik mavjud, keyinroq urinib kor'ing!");
      }
    } catch (error) {
      setLoader(false);
      alert("Yuklashda xatolik mavjud, keyinroq urinib kor'ing!");
    }
  };
  return (
    <React.Fragment>
      <Navbar />

      {sidebarOpen && (
        <SidebarDrawer
          openAnimation={true}
          closeAnimation={!sidebarOpen}
          sidebarName="Sozlamalar"
          setSidebarOpen={setSidebarOpen}
          sidebarWidth="w-[400px]"
          sidebarSide="left-0"
          sidebarBackgroundColor="bg-[#212224]"
        >
          <div className="flex flex-col items-start justify-center gap-5 mt-[50%] text-white">
            <input
              type="text"
              placeholder="Tahallusingiz"
              className="px-5 py-3 border-2 w-[100%]"
              autoFocus
            />
            <input
              type="text"
              placeholder="Emailingiz"
              className="px-5 py-3 border-2 w-[100%]"
            />
            <input
              type="text"
              placeholder="Eski parolingiz"
              className="px-5 py-3 border-2 w-[100%]"
            />
            <input
              type="text"
              placeholder="Yangi parolingiz"
              className="px-5 py-3 border-2 w-[100%]"
            />
            <input
              type="text"
              placeholder="Yangi parolni takrorlang"
              className="px-5 py-3 border-2 w-[100%]"
            />
            <button className="bg-blue-500 w-full cursor-pointer text-white px-4 py-2 rounded">
              O'zgartirish
            </button>
          </div>
        </SidebarDrawer>
      )}
      <div
        className={`w-screen h-[100px] relative flex items-center justify-center`}
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-y",
        }}
      >
        <div className="absolute -bottom-30 text-white w-[1200px] h-max bg-[#1e1f28] rounded-2xl shadow-lg p-5">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center gap-5">
              <img
                src={
                  user.image
                    ? user.googleId
                      ? user.image
                      : IMAGE_URL + user.image
                    : UserProfile
                }
                className="w-20 h-20 rounded-full cursor-pointer"
                alt=""
              />
              <div className="flex flex-col items-start justify-center gap-2">
                <span className="text-[20px] font-bold cursor-pointer">
                  {user.name}
                </span>
                <span className="px-5 py-2 hover:bg-green-500 bg-green-300 text-black cursor-pointer">
                  {currencyFormatter(user.balance)}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <SlSettings
                onClick={() => setSidebarOpen(true)}
                className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-300"
                size={30}
              />

              <CgAdd
                className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-300"
                size={30}
                onClick={() => setNewAccountOpen(true)}
              />

              {/* sidebar drawer */}
              {newAccountOpen && (
                <SidebarDrawer
                  sidebarBackgroundColor="bg-[#222]"
                  sidebarWidth="w-[500px] right-sidebar-drawer"
                  sidebarName="Hisobni sotish"
                  sidebarSide="right-0"
                  setSidebarOpen={setNewAccountOpen}
                >
                  <form
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                      e.preventDefault();
                    }}
                    className="flex flex-col justify-center text-white px-5 gap-[1rem]"
                  >
                    <div>
                      <h1 className="text-2xl font-bold">
                        O'yin turini tanlang!
                      </h1>
                      <select
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setAccountInformation((prev) => ({
                            ...prev,
                            game: e.target.value as
                              | "PUBG"
                              | "Fortnite"
                              | "Call of Duty",
                          }));
                        }}
                        className="px-5 border rounded-[5px] outline-none py-3 bg-[#000] w-full mt-[50px]"
                        defaultChecked
                      >
                        <option value="PUBG">Pubg Mobile</option>
                        <option value="Fortnite">Fortnite</option>
                        <option value="Call of Duty">Call of Duty</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      placeholder="Hisob uchun nom"
                      className="px-5 py-3 border-2 w-[100%]"
                      onChange={(e) => handleChangeNewAccount(e)}
                      name="name"
                    />

                    <Description
                      onChange={(html) =>
                        setAccountInformation((prev) => ({
                          ...prev,
                          description: html,
                        }))
                      }
                    />

                    <input
                      type="number"
                      placeholder="Narxi"
                      className="px-5 py-3 border-2 w-[100%]"
                      onChange={(e) => handleChangeNewAccount(e)}
                      name="price"
                    />
                    <select
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setAccountInformation((prev) => ({
                          ...prev,
                          region: e.target.value,
                        }));
                      }}
                      className="px-5 border rounded-[5px] outline-none py-3 bg-[#000] w-full cursor-pointer"
                    >
                      {[
                        "Farg'ona",
                        "Toshkent",
                        "Andijon",
                        "Buxoro",
                        "Jizzax",
                        "Namangan",
                        "Navoiy",
                        "Qashqadaryo",
                        "Samarqand",
                        "Surxondaryo",
                        "Sirdaryo",
                        "Xorazm",
                        "Qoraqalpoqiston",
                      ].map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>

                    <h1 className="text-2xl font-bold">Rasm</h1>
                    <div className="border-t-1">
                      <label
                        htmlFor="fileinput"
                        className="h-[150px] mt-[10px] w-full flex items-center justify-center"
                      >
                        {imageFile[0] ? (
                          <img
                            src={URL.createObjectURL(imageFile[0])}
                            alt="image downloaded"
                            className="w-full h-full object-contain rounded-[10px] cursor-pointer"
                          />
                        ) : (
                          <BiAddToQueue className="w-full h-[50px] object-contain rounded-[10px] cursor-pointer" />
                        )}
                      </label>
                      <input
                        id="fileinput"
                        onChange={(e) => {
                          if (e.target.files) {
                            setImageFile([e.target.files[0]]);
                          }
                        }}
                        type="file"
                        style={{ display: "none" }}
                      />
                    </div>

                    <h1 className="text-2xl font-bold">Video</h1>
                    <div className="border-t-1">
                      <label
                        htmlFor="fileinput2"
                        className="h-[150px] w-full flex items-center justify-center"
                      >
                        {videoFile[0] ? (
                          <img
                            src={URL.createObjectURL(videoFile[0])}
                            alt="video downloaded"
                            className="w-full h-full object-contain rounded-[10px] cursor-pointer"
                          />
                        ) : (
                          <BiAddToQueue className="w-full h-[50px] object-contain rounded-[10px] cursor-pointer" />
                        )}
                      </label>
                      <input
                        id="fileinput2"
                        type="file"
                        onChange={(e) => {
                          if (e.target.files) {
                            setVideoFile([e.target.files[0]]);
                          }
                        }}
                        style={{ display: "none" }}
                      />
                    </div>

                    <button
                      onClick={handleNewAccount}
                      className="bg-red-500 hover:bg-red-600 cursor-pointer py-3 w-full text-white flex items-center justify-center"
                    >
                      {loader ? (
                        <div role="status">
                          <svg
                            aria-hidden="true"
                            className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : (
                        "Sotish"
                      )}
                    </button>
                  </form>
                </SidebarDrawer>
              )}
            </div>
          </div>
          <div className="flex items-center gap-5 mt-3">
            <span className="text-gray-400">ID: {user._id}</span>
            <span className="text-gray-400">Email: {user.email}</span>
          </div>

          <ul className="flex items-center gap-5 font-semibold mt-5">
            <li
              className="cursor-pointer border-b-2 border-gray-200"
              onClick={() => setRoute("Hisob")}
            >
              Hisob
            </li>
            <li
              className="cursor-pointer border-b-2 border-gray-200"
              onClick={() => setRoute("Saqlanganlar")}
            >
              Saqlanganlar
            </li>
            <li
              className="cursor-pointer border-b-2 border-gray-200"
              onClick={() => setRoute("Haqida")}
            >
              Haqida
            </li>
          </ul>
        </div>
      </div>

      <div className="w-screen min-h-screen flex items-start justify-center bg-[#141414]">
        <div className="w-[1200px] h-max rounded-2xl shadow-lg p-5 mt-[130px]">
          {route === "Hisob" && <DashboardContent user={user} />}
          {route === "Saqlanganlar" && <SavedItems />}
          {route === "Haqida" && <About />}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

function DashboardContent({ user }: { user: IUser }) {
  const [balance, setBalance] = useState<number>(0);
  const handleSetBalance = async () => {
    try {
      const res = await axios.put(
        "http://localhost:5000/api/user/balance/" + user._id,
        { balance: balance }
      );
      console.log(res.data);

      console.log(res.data);
      if (res.data) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-white text-2xl border-b-2 border-[#1e1f28] w-full">
        Hisobni boshqarish
      </h1>

      <div className="mt-5">
        <div className="text-white">
          Sizning mablag'ingiz:{" "}
          <span className="font-bold">{currencyFormatter(user.balance)}</span>
        </div>
        <div>
          <p className="text-gray-400 mt-2">
            Bu yerda sizning hisobingiz haqida ma'lumotlar bo'ladi. Siz o'z
            mablag'ingizni boshqarishingiz, saqlangan narsalarni ko'rishingiz va
            boshqa funksiyalarni bajarishingiz mumkin.
          </p>
        </div>
        <div className="flex items-center gap-3 mt-5 text-white">
          <input
            type="number"
            className="flex-1/3 bg-[#1e1f28] text-white px-3 py-2 rounded"
            placeholder="qancha"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setBalance(parseInt(e.target.value));
            }}
          />
          <select
            name=""
            id=""
            className="flex-1/3 bg-[#1e1f28] text-white px-3 py-2 rounded"
          >
            <option value="Humo">Humo</option>
            <option value="Uzcard">Uzcard</option>
          </select>
          <button
            className="bg-indigo-300 cursor-pointer text-black font-bold px-4 py-2 rounded flex-1/3"
            onClick={handleSetBalance}
          >
            To'dirish
          </button>
        </div>

        <h1 className="text-white text-2xl mt-5">Tranzaksiyalar</h1>
        <div className="mt-5 flex items-center text-white gap-5 flex-wrap w-full justify-center">
          <img src={NotFound} alt="notfoundimg" />
          <p>Hozircha hech qanday tranzaksiya topilmadi</p>
        </div>
      </div>
    </>
  );
}

function SavedItems() {
  return (
    <>
      <h1 className="text-white text-2xl border-b-2 border-[#1e1f28] w-full">
        Saqlangan accountlar
      </h1>
      <div className="mt-5 flex items-center gap-5 flex-wrap">
        <div className="w-[270px] relative border">
          <img
            className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out"
            src="https://www.g2g.com/img/affiliate-home.webp"
            alt=""
          />
          <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-gray-200 text-black py-3">
            narxi: 100$
          </p>
        </div>
        <div className="w-[270px] relative border">
          <img
            className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out"
            src="https://www.g2g.com/img/affiliate-home.webp"
            alt=""
          />
          <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-gray-200 text-black py-3">
            narxi: 100$
          </p>
        </div>
        <div className="w-[270px] relative border">
          <img
            className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out"
            src="https://www.g2g.com/img/affiliate-home.webp"
            alt=""
          />
          <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-gray-200 text-black py-3">
            narxi: 100$
          </p>
        </div>
        <div className="w-[270px] relative border">
          <img
            className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out"
            src="https://www.g2g.com/img/affiliate-home.webp"
            alt=""
          />
          <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-gray-200 text-black py-3">
            narxi: 100$
          </p>
        </div>

        <div className="w-[270px] relative border">
          <img
            className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out"
            src="https://www.g2g.com/img/affiliate-home.webp"
            alt=""
          />
          <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-gray-200 text-black py-3">
            narxi: 100$
          </p>
        </div>
        <div className="w-[270px] relative border">
          <img
            className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out"
            src="https://www.g2g.com/img/affiliate-home.webp"
            alt=""
          />
          <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-gray-200 text-black py-3">
            narxi: 100$
          </p>
        </div>
        <div className="w-[270px] relative border">
          <img
            className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out"
            src="https://www.g2g.com/img/affiliate-home.webp"
            alt=""
          />
          <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-gray-200 text-black py-3">
            narxi: 100$
          </p>
        </div>
        <div className="w-[270px] relative border">
          <img
            className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out"
            src="https://www.g2g.com/img/affiliate-home.webp"
            alt=""
          />
          <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-gray-200 text-black py-3">
            narxi: 100$
          </p>
        </div>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <h1 className="text-white text-2xl border-b-2 border-[#1e1f28] w-full">
        Haqida
      </h1>
      <div className="mt-5 relative text-white w-[900px] p-5 bg-[#1e1f28] rounded-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque modi
          quasi molestias provident reprehenderit laudantium possimus, dolores
          id facere hic placeat vitae ducimus ut corporis consectetur adipisci
          deleniti architecto ullam.
        </p>
        <BiEdit
          className="absolute top-5 right-5 text-gray-400 cursor-pointer hover:text-white transition-colors duration-300"
          size={30}
        />
      </div>
    </>
  );
}

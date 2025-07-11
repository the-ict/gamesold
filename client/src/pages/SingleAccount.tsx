import {
  FaArrowLeft,
  FaArrowRight,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import { GrFavorite } from "react-icons/gr";
import Footer from "../components/Footer";
import { BiLocationPlus, BiMessage } from "react-icons/bi";
import SidebarDrawer from "@/components/SidebarDrawer";
import { useEffect, useState } from "react";
import AccountImage from "@/assets/background.jpeg";
import UserAvatar from "@/assets/profile-avatar.svg";
import AreYouSure from "@/components/AreYouSure";
import { useLocation } from "react-router-dom";
import axios from "axios";
import type { IGameAccount } from "@/types/GameAccount";
import { currencyFormatter } from "@/components/Trending";
import type { IUser } from "@/types/User";
import ReactPlayer from "react-player";
import type { IConversation } from "@/types/Conversations";

// Render a YouTube video player

const IMAGE_URL = import.meta.env.VITE_PC;

export default function SingleAccount() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [showAreYouSure, setShowAreYouSure] = useState<boolean>(false);
  const [accountInfo, setAccountInfo] = useState<IGameAccount>({} as any);
  const [authorAccounts, setAuthorAccounts] = useState<IGameAccount[]>([]);
  const [authorAccount, setAuthorAccount] = useState<IUser>({} as any);
  const [user, setUser] = useState<IUser>({} as any);

  const location = useLocation();

  useEffect(() => {
    const accountId = location.pathname.split("/")[2];

    const getAccountInformations = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/game/" + accountId
        );

        console.log(res.data);
        setAccountInfo(res.data);
      } catch (error) {
        alert(error);
      }
    };

    if (accountId) {
      getAccountInformations();
    }

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
  }, [location]);

  useEffect(() => {
    if (!accountInfo.author) return;
    const getAccountAuthorAccounts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/game/author/" + accountInfo.author
        );

        console.log(res.data);
        if (res.data) {
          setAuthorAccounts(res.data);
        }
      } catch (error) {
        alert(error);
      }
    };

    getAccountAuthorAccounts();

    const getAccountAuthorInformations = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/user/" + accountInfo?.author
        );

        console.log(res.data, "author informations");
        if (res.data) {
          setAuthorAccount(res.data);
        }
      } catch (error) {
        alert(error);
      }
    };

    getAccountAuthorInformations();
  }, [accountInfo.author]);

  const saveAccount = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/user/save", {
        userId: localStorage.getItem("userId"),
        accountId: accountInfo._id,
      });

      console.log(res.data);
      if (res.data) {
        window.location.reload();
      }
      setShowAreYouSure(false);
      setSidebarOpen(false);
    } catch (error) {
      alert(error);
    }
  };

  const unsaveAccount = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/user/unsave", {
        userId: localStorage.getItem("userId"),
        accountId: accountInfo._id,
      });

      console.log(res.data);
      if (res.data) {
        window.location.reload();
      }
      setShowAreYouSure(false);
      setSidebarOpen(false);
    } catch (error) {
      alert(error);
    }
  };

  console.log(`${IMAGE_URL}${accountInfo.video}`);

  const openConversation = async () => {
    if (!user._id) return;
    if (!accountInfo.author) return;

    try {
      const res = await axios.get(
        `http://localhost:5000/api/conversation/${user._id}/${accountInfo.author}`
      );

      console.log(res.data, "conversation single data");

      if (res.data) {
        window.location.replace("/messages?conversationId=" + res.data._id);
      } else {
        const response = await axios.post(
          "http://localhost:5000/api/conversation",
          {
            members: [user._id, accountInfo.author],
          }
        );

        console.log(response.data);
      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />

      {showAreYouSure && (
        <AreYouSure
          onConfirm={() => {
            setShowAreYouSure(false);
            setSidebarOpen(false);
          }}
          onCancel={() => setShowAreYouSure(false)}
          message="Siz sotib olishni xohlaysizmi?"
        />
      )}

      {sidebarOpen && (
        <SidebarDrawer
          sidebarBackgroundColor="bg-[#1e1f28] text-white"
          openAnimation={true}
          closeAnimation={false}
          sidebarName="Sotib olish"
          setSidebarOpen={setSidebarOpen}
          sidebarWidth="w-[400px]"
          sidebarSide="left-0"
        >
          <div className="flex flex-col justify-between h-[95%]">
            <div className="flex items-center gap-5 mb-5 bg-[#13a13a] text-white p-5 rounded-[10px]">
              <img
                className="w-[50px] h-[50px] object-cover rounded-full cursor-pointer"
                src={UserAvatar}
                alt=""
              />
              <span>
                Sizning hisobingiz: <b>400.000so'm</b>
              </span>
            </div>

            <div className="mt-3 w-full flex flex-col gap-2">
              <h1 className="w-full mt-5 text-2xl font-bold">
                Akkunt ma'lumotlari
              </h1>
              <img
                src={AccountImage}
                className="rounded-lg cursor-pointer"
                alt="account image"
              />
              <p>
                <span>
                  Akkunt raqami: <b>123456789</b>
                </span>
              </p>
              <p>
                <span>
                  Akkunt platformasi: <b>Pubg mobile</b>
                </span>
              </p>
              <p>
                <span>
                  Akkount narxi: <b>200.000so'm</b>
                </span>
              </p>
            </div>

            <button
              onClick={() => setShowAreYouSure(true)}
              className="w-full cursor-pointer bg-[#13a13a] text-white p-3 rounded-[10px] font-bold hover:bg-[#0f8f0f] transition-all duration-300 ease-in-out"
            >
              Sotib olish
            </button>
          </div>
        </SidebarDrawer>
      )}
      <div className="flex items-center justify-center bg-[#141414] text-white">
        <div className="w-[1200px] mt-10">
          <div className="flex gap-10">
            <div className="w-[45%] h-[300px]">
              <ReactPlayer
                src={`${IMAGE_URL}${accountInfo.video}`}
                style={{
                  objectFit: "contain",
                }}
                width={"100%"}
                height={"100%"}
                controls
              />
            </div>
            <div className="w-[53%] max-h-[300px] flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer">
                  <img
                    src={
                      authorAccount.googleId ? authorAccount.image : UserAvatar
                    }
                    className="w-[50px] h-[50px] rounded-full object-cover cursor-pointer"
                    alt=""
                  />
                  <span className="font-bold lowercase hover:underline">
                    {authorAccount.name}
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  {user.savedAccounts &&
                  user.savedAccounts.includes(accountInfo._id) ? (
                    <GrFavorite
                      size={25}
                      className="cursor-pointer text-red-500"
                      onClick={() => unsaveAccount()}
                    />
                  ) : (
                    <GrFavorite
                      size={25}
                      className="cursor-pointer"
                      onClick={saveAccount}
                    />
                  )}
                  <BiMessage
                    size={25}
                    className="cursor-pointer"
                    onClick={openConversation}
                  />
                </div>
              </div>
              <p className="mt-3 w-[600px] line-clamp-4">{accountInfo.name}</p>
              <div className="flex items-center gap-2 mt-5">
                <span
                  onClick={() => {
                    setSidebarOpen(true);
                  }}
                  className="p-2 border bg-green-500 font-bold px-5 cursor-pointer text-white rounded-[10px]"
                >
                  {currencyFormatter(accountInfo.price)}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 mt-5">
                {accountInfo.region}
                <BiLocationPlus size={20} />
              </div>
            </div>
          </div>

          <div
            className="mt-10 p-5 bg-[#27282D] text-white"
            dangerouslySetInnerHTML={{ __html: accountInfo.description }}
          />

          <h1 className="text-3xl font-bold mt-10 mb-10 min-h-[50vh]">
            {authorAccount.name}ning boshqa sotuv akkountlari{" "}
            {Array.isArray(authorAccount.accounts) &&
              authorAccount.accounts.length === 0 &&
              "Topilmadi"}
          </h1>

          {Array.isArray(authorAccount.accounts) &&
            authorAccount.accounts.length > 0 && (
              <div className="max-w-full relative flex py-10 overflow-x-hidden">
                <FaArrowLeft
                  size={25}
                  className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer"
                />
                <div className="flex items-center gap-5 mt-10">
                  <div className="w-[500px] relative border h-[400px]">
                    <img
                      className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out"
                      src="https://www.g2g.com/img/affiliate-home.webp"
                      alt=""
                    />
                    <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-black text-white py-3">
                      narxi: 100$
                    </p>
                  </div>
                </div>
                <FaArrowRight
                  size={25}
                  className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
                />
              </div>
            )}
        </div>
      </div>
      <Footer />
    </>
  );
}

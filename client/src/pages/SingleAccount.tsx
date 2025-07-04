import { FaArrowLeft, FaArrowRight, FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { GrFavorite, GrLike } from "react-icons/gr";
import Footer from "../components/Footer";
import { BiMessage } from "react-icons/bi";
import SidebarDrawer from "@/components/SidebarDrawer";
import { useState } from "react";
import AccountImage from "@/assets/background.jpeg";
import UserAvatar from "@/assets/profile-avatar.svg";
import AreYouSure from "@/components/AreYouSure";


export default function SingleAccount() {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [showAreYouSure, setShowAreYouSure] = useState<boolean>(false);
    return (
        <>
            <Navbar />

            {
                showAreYouSure && (
                    <AreYouSure
                        onConfirm={() => {
                            setShowAreYouSure(false);
                            setSidebarOpen(false);
                        }}
                        onCancel={() => setShowAreYouSure(false)}
                        message="Siz sotib olishni xohlaysizmi?"
                    />
                )
            }

            {
                sidebarOpen && (
                    <SidebarDrawer
                        sidebarBackgroundColor="bg-[#1e1f28] text-white"
                        openAnimation={true} closeAnimation={false} sidebarName="Sotib olish" setSidebarOpen={setSidebarOpen} sidebarWidth="w-[400px]" sidebarSide="left-0">
                        <div className="flex flex-col justify-between h-[95%]">
                            <div className="flex items-center gap-5 mb-5 bg-[#13a13a] text-white p-5 rounded-[10px]">
                                <img className="w-[50px] h-[50px] object-cover rounded-full cursor-pointer" src={UserAvatar} alt="" />
                                <span>Sizning hisobingiz: <b>400.000so'm</b></span>
                            </div>


                            <div className="mt-3 w-full flex flex-col gap-2">
                                <h1 className="w-full mt-5 text-2xl font-bold">Akkunt ma'lumotlari</h1>
                                <img src={AccountImage} className="rounded-lg cursor-pointer" alt="account image" />
                                <p>
                                    <span>Akkunt raqami: <b>123456789</b></span>
                                </p>
                                <p>
                                    <span>Akkunt platformasi: <b>Pubg mobile</b></span>
                                </p>
                                <p>
                                    <span>Akkount narxi: <b>200.000so'm</b></span>
                                </p>
                            </div>

                            <button onClick={() => setShowAreYouSure(true)} className="w-full cursor-pointer bg-[#13a13a] text-white p-3 rounded-[10px] font-bold hover:bg-[#0f8f0f] transition-all duration-300 ease-in-out">
                                Sotib olish
                            </button>
                        </div>
                    </SidebarDrawer>
                )
            }
            <div className="flex items-center justify-center bg-[#141414] text-white">
                <div className="w-[1200px] mt-10">
                    <div className="flex gap-10">
                        <div className="w-[45%] h-[300px]">
                            <video className="w-full h-full object-cover" controls>
                                <source src="../assets/videos/randomvideo.mp4" />
                            </video>
                        </div>
                        <div className="w-[53%] max-h-[300px] flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" className="w-[50px] h-[50px] rounded-full object-cover cursor-pointer" alt="" />
                                    <span className="font-bold lowercase hover:underline">Seller username</span>
                                </div>
                                <div className="flex items-center gap-5">
                                    <GrFavorite size={25} className="cursor-pointer" />
                                    <BiMessage size={25} className="cursor-pointer" />
                                </div>
                            </div>
                            <p className="mt-3 w-[600px] line-clamp-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore ipsum dicta ad maxime nihil est sint. Ab laborum laboriosam ea nemo dolorem recusandae repellendus ducimus commodi, nesciunt labore explicabo.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta eos asperiores quidem enim totam qui officiis voluptatum magni aut explicabo, culpa accusamus facilis ullam ut minima voluptas, alias maiores!
                            </p>
                            <div className="flex items-center gap-2 mt-5">
                                <span onClick={() => {
                                    setSidebarOpen(true);
                                }} className="p-2 border bg-green-500 font-bold px-5 cursor-pointer text-white rounded-[10px]">100$</span>
                            </div>
                            <div className="flex items-center gap-5 mt-5">
                                <FaInstagram className="cursor-pointer" size={25} />
                                <FaFacebook className="cursor-pointer" size={25} />
                                <FaDiscord className="cursor-pointer" size={25} />
                                <FaTwitter className="cursor-pointer" size={25} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 p-5 bg-[#27282D] text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, explicabo suscipit culpa animi quisquam non aut quos eaque harum adipisci, possimus neque consequatur illo autem ullam repellat vero. Necessitatibus!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nemo modi eius? Labore tempora ea reprehenderit? Dicta aperiam voluptatem eligendi? Adipisci quas exercitationem impedit. Unde ratione numquam voluptas quod delectus?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolor mollitia sapiente corrupti, dignissimos ullam. Blanditiis vero consectetur officiis quae assumenda accusamus corrupti molestias at, ullam ad id aperiam! Reiciendis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod autem molestias voluptate libero sit modi non perferendis laudantium neque ipsum facilis veniam velit quasi doloremque alias nihil, quaerat Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed expedita corrupti odit doloribus delectus unde praesentium, reprehenderit ipsa quibusdam velit recusandae quo sunt hic magnam iste perspiciatis? Eligendi, laboreminima!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quam mollitia soluta illo aperiam aliquid saepe quas nisi ex eius dolorem ratione placeat tempore, enim doloribus, veniam fuga sit. Reiciendis?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, nisi. Provident tempora, quibusdam ab illum incidunt deleniti laboriosam quia blanditiis vel dolores eum nisi reprehenderit cumque fuga quae optio magni.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus explicabo iste neque error distinctio architecto sapiente ut magnam reprehenderit. Incidunt distinctio temporibus aperiam voluptates consectetur autem, aliquam minus impedit aliquid.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nesciunt quaerat impedit expedita porro facere accusamus, sed quasi quae similique deleniti architecto amet? Vel modi earum deleniti dignissimos aspernatur ratione!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dicta veritatis tempore sit illum, modi repudiandae ad quidem adipisci ipsam quod id, nobis, libero dolores corrupti magni. Aperiam, consectetur voluptates.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum accusamus exercitationem inventore, alias, quaerat quo ea id, eveniet provident expedita iste quisquam animi eligendi magni obcaecati dolore assumenda dolor!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, iste itaque dicta nemo sapiente quisquam id mollitia consequuntur maxime sunt fuga quis obcaecati aliquam in incidunt dolore hic, ad amet.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae pariatur cupiditate, voluptatem, id quibusdam magnam ad obcaecati tempora accusantium et impedit assumenda quisquam veritatis nobis error optio laboriosam tempore?
                    </div>

                    <h1 className="text-3xl font-bold mt-10">Seller usernamening boshqa hisoblari</h1>
                    <div className="max-w-full relative flex py-10 overflow-x-hidden">
                        <FaArrowLeft size={25} className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer" />
                        <div className="flex items-center gap-5 mt-10">
                            <div className="w-[285px] relative border h-[400px]">
                                <img className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                                <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-black text-white py-3">narxi: 100$</p>
                            </div>
                            <div className="w-[285px] relative border h-[400px]">
                                <img className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                                <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-black text-white py-3">narxi: 100$</p>
                            </div>
                            <div className="w-[285px] relative border h-[400px]">
                                <img className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                                <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-black text-white py-3">narxi: 100$</p>
                            </div>
                            <div className="w-[285px] relative border h-[400px]">
                                <img className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                                <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-black text-white py-3">narxi: 100$</p>
                            </div>

                            <div className="w-[500px] relative border h-[400px]">
                                <img className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                                <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-black text-white py-3">narxi: 100$</p>
                            </div>
                            <div className="w-[500px] relative border h-[400px]">
                                <img className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                                <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-black text-white py-3">narxi: 100$</p>
                            </div>
                            <div className="w-[500px] relative border h-[400px]">
                                <img className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                                <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-black text-white py-3">narxi: 100$</p>
                            </div>
                            <div className="w-[500px] relative border h-[400px]">
                                <img className="w-full h-full object-contain cursor-pointer hover:blur-[5px] transition-all duration-300 ease-in-out" src="https://www.g2g.com/img/affiliate-home.webp" alt="" />
                                <p className="absolute bottom-0 left-0 right-0 text-center w-full bg-black text-white py-3">narxi: 100$</p>
                            </div>
                        </div>
                        <FaArrowRight size={25} className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
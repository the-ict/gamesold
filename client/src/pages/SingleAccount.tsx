import { FaArrowLeft, FaArrowRight, FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { GrFavorite, GrLike } from "react-icons/gr";
import Footer from "../components/Footer";

export default function SingleAccount() {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center">
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
                                    <GrLike size={25} className="cursor-pointer" />
                                </div>
                            </div>
                            <p className="mt-3 w-[600px] line-clamp-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore ipsum dicta ad maxime nihil est sint. Ab laborum laboriosam ea nemo dolorem recusandae repellendus ducimus commodi, nesciunt labore explicabo.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta eos asperiores quidem enim totam qui officiis voluptatum magni aut explicabo, culpa accusamus facilis ullam ut minima voluptas, alias maiores!
                            </p>
                            <div className="flex items-center gap-2 mt-5">
                                <span className="p-2 border bg-green-500 font-bold px-5 cursor-pointer text-white rounded-[10px]">100$</span>
                            </div>
                            <div className="flex items-center gap-5 mt-5">
                                <FaInstagram className="cursor-pointer" size={25} />
                                <FaFacebook className="cursor-pointer" size={25} />
                                <FaDiscord className="cursor-pointer" size={25} />
                                <FaTwitter className="cursor-pointer" size={25} />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold mt-10">Seller usernamening boshqa hisoblari</h1>
                    <div className="max-w-full relative flex overflow-x-hidden">
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
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaMoon,
    FaTwitter,
} from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex items-center py-5 mt-10 justify-center">
            <div className="w-[1200px]">
                <span>
                    G2G is a comprehensive online marketplace for all things
                    gaming-related. We are dedicated to innovating for the gaming
                    community’s benefit.{" "}
                </span>
                <div className="flex items-center justify-between mt-3">
                    <ul className="flex items-center gap-5">
                        <li className="cursor-pointer">@ 2025 g2g.com</li>
                        <li className="cursor-pointer">About Us</li>
                        <li className="cursor-pointer">Terms of Service</li>
                        <li className="cursor-pointer">Legal</li>
                        <li className="cursor-pointer">Privacy Policy</li>
                        <li className="cursor-pointer">Help Center</li>
                        <li>
                            <FaMoon />
                        </li>
                    </ul>
                    <div className="flex items-center gap-5">
                        <FaInstagram className="cursor-pointer" size={25}/>
                        <FaFacebook className="cursor-pointer" size={25}/>
                        <FaLinkedin className="cursor-pointer" size={25}/>
                        <FaTwitter className="cursor-pointer" size={25}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

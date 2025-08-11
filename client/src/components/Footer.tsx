import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaDiscord, FaYoutube } from "react-icons/fa";

export default function MegaFooter() {
    return (
        <footer className="w-full h-max bg-[#1A1A1A] text-gray-300 flex flex-col">
            {/* Top section */}
            <div className="flex-1 w-full max-w-[1400px] mx-auto py-12 px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                
                {/* Logo & About */}
                <div className="col-span-2">
                    <h1 className="text-2xl font-bold text-white">GameSold</h1>
                    <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                        GameSold is your trusted gaming marketplace to buy & sell accounts for PUBG, CS2, Valorant, and more.
                        We connect gamers globally with safe transactions and verified sellers.
                    </p>
                    <div className="flex gap-4 mt-5">
                        <FaInstagram size={25} className="cursor-pointer hover:text-pink-500 transition" />
                        <FaFacebook size={25} className="cursor-pointer hover:text-blue-500 transition" />
                        <FaLinkedin size={25} className="cursor-pointer hover:text-blue-400 transition" />
                        <FaTwitter size={25} className="cursor-pointer hover:text-sky-400 transition" />
                        <FaDiscord size={25} className="cursor-pointer hover:text-indigo-400 transition" />
                        <FaYoutube size={25} className="cursor-pointer hover:text-red-500 transition" />
                    </div>
                </div>

                {/* Game Categories */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Game Categories</h2>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">PUBG Accounts</li>
                        <li className="hover:text-white cursor-pointer">CS2 Accounts</li>
                        <li className="hover:text-white cursor-pointer">Valorant Accounts</li>
                        <li className="hover:text-white cursor-pointer">Fortnite Accounts</li>
                        <li className="hover:text-white cursor-pointer">Mobile Legends</li>
                        <li className="hover:text-white cursor-pointer">Call of Duty</li>
                    </ul>
                </div>

                {/* Account Section */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Account</h2>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Sign In</li>
                        <li className="hover:text-white cursor-pointer">Register</li>
                        <li className="hover:text-white cursor-pointer">My Orders</li>
                        <li className="hover:text-white cursor-pointer">Wishlist</li>
                        <li className="hover:text-white cursor-pointer">Seller Dashboard</li>
                    </ul>
                </div>

                {/* Support Section */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Support</h2>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Help Center</li>
                        <li className="hover:text-white cursor-pointer">Buyer Protection</li>
                        <li className="hover:text-white cursor-pointer">Seller Guide</li>
                        <li className="hover:text-white cursor-pointer">Report an Issue</li>
                        <li className="hover:text-white cursor-pointer">Contact Us</li>
                    </ul>
                </div>

                {/* Company Section */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Company</h2>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">About Us</li>
                        <li className="hover:text-white cursor-pointer">Careers</li>
                        <li className="hover:text-white cursor-pointer">Terms of Service</li>
                        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-white cursor-pointer">Legal</li>
                    </ul>
                </div>
            </div>

            {/* Bottom section */}
            <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} GameSold — All Rights Reserved.
            </div>
        </footer>
    );
}

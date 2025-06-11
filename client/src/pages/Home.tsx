import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TopSellers from "../components/TopSellers";
import Trending from "../components/Trending";

export default function Home () {
    return (
        <div>
            <Navbar />
            <Hero />
            <Trending />
            <TopSellers />
            <Footer />
        </div>
    )
}
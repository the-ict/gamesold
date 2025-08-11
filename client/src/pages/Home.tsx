import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trending from "../components/Trending";

export default function Home () {
    return (
        <div>
            <Navbar />
            <Hero />
            <Trending />
            <Footer />
        </div>
    )
}
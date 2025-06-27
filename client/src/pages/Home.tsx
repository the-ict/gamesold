import { useEffect } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trending from "../components/Trending";
import axios from "axios";

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
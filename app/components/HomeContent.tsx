"use client"
import IntroOverlay from "./IntroOverlay";
import { geistSans } from "../layout";
import Hero from "./hero";
import Marquee from "./marquee";
import Products from "./products";
import Footer from "./footer";

export default function HomeContent() {

    const silhouette = "SILHOUETTE.";
    return (
        <main className={`w-full flex flex-col ${geistSans.className}`}>

            <IntroOverlay />
            <Hero />
            <Marquee />
            <Products />
            <Footer />
        </main>
    );
}

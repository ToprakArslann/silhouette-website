"use client";
import { MenuIcon, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="absolute top-0 left-0 z-50 flex w-full h-10 items-center justify-between">
            <div className="w-full flex flex-row items-center justify-end h-full ">
                <div className="bg-white rounded-bl-xl h-full flex flex-row items-center justify-between gap-2 px-2 relative after:absolute after:left-0 after:-translate-x-10 after:bg-transparent after:top-0 after:rounded-tr-2xl after:shadow-[10px_-10px_0_#fff] after:w-10 after:h-10">
                    <div className={`flex flex-row items-center justify-center h-full overflow-hidden ${isMenuOpen ? "w-44 md:w-56" : "w-0"} transition-all duration-500`}>
                        <div className="w-full h-full flex flex-row items-center justify-center gap-2 text-sm md:text-xl">
                            <a className="hover:underline" href="/">Shop</a>
                            <a className="hover:underline" href="/">Concept</a>
                            <a className="hover:underline" href="/">Archive</a>
                        </div>
                    </div>
                    <button className={`hover:cursor-pointer ${isMenuOpen ? "-rotate-90" : "rotate-0"} transition-all duration-600`} onClick={() => setIsMenuOpen(!isMenuOpen)}><MenuIcon size={24} /></button>
                </div>
            </div>
            <div className="text-xl md:text-2xl font-semibold tracking-tighter bg-white h-full flex items-center"><a href="/">SILHOUETTE.</a></div>
            <div className="w-full h-full flex flex-row items-center">
                <div className="bg-white rounded-br-xl h-full flex flex-row items-center justify-between gap-2 pr-4 pl-2 relative after:absolute after:right-0 after:translate-x-10 after:bg-transparent after:top-0 after:rounded-tl-2xl after:shadow-[-10px_-10px_0_#fff] after:w-10 after:h-10"><ShoppingBag className="hover:cursor-pointer" size={24} /></div>
            </div>
        </nav>
    );
}
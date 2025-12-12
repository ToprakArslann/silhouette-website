"use client"
import UnicornScene from "unicornstudio-react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import IntroOverlay from "./IntroOverlay";
import Navbar from "./navbar";
import { geistSans } from "../layout";
import Image from "next/image";

export default function HomeContent() {

    const silhouette = "SILHOUETTE.";
    return (
        <main className={`w-full flex flex-col ${geistSans.className}`}>

            <IntroOverlay />
            <div className="flex w-full h-screen justify-center items-center p-5">
                <div className="flex items-center justify-center w-full h-full rounded-3xl overflow-hidden relative">
                    <div className="w-full h-full flex items-center justify-center absolute inset-0 -z-1">
                        <UnicornScene projectId="G91ILgsyakXxfXyCuWKl" width="100%" height="100%" fps={120} />
                    </div>
                    <div className="w-full h-full flex flex-col justify-end p-6 md:p-20 gap-2">
                        <Navbar />
                        <h2 className="text-5xl sm:text-7xl md:text-9xl font-bold uppercase tracking-tight">
                            AMPLIFY <br />
                            THE <br />
                            NOISE.
                        </h2>
                        <p className="text-lg md:text-2xl tracking-tight">Designed for the digital age. Worn in reality.</p>
                        <button className="flex w-fit items-center flex-row gap-2 p-1  text-lg md:text-xl font-medium tracking-tight bg-white ring ring-gray-300 rounded-lg group hover:cursor-pointer">
                            <p className="px-2">View Collection</p>
                            <div className="w-12 h-12 bg-[#0081F7] rounded-md flex items-center justify-center group-hover:bg-[#0070d8] transition-colors">
                                <ArrowUpRight size={24} color="white" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-12 bg-[#0081F7] flex flex-row items-center overflow-hidden space-y-0 gap-2">
                <p className="loopscroll text-2xl whitespace-nowrap">NEW DROP /// SYSTEM UPDATE v2.0 /// AVAILABLE NOW /// SILHOUETTE ///</p>
                <p className="loopscroll text-2xl whitespace-nowrap">NEW DROP /// SYSTEM UPDATE v2.0 /// AVAILABLE NOW /// SILHOUETTE ///</p>
                <p className="loopscroll text-2xl whitespace-nowrap">NEW DROP /// SYSTEM UPDATE v2.0 /// AVAILABLE NOW /// SILHOUETTE ///</p>
                <p className="loopscroll text-2xl whitespace-nowrap">NEW DROP /// SYSTEM UPDATE v2.0 /// AVAILABLE NOW /// SILHOUETTE ///</p>
            </div>
            <div className="w-full flex flex-col px-2 py-5 gap-5">
                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight uppercase">Latest Arrivals</h2>
                    <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                        <div className="flex flex-row gap-2 items-center font-medium text-gray-500 text-xs md:text-base">
                            <div className="w-4 h-4 rounded-full bg-emerald-500 relative">
                                <div className="w-full h-full rounded-full animate-ping bg-emerald-500 absolute inset-0"></div>
                            </div>
                            <p>DATABASE_UPDATED: TODAY</p>
                        </div>
                        <div className="flex flex-row items-center gap-2 text-xs md:text-base">
                            <a href="" className="hover:underline font-medium tracking-tight">[ VIEW_ALL ]</a>
                            <div className="w-15 h-[2px] bg-gray-500 rounded-full"></div>
                            <div className="text-[#0081F7] font-medium tracking-tight">
                                <p>[ 06 ITEMS ]</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center justify-center max-w-[2000px] gap-2">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 hover:cursor-pointer">
                        <div className="w-full h-[400px] 2xl:h-[600px] flex items-center justify-center overflow-hidden relative">
                            <Image src="/stock1.png" alt="stock1" fill objectFit="cover" />
                        </div>
                        <div className="w-full flex items-center justify-center flex-col">
                            <h2 className="font-medium tracking-tight text-lg">[ SIL-TEE-001-SND ]</h2>
                            <p className="font-medium tracking-tight text-lg">$60</p>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 hover:cursor-pointer">
                        <div className="w-full h-[400px] 2xl:h-[600px] flex items-center justify-center overflow-hidden relative">
                            <Image src="/stock2.png" alt="stock2" fill objectFit="cover" />
                        </div>
                        <div className="w-full flex items-center justify-center flex-col">
                            <h2 className="font-medium tracking-tight text-lg">[ SIL-OUT-002-OLV ]</h2>
                            <p className="font-medium tracking-tight text-lg">$80</p>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 hover:cursor-pointer">
                        <div className="w-full h-[400px] 2xl:h-[600px] flex items-center justify-center overflow-hidden relative">
                            <Image src="/stock3.png" alt="stock3" fill objectFit="cover" />
                        </div>
                        <div className="w-full flex items-center justify-center flex-col">
                            <h2 className="font-medium tracking-tight text-lg">[ SIL-FTR-003-BNE ]</h2>
                            <p className="font-medium tracking-tight text-lg">$120</p>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 hover:cursor-pointer">
                        <div className="w-full h-[400px] 2xl:h-[600px] flex items-center justify-center overflow-hidden relative">
                            <Image src="/stock4.png" alt="stock4" fill objectFit="cover" />
                        </div>
                        <div className="w-full flex items-center justify-center flex-col">
                            <h2 className="font-medium tracking-tight text-lg">[ SIL-TOP-004-ANT ]</h2>
                            <p className="font-medium tracking-tight text-lg">$80</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="pt-50 w-full flex flex-row items-center justify-center text-[15vw]/20 md:text-[15vw]/60">
                <p className="">{silhouette.split("").map((char, index) => <span key={index}>{char}</span>)}</p>
            </div>
            <div className="w-full px-6 py-10 md:px-40 md:py-20 flex flex-col gap-2 bg-[#0081F7]">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">Join the Silence.</h2>
                    <p className="text-sm md:text-lg font-medium tracking-tight">Subscribe for classified drops, secret sales, and <br className="hidden md:block" /> raw data transmission. No spam, only signals.</p>
                </div>
                <div className="flex flex-col sm:flex-row h-auto sm:h-12 gap-2 sm:gap-0">
                    <div className="w-full sm:w-96 h-12 bg-white flex items-center justify-center pl-2 border border-gray-400">
                        <ChevronRight size={24} />
                        <input type="text" placeholder="Enter your email" className="w-full h-full bg-white outline-none" />
                    </div>
                    <div className="h-12 bg-black text-white flex items-center justify-center px-4 text-lg font-medium uppercase tracking-tight hover:cursor-pointer">Subscribe</div>
                </div>
                <p className="text-sm font-medium tracking-tight">BY SUBSCRIBING YOU AGREE TO OUR TERM OF SERVICE.</p>
            </div>
            <div className="p-2 flex flex-col">
                <h2 className="text-xl font-bold tracking-tight uppercase">Silhouette.</h2>
                <div className="pt-10 flex flex-col text-sm font-medium tracking-tight">
                    <p>EST. 2025</p>
                    <p>TURKIYE / WORLDWIDE</p>
                    <p>SILHOUETTE_CORP ©</p>
                </div>
            </div>
        </main>
    );
}

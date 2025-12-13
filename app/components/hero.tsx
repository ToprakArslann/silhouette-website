import UnicornScene from "unicornstudio-react";
import Navbar from "./navbar";
import { easeIn, easeInOut, easeOut, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <div className="flex w-full h-screen justify-center items-center p-5">
            <div className="flex items-center justify-center w-full h-full rounded-3xl overflow-hidden relative">
                <div className="w-full h-full flex items-center justify-center absolute inset-0 -z-1">
                    <UnicornScene projectId="G91ILgsyakXxfXyCuWKl" width="100%" height="100%" fps={120} />
                </div>
                <div className="w-full h-full flex flex-col justify-end p-6 md:p-20 gap-2">
                    <Navbar />
                    <h2 className="text-5xl sm:text-7xl md:text-9xl font-bold uppercase tracking-tight">
                        <span className="overflow-hidden block">
                            <motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: easeInOut, delay: 0.5 }}>AMPLIFY</motion.span>
                        </span>
                        <span className="overflow-hidden block">
                            <motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: easeInOut, delay: 0.8 }}>THE</motion.span>
                        </span>
                        <span className="overflow-hidden block">
                            <motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: easeInOut, delay: 1.1 }}>NOISE.</motion.span>
                        </span>
                    </h2>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: easeInOut, delay: 1.4 }} className="text-lg md:text-2xl tracking-tight">Designed for the digital age. Worn in reality.</motion.p>
                    <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: easeInOut, delay: 1.7 }} className="flex w-fit items-center flex-row gap-2 p-1  text-lg md:text-xl font-medium tracking-tight bg-white ring ring-gray-300 rounded-lg group hover:cursor-pointer">
                        <p className="px-2">View Collection</p>
                        <div className="w-12 h-12 bg-[#0081F7] rounded-md flex items-center justify-center group-hover:bg-[#0070d8] transition-colors">
                            <ArrowUpRight size={24} color="white" />
                        </div>
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
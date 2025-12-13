import { ChevronRight } from "lucide-react";
import { useScroll, useTransform, motion } from "motion/react";

export default function Footer() {
    const silhouette = "SILHOUETTE";
    const { scrollYProgress } = useScroll();

    const y7 = useTransform(scrollYProgress, [0.6, 1], [0, -30]);
    const y8 = useTransform(scrollYProgress, [0.6, 1], [0, -60]);
    const y9 = useTransform(scrollYProgress, [0.6, 1], [0, -90]);

    return (
        <footer>
            <div className="pt-50 w-full flex flex-row items-center justify-center text-[15vw]/20 md:text-[15vw]/60">
                <p className="">
                    {silhouette.split("").map((char, index) => {
                        let yValue;
                        if (index === 7) yValue = y7;
                        if (index === 8) yValue = y8;
                        if (index === 9) yValue = y9;

                        return (
                            <motion.span key={index} style={{ y: yValue }} className="inline-block">
                                {char}
                            </motion.span>
                        );
                    })}
                </p>
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
        </footer>
    );
}
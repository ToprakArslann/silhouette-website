import Image from "next/image";
import { easeInOut, motion } from "motion/react";
export default function Products() {
    return (
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
                <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: easeInOut }} viewport={{ once: true, amount: 0.1 }} className="w-full h-full flex flex-col items-center justify-center gap-2 hover:cursor-pointer">
                    <div className="w-full h-[400px] 2xl:h-[600px] flex items-center justify-center overflow-hidden relative">
                        <Image src="/stock1.png" alt="stock1" fill className="object-cover" />
                    </div>
                    <div className="w-full flex items-center justify-center flex-col">
                        <h2 className="font-medium tracking-tight text-lg">[ SIL-TEE-001-SND ]</h2>
                        <p className="font-medium tracking-tight text-lg">$60</p>
                    </div>
                </motion.div>
                <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: easeInOut, delay: 0.1 }} viewport={{ once: true, amount: 0.1 }} className="w-full h-full flex flex-col items-center justify-center gap-2 hover:cursor-pointer">
                    <div className="w-full h-[400px] 2xl:h-[600px] flex items-center justify-center overflow-hidden relative">
                        <Image src="/stock2.png" alt="stock2" fill className="object-cover" />
                    </div>
                    <div className="w-full flex items-center justify-center flex-col">
                        <h2 className="font-medium tracking-tight text-lg">[ SIL-OUT-002-OLV ]</h2>
                        <p className="font-medium tracking-tight text-lg">$80</p>
                    </div>
                </motion.div>
                <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: easeInOut, delay: 0.2 }} viewport={{ once: true, amount: 0.1 }} className="w-full h-full flex flex-col items-center justify-center gap-2 hover:cursor-pointer">
                    <div className="w-full h-[400px] 2xl:h-[600px] flex items-center justify-center overflow-hidden relative">
                        <Image src="/stock3.png" alt="stock3" fill className="object-cover" />
                    </div>
                    <div className="w-full flex items-center justify-center flex-col">
                        <h2 className="font-medium tracking-tight text-lg">[ SIL-FTR-003-BNE ]</h2>
                        <p className="font-medium tracking-tight text-lg">$120</p>
                    </div>
                </motion.div>
                <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: easeInOut, delay: 0.3 }} viewport={{ once: true, amount: 0.1 }} className="w-full h-full flex flex-col items-center justify-center gap-2 hover:cursor-pointer">
                    <div className="w-full h-[400px] 2xl:h-[600px] flex items-center justify-center overflow-hidden relative">
                        <Image src="/stock4.png" alt="stock4" fill className="object-cover" />
                    </div>
                    <div className="w-full flex items-center justify-center flex-col">
                        <h2 className="font-medium tracking-tight text-lg">[ SIL-TOP-004-ANT ]</h2>
                        <p className="font-medium tracking-tight text-lg">$80</p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
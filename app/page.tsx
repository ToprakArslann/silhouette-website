"use client"
import UnicornScene from "unicornstudio-react";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <div className="flex w-full h-screen justify-center items-center p-5">
        <div className="flex items-center justify-center w-full h-full rounded-3xl overflow-hidden relative">
          <div className="w-full h-full flex items-center justify-center absolute inset-0 -z-1">
            <UnicornScene projectId="G91ILgsyakXxfXyCuWKl" width="100%" height="100%" fps={120} />
          </div>
          <div className="w-full h-full flex flex-col justify-end p-20 gap-2">
            <h2 className="text-9xl font-bold uppercase tracking-tight">
              AMPLIFY <br />
              THE <br />
              NOISE.
            </h2>
            <p className="text-2xl tracking-tight">Designed for the digital age. Worn in reality.</p>
            <button className="flex w-fit items-center flex-row gap-2 p-1 text-xl font-medium tracking-tight bg-white ring ring-gray-300 rounded-lg group hover:cursor-pointer">
              <p className="px-2">View Collection</p>
              <div className="w-12 h-12 bg-[#0081F7] rounded-md flex items-center justify-center group-hover:bg-[#0070d8] transition-colors">
                <ArrowUpRight size={24} color="white" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </main>
  );
}
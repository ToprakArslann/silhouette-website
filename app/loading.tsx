import { geistSans } from "./layout";

export default function Loading() {
    return (
        <div className={`fixed inset-0 z-9999 flex min-h-screen w-full flex-col items-center justify-center bg-white text-black ${geistSans.className}`}>
            <div className="flex flex-col items-center gap-5 animate-pulse">
                <h1 className="text-2xl font-bold uppercase tracking-tighter md:text-2xl">
                    THE FACELESS ERA BEGINS.
                </h1>
                <p className="font-mono text-sm font-medium tracking-widest text-gray-500">
                    [ LOADING ]
                </p>
            </div>
        </div>
    );
}

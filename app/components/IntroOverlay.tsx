"use client";
import { useEffect, useState } from 'react';

export default function IntroOverlay() {
    const [shouldSlideUp, setShouldSlideUp] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldSlideUp(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed inset-0 z-9999 flex min-h-screen w-full flex-col items-center justify-center bg-white text-black transition-transform duration-1500 ease-[cubic-bezier(0.76,0,0.24,1)] ${shouldSlideUp ? '-translate-y-full' : 'translate-y-0'}`}
        >
            <div className="flex flex-col items-center gap-5">
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

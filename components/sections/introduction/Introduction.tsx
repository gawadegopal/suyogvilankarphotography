"use client";

import { Alice } from "next/font/google";
import { useRouter } from "next/navigation";
import React from "react";

const alice = Alice({
    weight: "400",
    subsets: ["latin"],
});

export default function Introduction() {
    const router = useRouter();

    return (
        <div className="p-6 mx-auto text-center text-md leading-loose flex flex-col items-center justify-center">
            <h1 className={`${alice.className} text-[#800000] text-3xl md:text-4xl text-center p-6 max-w-300 underline underline-offset-4 decoration-[#005F5F]`}>
                Let’s turn your memories into something unforgettable.
            </h1>

            <p className="max-w-300 text-[md]">
                I'm Suyog Vilankar — a civil engineer by degree, but a photographer by
                heart. While my journey began in engineering, it was in 2020 that I
                decided to follow my true passion: capturing real moments, real
                emotions, and real stories through the lens. Since then, I've had the
                honor of photographing countless weddings, pre-wedding sessions, and
                life's most beautiful celebrations. What you see on this page isn't just
                photography — it's trust, emotion, laughter, and love, all frozen in
                time. Couples like you allowed me into their most important days, and I
                carry that responsibility with pride and gratitude. I believe every
                story is unique, and my goal is to tell yours in a way that feels true
                and timeless. From the smallest glance to the biggest smile, I focus on
                capturing the genuine moments that matter most. Weddings aren't just
                events to me — they're stories waiting to be told with heart, honesty,
                and artistry. And through every frame, I aim to preserve not just how it
                looked, but how it felt. If you feel a connection to my work, let's
                connect — and together, we'll create something truly unforgettable.
            </p>

            <button
                className={`${alice.className} cursor-pointer p-2 m-2 bg-[#800000] text-white transition-all duration-150 hover:scale-105`}
                onClick={() => router.push("/contact")}
            >
                GET IN TOUCH
            </button>
        </div>
    );
}

import { Alice } from "next/font/google";
import React from "react";

const alice = Alice({
    weight: "400",
    subsets: ["latin"],
});

export default function Films() {
    return (
        <div className="p-6 min-h-[50vh] mx-auto text-center text-md leading-loose flex flex-col items-center justify-center">
            <h1 className={`${alice.className} text-[#800000] text-3xl md:text-4xl text-center p-6 underline underline-offset-4 decoration-[#005F5F]`}>
                Wedding Films
            </h1>

            <p className="max-w-300 text-center text-md mb-2">
                Along with photography, wedding films have become a key part of my
                services — a natural extension of how I tell love stories. There's
                something truly powerful about capturing the movement, the sounds, the
                laughter, and the quiet, fleeting moments that photos alone can't fully
                convey. I approach each wedding film with the same care, attention to
                detail, and passion that I bring to every frame I shoot. From the first
                glance to the final dance, my goal is to craft a cinematic experience
                that feels personal and timeless. My films are never staged or overly
                produced; they're honest, emotive, and a true reflection of your day as
                it unfolds. With a focus on storytelling, connection, and the little
                in-between moments, I create films that allow you to relive the heart of
                your wedding for years to come.
            </p>
        </div>
    );
}

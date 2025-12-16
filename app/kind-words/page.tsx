import { Alice, PT_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";

const pt_sans = PT_Sans({
    weight: "400",
    subsets: ["latin"],
});

const alice = Alice({
    weight: "400",
    subsets: ["latin"],
});

export default function KindWords() {
    return (
        <div className="p-6 pt-12 mx-auto text-md leading-loose w-full h-full">
            <h1 className={`${alice.className} text-[#800000] text-3xl md:text-4xl text-center p-6 mt-16`}>
                Kind words
            </h1>

            <div className="flex flex-col items-center justify-center md:flex-row max-w-225 mx-auto p-3 border-b border-[#D4AF37]">
                <div className="w-full h-full flex items-center justify-center">
                    <Image
                        src={"/IMG-20250530-WA0060.jpg"}
                        height={300}
                        width={300}
                        alt=""
                        className="h-50 w-50 md:h-70 md:w-90 object-cover"
                    />
                </div>

                <div className="text-md leading-loose p-2 w-full">
                    <h1 className={`${alice.className} text-xl md:text-2xl lg:text-3xl mb-2`}>
                        Sanket & Manali
                    </h1>
                    <p className={pt_sans.className}>
                        We're so grateful to Suyog for beautifully capturing every moment of
                        our wedding, from the pre-wedding shoot to the ceremony. His
                        creativity, professionalism, and attention to detail made us feel
                        comfortable and natural throughout. Our wedding album is a treasured
                        collection of memories, and everyone has praised his storytelling
                        through photos. We couldn't have asked for a better photographer —
                        truly an amazing experience!
                    </p>
                </div>
            </div>

            <div className="flex flex-col-reverse items-center justify-center md:flex-row max-w-225 mx-auto p-3 border-b border-[#D4AF37]">
                <div className="text-md leading-loose p-2 w-full">
                    <h1 className={`${alice.className} text-xl md:text-2xl lg:text-3xl mb-2`}>
                        Neha
                    </h1>
                    <p className={pt_sans.className}>
                        My maternity shoot with Suyog was an incredible experience. He captured this special phase with so much care, warmth, and creativity.
                        His calm nature made me feel completely at ease, and the photos turned out beautifully — natural, emotional, and full of love.
                        I couldn't be happier with the results, and my family adored the pictures too. I'm so glad I chose him.
                        A perfect 10/10!
                    </p>
                </div>

                <div className="w-full h-full flex items-center justify-center">
                    <Image
                        src={"/IMG-20250530-WA0101.jpg"}
                        height={300}
                        width={300}
                        alt=""
                        className="h-50 w-50 md:h-70 md:w-90 object-cover"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center md:flex-row max-w-225 mx-auto p-3">
                <div className="w-full h-full flex items-center justify-center">
                    <Image
                        src={"/carouselimg2.jpg"}
                        height={300}
                        width={300}
                        alt=""
                        className="h-50 w-50 md:h-70 md:w-90 object-cover"
                    />
                </div>

                <div className="text-md leading-loose p-2 w-full">
                    <h1 className={`${alice.className} text-xl md:text-2xl lg:text-3xl mb-2`}>
                        Hrishikesh & Aishwarya
                    </h1>
                    <p className={pt_sans.className}>
                        Our pre-wedding shoot with Suyog was an absolute joy. He made us
                        feel so comfortable, and the whole experience felt effortless and
                        fun. The photos captured our connection perfectly — candid,
                        romantic, and full of emotion. We're in love with every frame! So
                        grateful we chose Suyog. Truly outstanding work!
                    </p>
                </div>
            </div>
        </div>
    );
}

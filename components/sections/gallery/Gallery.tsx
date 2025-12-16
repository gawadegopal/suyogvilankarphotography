import React from "react";
import { Image } from "@imagekit/next";
import "./Gallery.css";
import { Alice } from "next/font/google";

const alice = Alice({
    weight: "400",
    subsets: ["latin"],
});

export default function Gallery() {
    const items = [
        {
            id: 1,
            media: "/general/IMG-20250530-WA0065.jpg",
            width: 1260,
            height: 1000,
        },
        {
            id: 2,
            media: "/general/IMG-20250530-WA0165.jpg",
            width: 1260,
            height: 1400,
        },
        {
            id: 3,
            media: "/general/IMG-20250530-WA0047.jpg",
            width: 1260,
            height: 1400,
        },
        {
            id: 4,
            media: "/general/IMG-20250530-WA0026.jpg",
            width: 1260,
            height: 1000,
        },
        {
            id: 5,
            media: "/general/IMG-20250530-WA0007.jpg",
            width: 1260,
            height: 1243,
        },
        {
            id: 6,
            media: "/general/IMG-20250530-WA0074.jpg",
            width: 1260,
            height: 1400,
        },
        {
            id: 7,
            media: "/general/IMG-20250530-WA0079.jpg",
            width: 1260,
            height: 1234,
        },
        {
            id: 8,
            media: "/general/IMG-20250530-WA0132.jpg",
            width: 1260,
            height: 1400,
        },
        {
            id: 9,
            media: "/general/IMG-20250530-WA0184.jpg",
            width: 1260,
            height: 1000,
        },
        {
            id: 10,
            media: "/general/IMG-20250530-WA0162.jpg",
            width: 1260,
            height: 1400,
        },
        {
            id: 11,
            media: "/general/IMG-20250530-WA0144.jpg",
            width: 1260,
            height: 1400,
        },
        {
            id: 12,
            media: "/general/IMG-20250530-WA0124.jpg",
            width: 1260,
            height: 1400,
        },
        {
            id: 13,
            media: "/general/IMG-20250530-WA0180.jpg",
            width: 1260,
            height: 1400,
        },
        {
            id: 14,
            media: "/general/IMG-20250530-WA0020.jpg",
            width: 1260,
            height: 1000,
        },
        {
            id: 15,
            media: "/general/IMG-20250530-WA0063.jpg",
            width: 1260,
            height: 1000,
        },
    ];

    return (
        <div className="bg-[#F7C6C7] text-[#800000] p-6 mx-auto text-center text-md leading-loose flex flex-col items-center justify-center">
            <h1 className={`${alice.className} text-3xl md:text-4xl text-center p-6 mb:3 md:mb-6 underline underline-offset-4 decoration-[#005F5F]`}>
                Captured moments through my lens.
            </h1>

            <div className="gallery">
                {items.map((items) => {
                    return (
                        <div
                            key={items.id}
                            className="galleryItem"
                            style={{ gridRowEnd: `span ${Math.ceil(items.height / 100)}` }}
                        >
                            <Image
                                urlEndpoint={process.env.IMAGEKIT}
                                src={items.media}
                                alt=""
                                width={500}
                                height={500}
                                loading="lazy"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

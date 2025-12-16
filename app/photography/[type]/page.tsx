import React from "react";
import { Image } from "@imagekit/next";
import "../../../components/sections/gallery/Gallery.css";
import { Alice } from "next/font/google";

const alice = Alice({
    weight: "400",
    subsets: ["latin"],
});

export default async function Photography({
    params,
}: {
    params: Promise<{ type: string }>;
}) {
    const photograph = (await params).type;

    const items = [
        {
            id: 1,
            media: "/general/IMG-20250530-WA0184.jpg",
            width: 1260,
            height: 800,
        },
        {
            id: 2,
            media: "/general/IMG-20250530-WA0020.jpg",
            width: 1260,
            height: 1000,
        },
        {
            id: 3,
            media: "/general/IMG-20250530-WA0183.jpg",
            width: 1260,
            height: 800,
        },
        {
            id: 4,
            media: "/general/IMG-20250530-WA0186.jpg",
            width: 1260,
            height: 1000,
        },
    ];

    const items2 = [
        {
            id: 1,
            media: "/general/IMG-20250530-WA0180.jpg",
            width: 1260,
            height: 800,
        },
        {
            id: 2,
            media: "/general/IMG-20250530-WA0079.jpg",
            width: 1260,
            height: 1000,
        },
        {
            id: 3,
            media: "/general/IMG-20250530-WA0165.jpg",
            width: 1260,
            height: 800,
        },
        {
            id: 4,
            media: "/general/IMG-20250530-WA0172.jpg",
            width: 1260,
            height: 1000,
        },
        {
            id: 5,
            media: "/general/IMG-20250530-WA0116.jpg",
            width: 1260,
            height: 800,
        },
        {
            id: 6,
            media: "/general/IMG-20250530-WA0171.jpg",
            width: 1260,
            height: 1000,
        },
        {
            id: 7,
            media: "/general/IMG-20250530-WA0166.jpg",
            width: 1260,
            height: 600,
        },
        {
            id: 8,
            media: "/general/IMG-20250530-WA0101.jpg",
            width: 1260,
            height: 800,
        },
    ];

    const items3 = [
        {
            id: 1,
            media: "/general/IMG-20250530-WA0026.jpg",
            width: 1260,
            height: 800,
        },
        {
            id: 2,
            media: "/general/IMG-20250530-WA0035.jpg",
            width: 1260,
            height: 1000,
        },
        {
            id: 3,
            media: "/general/IMG-20250530-WA0028.jpg",
            width: 1260,
            height: 800,
        },
        {
            id: 4,
            media: "/general/IMG-20250530-WA0036.jpg",
            width: 1260,
            height: 1000,
        },
    ];

    const items4 = [
        {
            id: 1,
            media: "/general/IMG-20250530-WA0065.jpg",
            width: 1260,
            height: 800,
        },
        {
            id: 2,
            media: "/general/carouselimg1.jpg",
            width: 1260,
            height: 1000,
        },
        {
            id: 3,
            media: "/general/IMG-20250530-WA0063.jpg",
            width: 1260,
            height: 800,
        },
        {
            id: 4,
            media: "/general/IMG-20250530-WA0068.jpg",
            width: 1260,
            height: 1000,
        },
        {
            id: 5,
            media: "/general/IMG-20250530-WA0000.jpg",
            width: 1260,
            height: 800,
        },
        {
            id: 6,
            media: "/general/carouselimg3.jpg",
            width: 1260,
            height: 1000,
        },
        {
            id: 7,
            media: "/general/IMG-20250530-WA0058.jpg",
            width: 1260,
            height: 600,
        },
        {
            id: 8,
            media: "/general/IMG-20250530-WA0066.jpg",
            width: 1260,
            height: 800,
        },
    ];

    const items5 = [
        {
            id: 1,
            media: "/general/IMG-20250530-WA0047.jpg",
            width: 1260,
            height: 800,
        },
        {
            id: 2,
            media: "/general/IMG-20250530-WA0124.jpg",
            width: 1260,
            height: 1000,
        },
        {
            id: 3,
            media: "/carousel/IMG-20250530-WA0050.jpg",
            width: 1260,
            height: 800,
        },
        {
            id: 4,
            media: "/carousel/IMG-20250530-WA0129.jpg",
            width: 1260,
            height: 1000,
        },
    ];

    const items6 = [
        {
            id: 1,
            media: "/carousel/IMG-20250530-WA0148.jpg",
            width: 1260,
            height: 800,
        },
        {
            id: 2,
            media: "/general/IMG-20250530-WA0162.jpg",
            width: 1260,
            height: 1000,
        },
        {
            id: 3,
            media: "/general/IMG-20250530-WA0132.jpg",
            width: 1260,
            height: 800,
        },
        {
            id: 4,
            media: "/general/IMG-20250530-WA0074.jpg",
            width: 1260,
            height: 1000,
        },
        {
            id: 5,
            media: "/carousel/IMG-20250530-WA0001.jpg",
            width: 1260,
            height: 800,
        },
        {
            id: 6,
            media: "/carousel/IMG-20250530-WA0156.jpg",
            width: 1260,
            height: 1000,
        },
        {
            id: 7,
            media: "/general/IMG-20250530-WA0144.jpg",
            width: 1260,
            height: 600,
        },
        {
            id: 8,
            media: "/carousel/IMG-20250530-WA0005.jpg",
            width: 1260,
            height: 800,
        },
    ];

    return (
        <div className="text-[#2B2B2B] max-w-300 p-6 pt-12 mx-auto text-center text-md leading-loose flex flex-col items-center justify-center min-h-screen">
            <h1 className={`${alice.className} text-[#800000] text-2xl md:text-4xl text-center p-6 mb:3 md:mb-6 mt-16`}>
                {photograph.charAt(0).toLocaleUpperCase() + photograph.slice(1) ===
                    "Baby-shower"
                    ? "Baby Shower"
                    : photograph.charAt(0).toLocaleUpperCase() + photograph.slice(1) ===
                        "Baby-birthday"
                        ? "Baby & Birthday"
                        : photograph.charAt(0).toLocaleUpperCase() + photograph.slice(1)}{" "}
                Photography
            </h1>

            <div className="gallery-new">
                {(photograph === "baby-birthday"
                    ? items
                    : photograph === "maternity"
                        ? items2
                        : photograph === "baby-shower"
                            ? items3
                            : photograph === "wedding"
                                ? items4
                                : photograph === "engagement"
                                    ? items5
                                    : items6
                ).map((items) => {
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

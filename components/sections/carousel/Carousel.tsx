"use client";

import "./Carousel.css";
import { Alice } from "next/font/google";
import React, { useEffect, useState } from "react";

const alice = Alice({
    weight: "400",
    subsets: ["latin"],
});

export default function Carousel() {
    const [count, setCount] = useState<number>(0);
    const [intervalId, setIntervalId] = useState<any>(null);

    const items = [
        {
            id: 1,
            image: "/carouselimg1.jpg",
        },
        {
            id: 2,
            image: "/carouselimg2.jpg",
        },
        {
            id: 3,
            image: "/carouselimg3.jpg",
        },
    ];

    useEffect(() => {
        const id = setInterval(() => {
            setCount((count + 1) % items.length);
        }, 5000);

        setIntervalId(id);

        return () => clearInterval(id);
    }, [count, items.length]);

    return (
        <div className={`${alice.className} h-screen w-full relative z-10`}>
            <div className="carousel-wrapper">
                {items.map((v, i) => {
                    return (
                        <div
                            key={v.id}
                            className={count === i ? "carousel-card carousel-card-active" : "carousel-card"}
                        >
                            <img
                                className={v.id === 1 ? "carousel-img-1" : "carousel-img"}
                                src={v.image}
                                alt=""
                            />

                            <div className="absolute w-full bottom-0 flex flex-col items-center justify-end gap-6 p-6 pt-12 text-white bg-linear-to-t from-black from-20% via-black/80 via-40% to-transparent to-90%">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center">
                                    Hi! My name is Suyog,
                                </h1>

                                <h3 className="text-center text-[#F6F3E6] text-lg md:text-xl lg:text-2xl leading-loose">
                                    I specialize in capturing heartfelt weddings across Ratnagiri and Sindhudurg.
                                    <br />
                                    Passionate about preserving the true emotions and authentic stories of your special day.
                                </h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

"use client";

import "./Blog.css";
import React, { useRef, useState } from "react";
import { Alice } from "next/font/google";
import { useRouter } from "next/navigation";
import { Image } from "@imagekit/next";

const alice = Alice({
    weight: "400",
    subsets: ["latin"],
});

type Item = {
    id: number,
    name: string,
    names: string,
    image: string
};

export default function BlogContent({ arr }: {
    arr: Item[]
}) {
    const [count, setCount] = useState<number>(0);
    const [down, setDown] = useState<boolean>(false);
    const [left, setLeft] = useState<number | any>(0);
    const inputRef = useRef<any>(null);
    const router = useRouter();

    const mouseDown = (e: any) => {
        setCount(e.clientX);
        setDown(true);
    };

    const mouseMove = (e: any) => {
        if (!down || !inputRef.current) return;
        e.preventDefault();
        const newval = (e.clientX - count) * 0.115;
        inputRef.current.scrollLeft = left - newval;
    };

    const mouseUp = () => {
        setDown(false);
    };

    const mouseScroll = () => {
        setLeft(inputRef.current.scrollLeft);
    };

    return (
        <div className={`${alice.className} flex flex-col justify-center gap-6 py-6`}>
            <h1 className="text-[#800000] text-3xl md:text-4xl text-center p-6 pt-16 underline underline-offset-4 decoration-[#005F5F]">
                Wedding blogs
            </h1>

            <div
                className="slider-container"
                ref={inputRef}
                onMouseDown={(e) => mouseDown(e)}
                onMouseMove={(e) => mouseMove(e)}
                onScroll={() => mouseScroll()}
                onMouseUp={() => mouseUp()}
            >
                <div className="slider-items-container">
                    {arr.map((v, i) => {
                        return (
                            <div
                                key={i}
                                className="bg-[#D4AF37] cursor-pointer overflow-hidden m-4 p-0 w-70 md:w-[320px] h-80 md:h-90 transform hover:p-2 hover:-translate-y-0.5 transition-all duration-300"
                                onClick={() => router.push(`/blog/${v.id}`)}
                            >
                                <div className="h-full overflow-hidden relative group">
                                    <Image
                                        src={v.image}
                                        width={500}
                                        height={500}
                                        alt=""
                                    />

                                    <div className="absolute hidden text-white top-0 bottom-0 h-full w-full group-hover:flex flex-col group-hover:bg-[#000000]/40 items-center justify-center text-center">
                                        <p className="text-xl">
                                            {v.name} of
                                        </p>

                                        <p className="text-2xl">
                                            {v.names}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

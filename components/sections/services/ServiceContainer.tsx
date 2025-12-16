'use client';

import React from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
    id: number,
    link: string,
    name: string,
    image: string,
}

export default function ServiceContainer({ v, i }: {
    v: Props,
    i: number
}) {
    const router = useRouter();

    return (
        <div
            className="bg-[#D4AF37] cursor-pointer m-2 p-0 w-70 h-70 md:w-90 md:h-90 transform hover:p-2 hover:-translate-y-0.5 transition-all duration-300"
            onClick={() => router.push(v.link)}
        >
            <div className="h-full overflow-hidden relative group">
                <Image
                    src={v.image}
                    height={500}
                    width={500}
                    alt=""
                    className="object-cover h-full hover:scale-105 transition-all duration-300"
                />

                <div className="absolute text-white top-0 bottom-0 h-full w-full flex flex-col bg-[#000000]/40 items-center justify-center text-center">
                    <p className="text-2xl">
                        <span>{v.name}</span>
                        <br />

                        <span>Photo Shoot</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

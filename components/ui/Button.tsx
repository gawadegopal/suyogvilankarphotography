'use client'

import { Alice } from 'next/font/google'
import { useRouter } from "next/navigation"
import React from 'react'

const alice = Alice({
    weight: "400",
    subsets: ["latin"],
});

export default function Button() {
    const router = useRouter();

    return (
        <>
            <button
                className={`${alice.className} cursor-pointer p-2 my-2 bg-[#005F5F] text-white transition-all duration-150 hover:scale-105`}
                onClick={() => router.push("/contact")}
            >
                GET IN TOUCH
            </button>
        </>
    )
}

"use client";

import { Alice } from "next/font/google";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const alice = Alice({
    weight: "400",
    subsets: ["latin"],
});

export default function Faq() {
    const [show, setShow] = useState<string | number>("");

    const items = [
        {
            id: 1,
            ques: "Why should we trust you to bring our visual ideas to life?",
            ans: "I'm Suyog Vilankar, a passionate wedding photographer since 2020, known for capturing authentic emotions, spontaneous moments, and beautiful details with a creative eye and modern techniques—combining artistry and technology to tell your unique love story in the most natural, vibrant, and unforgettable way, while ensuring a seamless, professional experience from shoot to delivery.",
        },
        {
            id: 2,
            ques: "How much do you charge for your photography services?",
            ans: "My photography charges are affordable and designed to offer you the best value for your special moments. To discuss your specific needs and get a personalized quote, feel free to call me directly at 9421143990. As a special offer, every wedding package includes a free wedding album bag and a beautiful photo frame to showcase your favorite memories. I’m committed to providing high-quality photographs that capture the essence of your events without stretching your budget. Let’s work together to create lasting memories at a price that suits you!",
        },
        {
            id: 3,
            ques: "When can I expect to get the final pictures?",
            ans: "I'll share the best photos with you via WhatsApp or email on the night of the shoot or the next day, so you can share your story on social media. The full set of photos will be delivered on a pendrive within 10–12 days. Your wedding album, album bag, and photo frame will be ready within 1 to 1.5 months.",
        },
        {
            id: 4,
            ques: "Are you available for outstation or destination wedding shoots?",
            ans: "I'm based in Ratnagiri and happily available for destination wedding shoots across Ratnagiri and Sindhudurg districts. Whether you're planning a scenic celebration in the hills or a traditional wedding in your hometown, I’d love to be a part of it. I bring not just my camera, but my full dedication to capturing your big day with creativity, emotion, and detail. From intimate pre-wedding moments to grand celebrations, I ensure every memory is beautifully preserved. Let’s turn your wedding location into a stunning storybook of photographs!",
        },
    ];

    return (
        <div className="p-6 pt-12 mx-auto text-md leading-loose w-full min-h-screen">
            <h1 className={`${alice.className} text-[#800000] text-3xl md:text-4xl text-center p-6 mt-16`}>
                Confused? We've Got the Answers!
            </h1>

            {items.map((v) => {
                return (
                    <div key={v.id}>
                        <div
                            className="flex flex-row items-center justify-between p-2 cursor-pointer"
                            onClick={() => setShow(show === v.id ? "" : v.id)}
                        >
                            <p className={`${alice.className} text-xl md:2xl`}>
                                {v.ques}
                            </p>

                            <p className={`${alice.className} text-xl md:2xl`}>
                                {show === v.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </p>
                        </div>

                        <div className={show === v.id ? "grid overflow-hidden transition-all duration-300 opacity-100" : "grid overflow-hidden transition-all duration-300 opacity-0"}>
                            <div className={`${show === v.id ? "block" : "hidden"} p-2`}>
                                <p>{v.ans}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

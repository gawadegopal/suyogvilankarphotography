import { Alice, PT_Sans } from "next/font/google";
import React from "react";
import { Image, ImageKitProvider } from "@imagekit/next";

const pt_sans = PT_Sans({
    weight: "400",
    subsets: ["latin"],
});

const alice = Alice({
    weight: "400",
    subsets: ["latin"],
});

export default async function Blog({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const blog_id = (await params).id;

    const blogs = [
        {
            id: 1,
            names: "Sanket & Manali",
            blog: "From the moment we met Suyog, we knew he was the one we could trust with the most important day of our lives. His calm energy and genuine passion for storytelling instantly put us at ease. On our wedding day, everything moved so quickly — the emotions, the rituals, the chaos — but Suyog was always present, quietly capturing every moment with such grace and attentiveness. He never made us feel like we were 'posing for pictures' — instead, he let the day unfold naturally and caught the real, raw, beautiful parts of it. From the teary-eyed vows to the spontaneous laughter, from our parents' proud smiles to the quiet glances we shared — he caught it all, perfectly. When we received our wedding photos, it felt like we were reliving the day all over again. Every picture had a heartbeat. Our friends and family couldn’t stop praising how beautifully the essence of the wedding was captured — not just the big moments, but the little ones that meant the most. Working with Suyog was one of the best decisions we made. He’s not just a talented photographer — he’s a storyteller, an artist, and someone who truly cares. We’ll forever be grateful for the memories he’s given us.",
            image: "/carousel/IMG-20250530-WA0060.jpg",
        },
        {
            id: 2,
            names: "Viraj & Samiksha",
            blog: "Our pre-wedding shoot with Suyog was nothing short of magical. We were honestly a bit nervous at first — neither of us had been in front of a camera like that before — but Suyog made the entire experience so easy and enjoyable. He has a calm, encouraging presence that helped us relax and just be ourselves. What we loved most was how thoughtfully he planned everything — from helping us choose the perfect locations to guiding us with gentle direction without ever making it feel staged. Every frame captured something real between us — the laughter, the quiet glances, the connection. When we received the final photos, we were stunned. The way he played with light, composition, and emotion truly brought our story to life. It wasn’t just a photoshoot — it felt like a beautiful memory we created together, and now we get to keep it forever. We can’t thank Suyog enough for making our pre-wedding shoot so special. It set the perfect tone for everything that’s to come. If you want someone who captures your chemistry with depth and elegance, we couldn’t recommend him more.",
            image: "/carousel/IMG-20250530-WA0148.jpg",
        },
        {
            id: 3,
            names: "Sagar & Snehal",
            blog: "Our engagement shoot with Suyog was one of the most fun and memorable experiences we’ve had together. From the moment we started, he made us feel completely comfortable — like we were just out on a date, laughing and enjoying each other’s company, with a friend casually capturing the moments. Suyog has an incredible eye for detail and a gift for catching the in-between moments — the way we looked at each other, the spontaneous smiles, the quiet gestures that really reflect who we are as a couple. Nothing ever felt forced or posed. The entire shoot felt so natural and personal, and that really shows in the final photos. When we saw the pictures, we were blown away. Each one felt like a little piece of our story — authentic, romantic, and full of emotion. We couldn’t have asked for a better photographer to capture this special chapter in our lives. If you’re looking for someone who brings both talent and heart to every shot, Suyog is your guy. We’re so glad we found him — and we already can’t wait for the wedding shoot!",
            image: "/carousel/IMG-20250530-WA0129.jpg",
        },
        {
            id: 4,
            names: "Shraddha",
            blog: "From the moment Suyog arrived to capture our halad ceremony, I knew we were in the best hands. He has this wonderful ability to blend into the celebration while still noticing every little detail — the vibrant turmeric, the laughter of our loved ones, and the quiet, emotional moments that I didn’t even realize were happening. What stood out the most was how effortlessly he made everyone feel at ease. His calm and warm nature helped me stay relaxed, even when things got a little chaotic (as they always do during wedding functions!). The photos he captured were not just beautiful — they were full of emotion, color, and life. Every time I look at them, I’m instantly taken back to that joyful, love-filled day. Suyog’s work is nothing short of magical. He doesn’t just take pictures — he tells stories through them. I’m so grateful to have had him as a part of our celebration, and I wholeheartedly recommend him to anyone looking to capture their wedding memories with honesty, creativity, and heart. Thank you, Suyog!",
            image: "/carousel/IMG-20250530-WA0001.jpg",
        },
        {
            id: 5,
            names: "Neha",
            blog: "My maternity shoot with Suyog was an experience I’ll always treasure. This phase of life is so special, and I wanted someone who could capture it with emotion, subtlety, and warmth — and Suyog did exactly that. From the start, he made me feel incredibly comfortable. He took the time to understand my story, my comfort level, and the kind of memories I wanted to create. The entire shoot felt relaxed and genuine — no stiff poses or forced smiles. It was just me, enjoying a quiet moment in time before everything changes. What amazed me most was how beautifully he captured the emotion — the anticipation, the quiet strength of this journey, and the connection I felt with the life growing inside me. The photos feel timeless, filled with light, love, and grace. They’re more than just pictures — they’re a celebration of this chapter, frozen in the most artistic and meaningful way. I’m so grateful to Suyog for giving me something I’ll hold close forever. If you’re looking to document your pregnancy in a way that feels honest and full of heart, he’s someone you can trust without hesitation.",
            image: "/carousel/IMG-20250530-WA0112.jpg",
        },
        {
            id: 6,
            names: "Hrishikesh & Aishwarya",
            blog: "Our pre-wedding shoot with Suyog felt like a beautiful dream we got to live — and now we get to relive it through every frame he captured. From the very beginning, Suyog made the entire process feel effortless. He gave us space to just be ourselves while subtly guiding us in a way that felt natural and unintrusive. There were no forced smiles or awkward poses — just real moments, laughter, and quiet exchanges that truly reflect our bond. What stood out the most was his incredible eye for emotion. He didn’t just photograph us — he captured how we felt. Every image tells a little story — the excitement, the love, the anticipation — and it all feels so true to who we are. We’re honestly in awe of how beautifully the photos turned out. It was more than a shoot — it was a memory in itself. Working with Suyog was one of the most comforting parts of our wedding journey, and we couldn’t be more thankful. If you’re looking for someone who captures connection with authenticity and heart, Suyog is the one. Truly.",
            image: "/carousel/IMG-20250530-WA0162.jpg",
        },
    ];

    return (
        <div className="p-6 pt-12 mx-auto text-md leading-loose w-full min-h-screen">
            <h1 className={`${alice.className} text-[#800000] text-3xl md:text-4xl text-center p-6 mt-16`}>
                Capturing Timeless Memories with Suyog Vilankar
            </h1>

            {blogs
                .filter((v) => v.id === Number(blog_id))
                .map((v, i) => {
                    return (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center md:flex-row max-w-300 mx-auto"
                        >
                            <div className="w-full h-full flex items-center justify-center">
                                <ImageKitProvider urlEndpoint={process.env.IMAGEKIT}>
                                    <Image
                                        src={v.image}
                                        width={300}
                                        height={300}
                                        alt=""
                                        className="h-50 w-50 md:h-70 md:w-70 lg:h-90 lg:w-90 object-cover rounded-full"
                                    />
                                </ImageKitProvider>
                            </div>
                            <div className="text-md leading-loose p-2 w-full flex flex-col items-center md:items-start justify-center">
                                <h1 className={`${alice.className} text-xl md:text-2xl lg:text-3xl mb-2`} >
                                    {v.names}
                                </h1>

                                <p className={pt_sans.className}>
                                    {v.blog}
                                </p>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

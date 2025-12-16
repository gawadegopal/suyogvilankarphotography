
import Button from "@/components/ui/Button";
import { Metadata } from "next";
import { Alice, PT_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const pt_sans = PT_Sans({
    weight: "400",
    subsets: ["latin"],
});

const alice = Alice({
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "About the Best Photographer in Ratnagiri | Suyog Vilankar",
    description:
        "I'm Suyog Vilankar — a civil engineer by degree, but a photographer by passion. Since 2020, I've been capturing weddings, pre-weddings, and candid moments across Ratnagiri & Sindhudurg. Known as one of the best wedding photographers in Ratnagiri, my goal is to preserve your true emotions and stories with honesty and artistry.",
    keywords: [
        "best photographer in Ratnagiri",
        "best wedding photographer in Ratnagiri",
        "top photographer in Ratnagiri",
        "top wedding photographer in Ratnagiri",
        "candid photographer Ratnagiri",
        "Sindhudurg wedding photographer",
        "About Suyog Vilankar",
    ],
    openGraph: {
        title: "About Suyog Vilankar | Top Wedding Photographer in Ratnagiri",
        description:
            "Civil engineer turned professional photographer — Suyog Vilankar is one of the top wedding photographers in Ratnagiri & Sindhudurg, capturing timeless emotions since 2020.",
        url: "https://suyogvilankarphotography.netlify.app/about",
        type: "profile",
    },
    alternates: {
        canonical: "https://suyogvilankarphotography.netlify.app/about",
    },
};

export default function About() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Suyog Vilankar",
        jobTitle: "Wedding Photographer",
        description:
            "Professional wedding and candid photographer based in Ratnagiri & Sindhudurg. Specializing in emotional, artistic, and storytelling photography.",
        url: "https://suyogvilankarphotography.netlify.app/about",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Ratnagiri",
            addressRegion: "Maharashtra",
            addressCountry: "India",
        },
        sameAs: [
            "https://www.facebook.com/suyog.vilankar/",
            "https://www.instagram.com/photos_by_suyog/",
        ],
        knowsAbout: [
            "Wedding Photography",
            "Candid Photography",
            "Pre Wedding Shoots",
            "Portrait Photography",
            "Photography Editing",
        ],
    };

    return (
        <div className="p-6 pt-12 mx-auto text-md leading-loose w-full min-h-screen">
            <h1 className={`${alice.className} text-[#800000] text-3xl md:text-4xl text-center p-6 mt-16`}>
                About Me
            </h1>

            <div className="flex flex-col items-center justify-center md:flex-row max-w-300 mx-auto">
                <div className="w-full h-full flex items-center justify-center">
                    <Image
                        src={"/suyog.png"}
                        height={300}
                        width={300}
                        alt=""
                        className="h-50 w-50 md:h-70 md:w-70 lg:h-90 lg:w-90 object-cover rounded-full"
                    />
                </div>
                <div className="text-md leading-loose p-2 w-full flex flex-col items-center md:items-start justify-center">
                    <h1
                        className={`${alice.className} text-xl md:text-2xl lg:text-3xl mb-2`}
                    >
                        Hello. I'm Suyog Vilankar
                    </h1>
                    <p className={pt_sans.className}>
                        I'm a civil engineer by degree (Class of 2018), but a photographer
                        by passion. Though I started my journey in civil engineering, my
                        heart has always been behind the camera. In 2020, I turned that
                        lifelong interest into a serious pursuit, and since then, I've had
                        the privilege of capturing countless weddings, pre-wedding moments,
                        and other cherished life events. My goal is simple: to deliver
                        stunning, heartfelt photographs that preserve your special memories
                        - all at an affordable price. I believe in building trust through
                        quality and commitment, and I promise you won't be disappointed.
                        Let's create something beautiful together.
                    </p>

                    <Button />

                    <h3 className="my-1">Follow Me:</h3>

                    <div className="flex flex-row items-center justify-start gap-2 text-3xl text-[#800000]">
                        <a
                            href="https://www.facebook.com/suyog.vilankar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shadow-sm p-0.5 rounded-full transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5"
                        >
                            <FaFacebook />
                        </a>

                        <a
                            href="https://www.instagram.com/photos_by_suyog/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shadow-sm p-0.5 transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5"
                        >
                            <FaInstagramSquare />
                        </a>
                    </div>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </div>
    );
}

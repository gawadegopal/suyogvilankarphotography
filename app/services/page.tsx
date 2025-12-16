import React from "react";
import { Alice } from "next/font/google";
import { Metadata } from "next";
import ServiceContainer from "@/components/sections/services/ServiceContainer";

export const metadata: Metadata = {
    title: "Photography Services in Ratnagiri | Weddings, Pre-Weddings & More",
    description:
        "Explore professional photography services in Ratnagiri by Suyog Vilankar — specializing in weddings, pre-weddings, maternity, baby shower & engagement photography across Ratnagiri & Sindhudurg.",
    keywords: [
        "photography services in Ratnagiri",
        "wedding photography Ratnagiri",
        "pre wedding photoshoot Ratnagiri",
        "engagement photography Ratnagiri",
        "maternity photoshoot Ratnagiri",
        "baby shower photography",
        "best photographer in Ratnagiri",
        "Suyog Vilankar photography services",
    ],
    openGraph: {
        title: "Photography Services in Ratnagiri | By Suyog Vilankar",
        description:
            "Discover premium photography services including weddings, pre-weddings, engagements, baby showers, maternity & more across Ratnagiri & Sindhudurg.",
        url: "https://suyogvilankarphotography.vercel.app/services",
        type: "website",
    },
    alternates: {
        canonical: "https://suyogvilankarphotography.vercel.app/services",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const alice = Alice({
    weight: "400",
    subsets: ["latin"],
});

export default function Services() {
    const arr = [
        {
            id: 1,
            link: "/photography/pre-wedding",
            name: "Pre-wedding",
            image: "/IMG-20250530-WA0148.jpg",
        },
        {
            id: 2,
            link: "/photography/engagement",
            name: "Engagement",
            image: "/IMG-20250530-WA0054.jpg",
        },
        {
            id: 3,
            link: "/photography/wedding",
            name: "Wedding",
            image: "/IMG-20250530-WA0060.jpg",
        },
        {
            id: 4,
            link: "/photography/baby-shower",
            name: "Baby Shower",
            image: "/IMG-20250530-WA0028.jpg",
        },
        {
            id: 5,
            link: "/photography/maternity",
            name: "Maternity",
            image: "/IMG-20250530-WA0172.jpg",
        },
        {
            id: 6,
            link: "/photography/baby-birthday",
            name: "Baby & Birthday",
            image: "/IMG-20250530-WA0192.jpg",
        },
    ];

    const schemaServices = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Photography Services in Ratnagiri",
        provider: {
            "@type": "LocalBusiness",
            name: "Suyog Vilankar Photography",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Ratnagiri",
                addressRegion: "Maharashtra",
                addressCountry: "India",
            },
        },
        serviceType: [
            "Wedding Photography",
            "Pre-wedding Photography",
            "Engagement Photography",
            "Baby Shower Photography",
            "Maternity Photography",
            "Birthday Photography",
        ],
        areaServed: ["Ratnagiri", "Sindhudurg", "Konkan"],
    };

    return (
        <div className={`${alice.className} p-6 pt-12 mx-auto text-md leading-loose max-w-300 h-full flex flex-col justify-center gap-6 py-6`}>
            <h1 className={`text-[#800000] text-3xl md:text-4xl text-center p-6 mt-16`}>
                Services
            </h1>

            <div>
                <div className="flex flex-row flex-wrap items-center justify-center gap-2">
                    {arr.map((v, i) => {
                        return (
                            <ServiceContainer
                                v={v}
                                i={i}
                                key={i}
                            />
                        );
                    })}
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaServices) }}
            />
        </div>
    );
}

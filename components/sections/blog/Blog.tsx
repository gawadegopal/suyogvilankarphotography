import React from 'react'
import { ImageKitProvider } from '@imagekit/next';
import BlogContent from './BlogContent';

export default function Blog() {
    const arr = [
        {
            id: 1,
            name: "Wedding",
            names: "Sanket & Manali",
            image: "/carousel/IMG-20250530-WA0060.jpg",
        },
        {
            id: 2,
            name: "Pre-wedding photo shoot",
            names: "Viraj & Samiksha",
            image: "/carousel/IMG-20250530-WA0148.jpg",
        },
        {
            id: 3,
            name: "Engagement",
            names: "Sagar & Snehal",
            image: "/carousel/IMG-20250530-WA0129.jpg",
        },
        {
            id: 4,
            name: "Halad ceremony",
            names: "Shraddha",
            image: "/carousel/IMG-20250530-WA0001.jpg",
        },
        {
            id: 5,
            name: "Maternity photo shoot",
            names: "Neha",
            image: "/carousel/IMG-20250530-WA0112.jpg",
        },
        {
            id: 6,
            name: "Pre-wedding photo shoot",
            names: "Hrishikesh & Aishwarya",
            image: "/carousel/IMG-20250530-WA0162.jpg",
        },
    ];

    return (
        <>
            <ImageKitProvider urlEndpoint={process.env.IMAGEKIT}>
                <BlogContent arr={arr} />
            </ImageKitProvider>
        </>
    )
}

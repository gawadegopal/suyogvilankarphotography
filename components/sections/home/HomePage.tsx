import React from 'react'
import { PT_Sans } from "next/font/google";
import { ImageKitProvider } from "@imagekit/next";
import Carousel from '../carousel/Carousel';
import Introduction from '../introduction/Introduction';
import Blog from '../blog/Blog';
import Gallery from '../gallery/Gallery';
import Films from '../films/Films';

const pt_sans = PT_Sans({
    weight: "400",
    subsets: ["latin"],
});


export default function HomePage() {
    return (
        <div className={`${pt_sans.className}`}>
            <Carousel />

            <ImageKitProvider urlEndpoint={process.env.IMAGEKIT}>
                <Blog />
            </ImageKitProvider>

            <Introduction />

            <Gallery />

            <Films />
        </div>
    )
}

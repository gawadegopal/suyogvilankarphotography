import { Alice, PT_Sans, Sacramento } from "next/font/google";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const pt_sans = PT_Sans({
    weight: "400",
    subsets: ["latin"],
});

const sacramento = Sacramento({
    weight: "400",
    subsets: ["latin"],
});

const alice = Alice({
    weight: "400",
    subsets: ["latin"],
});

export default function Footer() {
    return (
        <div className={`${pt_sans.className} bg-[#005F5F] text-white w-full p-3 text-md leading-loose flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between gap-3`}>
            <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
                <h1 className={`${sacramento.className} text-2xl mb-1`}>
                    Suyog V. Photography
                </h1>

                <h3 className="my-1">Follow Me:</h3>

                <div className="flex flex-row items-start justify-center gap-2 text-3xl text-[#FFF8E7]">
                    <a
                        href="https://www.facebook.com/suyog.vilankar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shadow-lg p-0.5 rounded-full transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5"
                    >
                        <FaFacebook />
                    </a>

                    <a
                        href="https://www.instagram.com/photos_by_suyog/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shadow-lg p-0.5 transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5"
                    >
                        <FaInstagramSquare />
                    </a>
                </div>

                <p className="hidden md:block my-1">
                    ©2026 Suyog V. Photography
                </p>

                <p className="hidden md:block my-1 text-sm">
                    Designed & created by Gopal Gawade
                </p>
            </div>

            <div className="flex flex-col items-center justify-center md:items-start mt-3 md:mt-0 gap-1">
                <h3 className={`${alice.className} text-xl underline underline-offset-4`}>
                    Quick Links
                </h3>

                <Link
                    href={"/about"}
                    className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5"
                >
                    About
                </Link>

                <Link
                    href={"/faq"}
                    className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5"
                >
                    Faq
                </Link>
            </div>

            <div className="hidden md:flex flex-col items-center justify-center md:items-start mt-3 md:mt-0 gap-1">
                <h3 className={`${alice.className} text-xl underline underline-offset-4`}>
                    Services
                </h3>

                <p className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5">
                    Pre-Wedding Photography
                </p>
                <p className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5">
                    Engagement Photography
                </p>
                <p className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5">
                    Wedding Photography
                </p>
                <p className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5">
                    Baby Shower Photography
                </p>
                <p className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5">
                    Maternity Photography
                </p>
                <p className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5">
                    Baby & Birthday Photography
                </p>
            </div>

            <div className="flex flex-col items-center justify-center md:items-start mt-3 md:mt-0 gap-1">
                <h3 className={`${alice.className} text-xl underline underline-offset-4`}>
                    Contact
                </h3>

                <a href="">Email: suyogvilankar33@gmail.com</a>

                <p>Phone: +91-9421143990</p>

                <p className="md:hidden">©2025 Suyog V. Photography</p>

                <p className="md:hidden text-sm">Designed & created by Gopal Gawade</p>
            </div>
        </div>
    );
}

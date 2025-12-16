"use client";

import { Alice, Sacramento } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const alice = Alice({
    weight: "400",
    subsets: ["latin"],
});

const sacramento = Sacramento({
    weight: "400",
    subsets: ["latin"],
});

export default function Navbar() {
    const [show, setShow] = useState<boolean>(false);
    const [navbar, setNavbar] = useState<boolean>(false);
    const path = usePathname();

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavbar(true) : setNavbar(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <div className={`${alice.className} fixed z-20 w-full right-0 left-0 top-0 flex flex-row items-center justify-between transition-all duration-150 p-3 ${navbar ? "text-white bg-[#800000] p-2 xl:p-3" : path === "/" ? "text-white bg-linear-to-b from-black/60 to-transparent to-95% xl:p-4" : "text-white bg-[#800000] xl:p-4"}`}>
            <Link href="/">
                <Image
                    src={'/logo.png'}
                    alt='Suyog V. Photography'
                    height={150}
                    width={150}
                    className={`${show ? "hidden" : "block"}`}
                />
            </Link>

            <ul className="hidden md:flex md:flex-row items-center justify-end md:gap-4 lg:gap-8 text-md font-medium">
                <li className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5">
                    <Link href="/about" className="h-12">
                        ABOUT
                    </Link>
                </li>

                <li className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5">
                    <Link href="/services" className="h-12">
                        SERVICES
                    </Link>
                </li>

                <li className="group relative transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5">
                    <div className="flex items-center justify-center h-12 gap-1 cursor-pointer">
                        <span>MY WORK</span>

                        <IoIosArrowDown />
                    </div>

                    <div className={`absolute hidden group-hover:block z-20 min-w-62.5 bg-[#D4AF37] text-white p-1`}>
                        <Link
                            href="/photography/pre-wedding"
                            className="block transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5 p-1"
                        >
                            Pre-Wedding Photography
                        </Link>

                        <Link
                            href="/photography/engagement"
                            className="block transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5 p-1 border-y border-white"
                        >
                            Engagement Photography
                        </Link>

                        <Link
                            href="/photography/wedding"
                            className="block transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5 p-1"
                        >
                            Wedding Photography
                        </Link>

                        <Link
                            href="/photography/baby-shower"
                            className="block transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5 p-1 border-y border-white"
                        >
                            Baby Shower Photography
                        </Link>

                        <Link
                            href="/photography/maternity"
                            className="block transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5 p-1"
                        >
                            Maternity Photography
                        </Link>

                        <Link
                            href="/photography/baby-birthday"
                            className="block transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5 p-1 border-t border-white"
                        >
                            Baby & Birthday Photography
                        </Link>
                    </div>
                </li>

                <li className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5">
                    <Link href="/contact" className="h-12">
                        CONTACT
                    </Link>
                </li>

                <li className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5">
                    <Link href="/kind-words" className="h-12">
                        KIND WORDS
                    </Link>
                </li>

                <li className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5">
                    <Link href="/faq" className="h-12">
                        FAQ
                    </Link>
                </li>
            </ul>

            <div
                className="flex items-center md:hidden m-2 cursor-pointer text-xl z-30"
                onClick={() => setShow(!show)}
            >
                {show ? <IoMdClose /> : <GiHamburgerMenu />}
            </div>

            <div className={`bg-[#800000] text-white transition-all duration-300 absolute md:hidden w-48 h-screen top-0 bottom-0 z-20 ${show ? "left-0" : "-left-full"}`}>
                <ul className="h-full flex flex-col items-center justify-start gap-8 pt-12 text-md font-medium">
                    <Link href="/">
                        <Image
                            src={'/logo.png'}
                            alt='Suyog V. Photography'
                            height={150}
                            width={150}
                            className={`${show ? "hidden" : "block"}`}
                        />
                    </Link>

                    <li className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5">
                        <Link href="/about" className="h-6">
                            ABOUT
                        </Link>
                    </li>

                    <li className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5">
                        <Link href="/services" className="h-6">
                            SERVICES
                        </Link>
                    </li>

                    <li className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5">
                        <div className="flex items-center justify-center gap-1 h-6">
                            <span>MY WORK</span>

                            <IoIosArrowDown />
                        </div>

                        <div className={`text-center text-white p-1`}>
                            <Link
                                href="/photography/pre-wedding"
                                className="block transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5 p-1"
                            >
                                Pre-Wedding
                            </Link>

                            <Link
                                href="/photography/engagement"
                                className="block transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5 p-1 border-y border-[#D4AF37]"
                            >
                                Engagement
                            </Link>

                            <Link
                                href="/photography/wedding"
                                className="block transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5 p-1"
                            >
                                Wedding
                            </Link>

                            <Link
                                href="/photography/baby-shower"
                                className="block transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5 p-1 border-y border-[#D4AF37]"
                            >
                                Baby Shower
                            </Link>

                            <Link
                                href="/photography/maternity"
                                className="block transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5 p-1"
                            >
                                Maternity
                            </Link>

                            <Link
                                href="/photography/baby-birthday"
                                className="block transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5 p-1 border-t border-[#D4AF37]"
                            >
                                Baby & Birthday
                            </Link>
                        </div>
                    </li>

                    <li className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5">
                        <Link href="/contact" className="h-6">
                            CONTACT
                        </Link>
                    </li>

                    <li className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5">
                        <Link href="/kind-words" className="h-6">
                            KIND WORDS
                        </Link>
                    </li>

                    <li className="transform translate-y-0 transition-all duration-150 hover:-translate-y-0.5">
                        <Link href="/faq" className="h-6">
                            FAQ
                        </Link>
                    </li>
                </ul>
            </div>

            {show && (
                <div
                    className={`absolute top-0 bottom-0 w-[100vh] h-screen ${show ? "right-0" : "-left-full"} bg-[#000000]/50`}
                    onClick={() => setShow(false)}
                />
            )}
        </div>
    );
}

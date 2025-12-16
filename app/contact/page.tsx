
import ContactForm from "@/components/sections/contact/ContactForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Contact | Suyog Vilankar Photography - Book Your Photoshoot in Ratnagiri",
    description:
        "Get in touch with Suyog Vilankar Photography for wedding, pre-wedding, maternity, baby shower & engagement shoots in Ratnagiri & Sindhudurg. Fill out the contact form to book your photoshoot.",
    keywords: [
        "contact photographer Ratnagiri",
        "book wedding photographer Ratnagiri",
        "photography booking Ratnagiri",
        "Suyog Vilankar contact",
        "hire photographer Ratnagiri",
        "wedding photoshoot inquiry Ratnagiri",
    ],
    openGraph: {
        title: "Contact Suyog Vilankar Photography | Book a Photoshoot",
        description:
            "Reach out to book professional photography services including weddings, pre-weddings, maternity & more in Ratnagiri & Sindhudurg.",
        url: "https://suyogvilankarphotography.vercel.app/contact",
        type: "website",
    },
    alternates: {
        canonical: "https://suyogvilankarphotography.vercel.app/contact",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Contact() {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Suyog Vilankar Photography",
        url: "https://suyogvilankarphotography.vercel.app/contact",
        description:
            "Contact page for booking wedding, pre-wedding, maternity, baby shower, and engagement photography services in Ratnagiri & Sindhudurg.",
        publisher: {
            "@type": "LocalBusiness",
            name: "Suyog Vilankar Photography",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Ratnagiri",
                addressRegion: "Maharashtra",
                addressCountry: "India",
            },
            telephone: "+919421143990",
            sameAs: [
                "https://www.facebook.com/suyog.vilankar/",
                "https://www.instagram.com/photos_by_suyog/",
            ],
        },
    };

    return (
        <>
            <ContactForm />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
        </>
    );
}

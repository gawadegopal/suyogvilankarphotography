import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { Metadata } from "next";
import HomePage from "@/components/sections/home/HomePage";

const open_sans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Wedding Photographer in Ratnagiri | Top Photographer Suyog Vilankar",
  description:
    "Searching for the best wedding photographer in Ratnagiri? Suyog Vilankar specializes in wedding, candid, pre-wedding, engagement, maternity & baby photography across Ratnagiri & Sindhudurg.",
  keywords: [
    "best wedding photographer in Ratnagiri",
    "best photographer in Ratnagiri",
    "top photographer in Ratnagiri",
    "candid photographer Ratnagiri",
    "pre wedding photoshoot Ratnagiri",
    "engagement photography Ratnagiri",
    "maternity photoshoot Ratnagiri",
    "Sindhudurg wedding photographer",
    "Ratnagiri wedding photographer",
  ],
  openGraph: {
    title: "Best Wedding Photographer in Ratnagiri | Top Photographer Suyog Vilankar",
    description:
      "Top-rated photographer in Ratnagiri capturing weddings, candid moments, pre-weddings, engagements, maternity & baby shoots with creative storytelling.",
    url: "https://www.suyogvilankarphotography.vercel.app/",
    type: "website",
  },
  alternates: {
    canonical: "https://www.suyogvilankarphotography.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Best Wedding Photographer in Ratnagiri | Top Photographer Suyog Vilankar",
    "url": "https://www.suyogvilankarphotography.vercel.app/",
    "description":
      "Searching for the best wedding photographer in Ratnagiri? Suyog Vilankar specializes in wedding, candid, pre-wedding, engagement, maternity & baby photography across Ratnagiri & Sindhudurg.",
    "publisher": {
      "@type": "LocalBusiness",
      "name": "Suyog Vilankar Photography",
      "url": "https://www.suyogvilankarphotography.vercel.app/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ratnagiri",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      },
      "areaServed": ["Ratnagiri", "Sindhudurg", "Maharashtra", "Konkan"],
      "sameAs": [
        "https://www.instagram.com/photos_by_suyog/",
        "https://www.facebook.com/suyog.vilankar/"
      ]
    },

    "about": {
      "@type": "Person",
      "name": "Suyog Vilankar",
      "jobTitle": "Wedding Photographer",
      "knowsAbout": [
        "wedding photography",
        "candid photography",
        "pre-wedding photography",
        "engagement shoots",
        "maternity photoshoots",
        "baby photography"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ratnagiri",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      }
    }
  };

  return (
    <div className={`${open_sans.className} flex flex-col items-center justify-between min-h-screen bg-[#FFF8E7]`}>
      <main className="w-full h-full">
        <HomePage />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
    </div>
  );
}

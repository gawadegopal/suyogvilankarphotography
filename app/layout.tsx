import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Scroll from "@/components/ui/Scroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://suyogvilankarphotography.netlify.app/"),

  title: {
    default: "Suyog Vilankar Photography — Best Wedding Photographer in Ratnagiri",
    template: "%s | Suyog Vilankar Photography",
  },

  description: "Suyog Vilankar Photography — Best wedding, candid, pre-wedding, engagement, maternity, and baby photographer in Ratnagiri & Sindhudurg. Delivering emotional, timeless, and artistic photography since 2020.",

  keywords: [
    "best wedding photographer in Ratnagiri",
    "wedding photographer Ratnagiri",
    "top photographer in Ratnagiri",
    "candid photographer in Ratnagiri",
    "pre wedding photoshoot Ratnagiri",
    "engagement photography Ratnagiri",
    "maternity photoshoot Ratnagiri",
    "baby photography Ratnagiri",
    "photographer in Sindhudurg",
    "Ratnagiri photography services",
    "Sindhudurg photography services",
    "Suyog Vilankar Photography",
  ],

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://suyogvilankarphotography.netlify.app/",
    siteName: "Suyog Vilankar Photography",
    title: "Best Wedding Photographer in Ratnagiri | Suyog Vilankar Photography",
    description: "Capturing heartfelt weddings, candid emotions, pre-weddings, engagements, maternity & baby moments across Ratnagiri & Sindhudurg.",
  },

  alternates: {
    canonical: "https://suyogvilankarphotography.netlify.app/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layoutSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Suyog Vilankar Photography",
    "url": "https://suyogvilankarphotography.netlify.app/",
    "description":
      "Searching for the best wedding photographer in Ratnagiri? Suyog Vilankar specializes in wedding, candid, pre-wedding, engagement, maternity & baby photography across Ratnagiri & Sindhudurg",
    "publisher": {
      "@type": "Organization",
      "name": "Suyog Vilankar Photography",
      "url": "https://suyogvilankarphotography.netlify.app/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://suyogvilankarphotography.netlify.app/logo.png"
      }
    },
    "sameAs": [
      "https://www.instagram.com/photos_by_suyog/",
      "https://www.facebook.com/suyog.vilankar/"
    ],
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Suyog Vilankar Photography"
    },
    "inLanguage": "en-IN",
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(layoutSchema) }}
          strategy="afterInteractive"
        />
      </head>

      <body className={`w-full min-h-screen bg-[#FFF8E7] flex flex-col justify-between`}>
        <Scroll />

        <nav>
          <Navbar />
        </nav>

        {children}

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

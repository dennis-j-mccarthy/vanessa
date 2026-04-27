import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vanessa Graf, PsyD, LMFT — Therapy in California & Colorado",
    template: "%s | Vanessa Graf",
  },
  description:
    "Vanessa Graf, PsyD, LMFT — over 25 years guiding people toward renewal through psychotherapy, marriage counseling, life coaching, and integrated spirituality.",
  metadataBase: new URL("https://vanessagraf.com"),
  openGraph: {
    title: "Vanessa Graf, PsyD, LMFT — Therapy in California & Colorado",
    description:
      "Psychotherapy, marriage counseling, life coaching, and integrated spirituality with Vanessa Graf, PsyD, LMFT.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://landing-advocacia-one.vercel.app"),
  title: "Lumina Advocacia | Excelência e Estratégia Jurídica",
  description: "Escritório de advocacia especializado em Direito Civil, Empresarial e Digital. Soluções jurídicas modernas e eficazes.",
  openGraph: {
    title: "Lumina Advocacia | Excelência e Estratégia Jurídica",
    description: "Escritório de advocacia especializado em Direito Civil, Empresarial e Digital. Soluções jurídicas modernas e eficazes.",
    url: "https://landing-advocacia-one.vercel.app", // Replacing with actual URL if known, or relative
    siteName: "Lumina Advocacia",
    images: [
      {
        // url: "/images/preview-site.png",
        url: "https://i.ibb.co/xSVJqFcY/preview-site.png",
        width: 1200,
        height: 630,
        alt: "Lumina Advocacia Preview",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Advocacia | Excelência e Estratégia Jurídica",
    description: "Escritório de advocacia especializado em Direito Civil, Empresarial e Digital. Soluções jurídicas modernas e eficazes.",
    images: ["/images/preview-site.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

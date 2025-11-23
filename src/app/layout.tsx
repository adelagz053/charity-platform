import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansArabic = Noto_Sans_Arabic({
    subsets: ["arabic"],
    variable: "--font-noto-sans-arabic",
    weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
    title: "منصة الربط بين الجمعيات والممولين",
    description: "منصة رقمية لربط الجمعيات الخيرية بالممولين في المملكة العربية السعودية",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ar" dir="rtl">
            <body className={`${inter.variable} ${notoSansArabic.variable} font-arabic bg-surface-50 text-surface-900`}>
                {children}
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xe Điện Smile | Chuyên xe đạp điện, xe máy điện chính hãng",
  description:
    "Xe Điện Smile – Hệ thống phân phối xe đạp điện, xe máy điện chính hãng tại TP.HCM. Cam kết giá tốt, trả góp 0%, giao hàng toàn quốc.",
  keywords: "xe máy điện, xe đạp điện, xe 50cc, yadea, dk bike, xe điện smile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${quicksand.variable} antialiased`}>
      <body className="flex flex-col min-h-screen bg-[#f3f4f6] text-[#4c4c4c]">
        <Header />
        <main className="flex-grow pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />

        {/* Floating Action Buttons */}
        <div className="fixed bottom-20 lg:bottom-8 right-3 lg:right-6 flex flex-col space-y-3 z-50">
          <a
            href="https://zalo.me/0888882887"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat Zalo"
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform overflow-hidden"
          >
            {/* Zalo icon – blue/white */}
            <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="24" fill="#0068FF"/>
              <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial">Za</text>
            </svg>
          </a>
          <a
            href="tel:0888882887"
            title="Gọi ngay"
            className="w-12 h-12 bg-[#e83e3e] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:bg-red-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}

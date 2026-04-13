import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Admin | Xe Điện Smile",
  description: "Trang quản trị Xe Điện Smile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${inter.variable} antialiased`}>
      <body className="flex h-screen bg-[#f1f5f9] text-slate-900 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top header */}
          <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-red-500 rounded-full"></div>
              <h2 className="text-base font-semibold text-slate-700">Quản Trị Hệ Thống</h2>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative text-slate-500 hover:text-slate-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="flex items-center gap-2.5 pl-4 border-l border-slate-200">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  A
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-slate-800 leading-none">Admin</p>
                  <p className="text-xs text-slate-400 mt-0.5">Quản trị viên</p>
                </div>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

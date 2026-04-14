"use client";

import Link from 'next/link';
import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Trang Chủ', href: '/' },
  {
    label: 'Xe Máy Điện',
    href: '/xe-may-dien',
    subs: [
      { label: 'Xe Điện Hottrend',       href: '/xe-dien-hot-trending' },
      { label: 'DK Bike',                href: '/xe-may-dien-dkbike' },
      { label: 'DV Motor',               href: '/xe-may-dien-dv-motor' },
      { label: 'JVCeco',                 href: '/xe-may-dien-jvceco' },
      { label: 'Yadea',                  href: '/xe-may-dien-yadea-1' },
      { label: 'Vinfast',                href: '/xe-may-dien-vinfast-1' },
      { label: 'Dibao',                  href: '/xe-may-dien-dibao-1' },
      { label: 'Yaka Bike',              href: '/xe-may-dien-yaka-bike' },
      { label: 'Dibao Gogo',             href: '/xe-may-dien-dibao-gogo' },
      { label: 'NIJIA',                  href: '/xe-may-dien-nijia' },
      { label: 'Kazuki',                 href: '/xe-dien-kazuki' },
      { label: 'Xmen',                   href: '/xe-dien-xmen' },
      { label: 'Vespa',                  href: '/xe-may-dien-vespa' },
      { label: 'Osakar',                 href: '/xe-may-dien-osakar' },
      { label: 'Detech',                 href: '/xe-may-dien-detech' },
    ],
  },
  {
    label: 'Xe Đạp Điện',
    href: '/xe-dap-dien',
    subs: [
      { label: 'DK Bike',        href: '/xe-dap-dien-dkbike' },
      { label: 'DV Motor',       href: '/xe-dap-dien-dv-moto' },
      { label: 'JVCeco',         href: '/xe-dap-dien-jvceco' },
      { label: 'Dylexe',         href: '/xe-dap-dien-dylexe' },
      { label: 'Avent',          href: '/xe-dap-dien-avent' },
      { label: 'Osaka',          href: '/xe-dap-dien-osakar' },
      { label: 'Yadea',          href: '/xe-dap-dien-yadea' },
      { label: 'Mini',           href: '/xe-dap-dien-mini' },
      { label: 'Xe Điện 3 Bánh', href: '/xe-dien-3-banh' },
      { label: 'Detech',         href: '/xe-dap-dien-detech' },
    ],
  },
  {
    label: 'Xe 50CC',
    href: '/xe-may-50cc',
    subs: [
      { label: 'Xe Số 50CC', href: '/xe-so-50cc' },
      { label: 'Xe Ga 50CC', href: '/xe-ga-50cc' },
    ],
  },
  { label: 'Về Xe Điện Smile', href: '/ve-xe-dien-smile' },
  { label: 'CTKM Tháng', href: '/ctkm-thang', highlight: true },
  {
    label: 'Blog',
    href: '/tin-tuc',
    subs: [
      { label: 'Tin tức xe điện',         href: '/tin-tuc' },
      { label: 'Review xe điện',          href: '/review-xe-dien' },
      { label: 'Chương trình khuyến mãi', href: '/ctkm-thang' },
      { label: 'Video xe điện',           href: '/video' },
    ],
  },
  { label: 'Liên Hệ', href: '/lien-he' },
];

const MOBILE_CATEGORIES = [
  { label: 'Xe Máy Điện', href: '/xe-may-dien',  icon: '🏍️', color: 'text-[#00579c]', bg: 'bg-blue-50 border-blue-100' },
  { label: 'Xe Đạp Điện', href: '/xe-dap-dien',  icon: '🚲', color: 'text-green-600',  bg: 'bg-green-50 border-green-100' },
  { label: 'Xe 50CC',     href: '/xe-may-50cc',  icon: '🛵', color: 'text-orange-500', bg: 'bg-orange-50 border-orange-100' },
  { label: 'Khuyến Mãi',  href: '/ctkm-thang',   icon: '🎁', color: 'text-red-500',    bg: 'bg-red-50 border-red-100' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      <header className="w-full bg-white shadow-md sticky top-0 z-40">
        {/* Top announcement bar */}
        <div className="bg-[#00579c] text-white text-xs py-1.5 hidden lg:block">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <span>🏆 Cam kết xe chính hãng 100% — Giao hàng toàn quốc miễn phí</span>
            <div className="flex space-x-5">
              <Link href="/he-thong-cua-hang" className="hover:text-[#f48f7f] transition">Hệ thống cửa hàng</Link>
              <Link href="/chinh-sach-bao-hanh" className="hover:text-[#f48f7f] transition">Chính sách bảo hành</Link>
              <Link href="/tin-tuc" className="hover:text-[#f48f7f] transition">Tin tức</Link>
            </div>
          </div>
        </div>

        {/* ── DESKTOP HEADER ── */}
        <div className="hidden lg:flex container mx-auto px-4 py-3 items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex flex-col leading-none">
              <span className="text-[28px] font-black text-[#00579c] tracking-tight italic">SMILE</span>
              <span className="text-[10px] font-bold text-[#4c4c4c] uppercase tracking-widest -mt-1">Xe Điện</span>
            </div>
          </Link>

          {/* Search bar */}
          <form className="flex-1 relative" onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              placeholder="Tìm kiếm xe điện, xe máy điện, xe đạp điện..."
              className="w-full border-2 border-[#00579c] rounded-full py-2.5 px-5 pr-12 text-sm text-[#4c4c4c] focus:outline-none focus:border-[#0067bc] placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 bg-[#00579c] text-white rounded-full flex items-center justify-center hover:bg-[#0067bc] transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          {/* Hotline */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-[#00579c] rounded-full flex items-center justify-center text-[#00579c]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 font-semibold uppercase">Hotline mua hàng</p>
              <a href="tel:0888882887" className="text-[#00579c] font-black text-lg leading-none hover:text-[#f48f7f] transition">
                0888.882.887
              </a>
            </div>
          </div>

          {/* Cart */}
          <div className="flex-shrink-0 relative cursor-pointer group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4c4c4c] group-hover:text-[#00579c] transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <span className="absolute -top-1 -right-2 bg-[#e83e3e] text-white text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center ring-2 ring-white px-1">0</span>
          </div>
        </div>

        {/* ── MOBILE HEADER ── */}
        <div className="lg:hidden flex items-center px-3 py-2.5 gap-2 border-b border-gray-100">
          <Link href="/" className="flex-shrink-0">
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black text-[#00579c] tracking-tight italic">SMILE</span>
              <span className="text-[8px] font-bold text-[#4c4c4c] uppercase tracking-widest -mt-0.5">Xe Điện</span>
            </div>
          </Link>
          <form className="flex-1 relative" onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full border border-gray-200 rounded-full py-1.5 px-4 pr-9 text-sm focus:outline-none focus:border-[#00579c] bg-gray-50"
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#00579c]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
          <a href="tel:0888882887" className="flex-shrink-0 text-[#00579c]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>

        {/* ── DESKTOP NAVIGATION BAR ── */}
        <nav className="hidden lg:block bg-[#00579c]">
          <div className="container mx-auto px-4 flex items-stretch">
            {NAV_ITEMS.map((item) => (
              item.subs ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-3 text-white text-sm font-semibold uppercase hover:bg-[#0067bc] hover:text-[#f48f7f] transition whitespace-nowrap"
                  >
                    {item.label}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 bg-white shadow-xl border-t-2 border-[#00579c] min-w-[220px] z-50 animate-fade-down">
                      <div className="grid grid-cols-2 gap-0 py-2">
                        {item.subs.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#4c4c4c] hover:bg-[#00579c] hover:text-white transition"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00579c] flex-shrink-0"></span>
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-3 text-sm font-semibold uppercase transition whitespace-nowrap flex items-center ${
                    item.highlight
                      ? 'bg-yellow-400 text-[#00579c] hover:bg-yellow-300 font-black'
                      : 'text-white hover:bg-[#0067bc] hover:text-[#f48f7f]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </nav>
      </header>

      {/* ── MOBILE BOTTOM NAV ── */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-[60] lg:hidden shadow-[0_-2px_8px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-4 h-14">
          <Link href="/" className="flex flex-col items-center justify-center gap-0.5 text-gray-500 hover:text-[#00579c]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-[10px] font-semibold">Trang chủ</span>
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className={`flex flex-col items-center justify-center gap-0.5 border-x border-gray-100 ${mobileOpen ? 'text-[#00579c] bg-blue-50' : 'text-gray-500'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="text-[10px] font-semibold">Danh mục</span>
          </button>
          <Link href="/ctkm-thang" className="flex flex-col items-center justify-center gap-0.5 text-gray-500 hover:text-[#00579c]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span className="text-[10px] font-semibold">Khuyến mãi</span>
          </Link>
          <Link href="/lien-he" className="flex flex-col items-center justify-center gap-0.5 text-gray-500 hover:text-[#00579c]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-[10px] font-semibold">Liên hệ</span>
          </Link>
        </div>
      </div>

      {/* ── MOBILE MENU OVERLAY ── */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-[70] lg:hidden flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 bg-[#00579c] text-white sticky top-0">
            <h2 className="font-bold text-base uppercase">Danh Mục Sản Phẩm</h2>
            <button onClick={() => setMobileOpen(false)} className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="flex overflow-x-auto gap-4 px-4 py-4 border-b border-gray-100 scrollbar-hide">
              {MOBILE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex-shrink-0 flex flex-col items-center gap-1"
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl border ${cat.bg} shadow-sm`}>
                    {cat.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase ${cat.color} text-center max-w-[60px]`}>{cat.label}</span>
                </Link>
              ))}
            </div>

            <nav className="px-2 py-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between px-3 py-3.5 rounded-lg font-semibold text-sm mb-0.5 ${
                      item.highlight ? 'text-[#e83e3e] bg-red-50' : 'text-[#4c4c4c] hover:bg-gray-50 hover:text-[#00579c]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.subs && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </Link>
                  {item.subs && (
                    <div className="ml-4 mb-2 grid grid-cols-2 gap-1">
                      {item.subs.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-1.5 px-3 py-2 text-xs text-gray-500 hover:text-[#00579c] hover:bg-blue-50 rounded-md"
                        >
                          <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0"></span>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mx-4 mb-24 p-4 bg-[#00579c]/5 rounded-xl border border-[#00579c]/10">
              <p className="text-sm font-bold text-[#00579c] mb-2">Hotline hỗ trợ</p>
              <a href="tel:0888882887" className="text-xl font-black text-[#e83e3e]">0888.882.887</a>
              <p className="text-xs text-gray-500 mt-1">Mở cửa: 7:30 – 21:00 mỗi ngày</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

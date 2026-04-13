"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Image as ImageIcon,
  Tag,
  Settings,
  LogOut,
  ChevronRight,
  Zap,
} from "lucide-react";

const NAV = [
  { href: "/",          icon: LayoutDashboard, label: "Dashboard"        },
  { href: "/products",  icon: Package,          label: "Sản Phẩm"        },
  { href: "/banners",   icon: ImageIcon,        label: "Banners"          },
  { href: "/categories",icon: Tag,              label: "Danh Mục"         },
  { href: "/settings",  icon: Settings,         label: "Cài Đặt"         },
];

export default function Sidebar() {
  const path = usePathname();

  const isActive = (href: string) =>
    href === "/" ? path === "/" : path.startsWith(href);

  return (
    <aside className="w-60 bg-[#0f172a] text-white flex flex-col shrink-0 hidden md:flex">
      {/* Logo */}
      <div className="h-16 flex items-center gap-3 px-5 border-b border-white/10">
        <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center shadow-md">
          <Zap size={16} className="text-white" strokeWidth={2.5} />
        </div>
        <div className="leading-none">
          <span className="block text-base font-black tracking-tight italic text-white">SMILE</span>
          <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Admin Panel</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-3 space-y-0.5 overflow-y-auto">
        <p className="text-[10px] uppercase text-slate-500 font-bold px-3 py-2 tracking-widest">Quản lý</p>
        {NAV.map(({ href, icon: Icon, label }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition group ${
                active
                  ? "bg-red-600 text-white shadow-md shadow-red-900/30"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={17} strokeWidth={active ? 2.5 : 2} className={active ? "text-white" : "text-slate-500 group-hover:text-white transition"} />
              <span className="flex-1">{label}</span>
              {active && <ChevronRight size={14} className="text-white/70" />}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-white/10">
        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:bg-white/5 hover:text-white transition w-full group"
        >
          <Zap size={17} strokeWidth={2} className="text-slate-500 group-hover:text-white transition" />
          <span className="flex-1">Xem Frontend</span>
        </a>
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:bg-red-900/20 hover:text-red-400 transition w-full group">
          <LogOut size={17} strokeWidth={2} className="text-slate-500 group-hover:text-red-400 transition" />
          <span className="flex-1">Đăng Xuất</span>
        </button>
        <p className="text-center text-[10px] text-slate-600 mt-3">v1.0.0 · Xe Điện Smile</p>
      </div>
    </aside>
  );
}

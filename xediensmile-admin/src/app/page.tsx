"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Package,
  Image as ImageIcon,
  TrendingUp,
  ShoppingBag,
  ArrowUpRight,
  Plus,
  Eye,
} from "lucide-react";

const API = "http://localhost:5001/api";

export default function AdminDashboard() {
  const [productCount, setProductCount] = useState<number | null>(null);
  const [bannerCount, setBannerCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`${API}/products`)
      .then((r) => r.json())
      .then((d) => setProductCount(Array.isArray(d) ? d.length : 0))
      .catch(() => setProductCount(0));
    fetch(`${API}/banners`)
      .then((r) => r.json())
      .then((d) => setBannerCount(Array.isArray(d) ? d.length : 0))
      .catch(() => setBannerCount(0));
  }, []);

  const stats = [
    {
      label: "Tổng Sản Phẩm",
      value: productCount,
      icon: Package,
      color: "bg-blue-500",
      bg: "bg-blue-50",
      text: "text-blue-600",
      link: "/products",
      trend: "+12% tháng này",
    },
    {
      label: "Banners Đang Chạy",
      value: bannerCount,
      icon: ImageIcon,
      color: "bg-purple-500",
      bg: "bg-purple-50",
      text: "text-purple-600",
      link: "/banners",
      trend: "Slider trang chủ",
    },
    {
      label: "Doanh Thu Tháng",
      value: "150M₫",
      icon: TrendingUp,
      color: "bg-green-500",
      bg: "bg-green-50",
      text: "text-green-600",
      link: "#",
      trend: "+8% so với T3",
    },
    {
      label: "Đơn Hàng Mới",
      value: 14,
      icon: ShoppingBag,
      color: "bg-orange-500",
      bg: "bg-orange-50",
      text: "text-orange-600",
      link: "#",
      trend: "Chờ xử lý",
    },
  ];

  const quickLinks = [
    { href: "/products/new",  icon: Plus,     label: "Thêm Sản Phẩm Mới",  color: "bg-blue-600 hover:bg-blue-700"   },
    { href: "/banners/new",   icon: ImageIcon, label: "Upload Banner Mới",  color: "bg-purple-600 hover:bg-purple-700" },
    { href: "/products",      icon: Eye,       label: "Xem Tất Cả Sản Phẩm", color: "bg-slate-600 hover:bg-slate-700"  },
  ];

  return (
    <div className="space-y-6 max-w-7xl">
      {/* Page title */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 text-sm mt-1">Chào mừng trở lại, Admin! Đây là tổng quan hệ thống.</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 ${s.bg} rounded-xl flex items-center justify-center`}>
                  <Icon size={20} className={s.text} strokeWidth={2} />
                </div>
                <Link href={s.link} className="text-slate-400 hover:text-slate-600 transition">
                  <ArrowUpRight size={16} />
                </Link>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">
                  {s.value === null ? (
                    <span className="inline-block w-12 h-7 bg-slate-100 rounded animate-pulse" />
                  ) : s.value}
                </p>
                <p className="text-sm font-medium text-slate-600 mt-0.5">{s.label}</p>
                <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1">
                  <TrendingUp size={11} className="text-green-500" />
                  {s.trend}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Quick actions */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-red-500 rounded-full"></span>
            Thao Tác Nhanh
          </h3>
          <div className="space-y-2.5">
            {quickLinks.map(({ href, icon: Icon, label, color }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-4 py-3 ${color} text-white rounded-xl text-sm font-semibold transition shadow-sm`}
              >
                <Icon size={16} strokeWidth={2.5} />
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Status overview */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-red-500 rounded-full"></span>
            Trạng Thái Hệ Thống
          </h3>
          <div className="space-y-3">
            {[
              { label: "Frontend (Next.js)", port: "3000", status: "Đang chạy", color: "bg-green-100 text-green-700" },
              { label: "Backend API (Express)", port: "5001", status: "Đang chạy", color: "bg-green-100 text-green-700" },
              { label: "MongoDB Database", port: "27017", status: "Kết nối", color: "bg-green-100 text-green-700" },
              { label: "Cloudinary Storage", port: "CDN", status: "Sẵn sàng", color: "bg-blue-100 text-blue-700" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                    <p className="text-xs text-slate-400">Port: {item.port}</p>
                  </div>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${item.color}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent note */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
          💡 Hướng dẫn nhanh
        </h3>
        <ul className="text-sm text-amber-700 space-y-1.5 list-disc list-inside">
          <li>Vào <strong>Sản Phẩm</strong> để thêm/sửa/xóa xe điện</li>
          <li>Vào <strong>Banners</strong> để cập nhật hình ảnh slider trang chủ</li>
          <li>Sản phẩm cần có <strong>slug</strong> duy nhất để hiển thị đúng URL</li>
          <li>Upload ảnh sẽ được lưu tự động lên <strong>Cloudinary</strong></li>
        </ul>
      </div>
    </div>
  );
}

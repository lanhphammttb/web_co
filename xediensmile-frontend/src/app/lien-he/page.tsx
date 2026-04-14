"use client";

import Link from "next/link";
import { useState } from "react";

export default function LienHePage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", content: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", email: "", content: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#00579c] transition">Trang chủ</Link>
            <span>›</span>
            <span className="text-gray-800 font-semibold">Liên hệ</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-2xl md:text-3xl font-black text-[#00579c] uppercase mb-8 text-center">Liên Hệ</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="font-black text-[#333] text-lg uppercase mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
                Thông Tin Liên Hệ
              </h2>
              <ul className="space-y-4 text-sm text-[#4c4c4c]">
                <li className="flex items-start gap-3">
                  <span className="text-[#00579c] text-lg shrink-0">📍</span>
                  <div>
                    <p className="font-bold mb-1">Trụ sở chính</p>
                    <p>285A Hậu Giang, Phường 5, Quận 6, Thành Phố Hồ Chí Minh</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00579c] text-lg shrink-0">📍</span>
                  <div>
                    <p className="font-bold mb-1">Chi nhánh 2</p>
                    <p>188 Lạc Long Quân, P.3, Q.11, TP.HCM</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00579c] text-lg shrink-0">📍</span>
                  <div>
                    <p className="font-bold mb-1">Chi nhánh 3</p>
                    <p>190 Lạc Long Quân, P.3, Q.11, TP.HCM</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00579c] text-lg shrink-0">📞</span>
                  <div>
                    <p className="font-bold">Hotline</p>
                    <a href="tel:0888882887" className="text-[#00579c] font-black text-lg hover:text-[#f48f7f] transition">0888.882.887</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00579c] text-lg shrink-0">📞</span>
                  <div>
                    <p className="font-bold">Gọi mua hàng</p>
                    <a href="tel:0918118508" className="text-[#00579c] font-bold hover:text-[#f48f7f] transition">0918.118.508</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00579c] text-lg shrink-0">🔧</span>
                  <div>
                    <p className="font-bold">Hỗ trợ kỹ thuật 24/7</p>
                    <a href="tel:0969823528" className="text-[#00579c] font-bold hover:text-[#f48f7f] transition">0969.823.528</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00579c] text-lg shrink-0">✉️</span>
                  <div>
                    <p className="font-bold">Email</p>
                    <p>Xediensmile@gmai.com</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-64 flex items-center justify-center text-gray-400 text-sm">
              <div className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <p>Bản đồ khu vực cửa hàng</p>
                <p className="text-xs mt-1">285A Hậu Giang, P.5, Q.6, TP.HCM</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-black text-[#333] text-lg uppercase mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              Gửi Liên Hệ
            </h2>

            {sent && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-semibold text-center">
                ✅ Gửi thành công! Chúng tôi sẽ liên hệ lại sớm nhất.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#00579c] focus:ring-1 focus:ring-[#00579c]"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#00579c] focus:ring-1 focus:ring-[#00579c]"
                  placeholder="0888.882.887"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#00579c] focus:ring-1 focus:ring-[#00579c]"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Nội dung <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.content}
                  onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#00579c] focus:ring-1 focus:ring-[#00579c] resize-none"
                  placeholder="Nội dung liên hệ..."
                />
              </div>
              <p className="text-xs text-gray-400">* Thông tin bắt buộc</p>
              <button
                type="submit"
                className="w-full bg-[#00579c] text-white font-black py-3 rounded-xl hover:bg-[#0067bc] transition shadow-md text-base"
              >
                Gửi Liên Hệ
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

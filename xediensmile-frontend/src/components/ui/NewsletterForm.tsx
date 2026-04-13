"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: connect to email API
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 3000);
  };

  return sent ? (
    <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-semibold">
      ✅ Đăng ký thành công! Cảm ơn bạn.
    </div>
  ) : (
    <form
      onSubmit={handleSubmit}
      className="flex border-2 border-primary rounded-lg overflow-hidden"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Nhập email của bạn..."
        className="flex-1 px-3 py-2 text-sm text-[#4c4c4c] focus:outline-none bg-white"
      />
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 font-bold text-sm hover:bg-primary-light transition"
      >
        GỬI
      </button>
    </form>
  );
}

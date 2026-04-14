import Link from "next/link";

export default function ChinhSachTraGopPage() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#00579c] transition">Trang chủ</Link>
            <span>›</span>
            <span className="text-gray-800 font-semibold">Chính sách trả góp</span>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-black text-[#00579c] uppercase mb-8 text-center">Chính Sách Trả Góp</h1>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-6 text-[#4c4c4c] leading-relaxed text-sm md:text-base">

          {/* Highlight */}
          <div className="bg-[#f0f7ff] rounded-xl border border-[#00579c]/10 p-5 text-center">
            <p className="text-lg font-black text-[#00579c]">Trả Góp 0% Lãi Suất</p>
            <p className="text-sm text-gray-600 mt-1">Áp dụng qua thẻ tín dụng và công ty tài chính đối tác</p>
          </div>

          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              1. Điều Kiện Trả Góp
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Áp dụng cho đơn hàng từ <strong>3.000.000đ</strong> trở lên.</li>
              <li>Khách hàng cần có CMND/CCCD và hộ khẩu thường trú.</li>
              <li>Có thể trả góp qua thẻ tín dụng các ngân hàng: Vietcombank, BIDV, Techcombank, MB Bank, và nhiều ngân hàng khác.</li>
              <li>Hoặc trả góp qua công ty tài chính: Home Credit, FE Credit, Mcredit.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              2. Kỳ Hạn Trả Góp
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["3 tháng", "6 tháng", "12 tháng", "24 tháng"].map((term) => (
                <div key={term} className="text-center p-3 bg-[#f9f9f9] rounded-xl border border-gray-100">
                  <p className="font-black text-[#00579c] text-lg">{term}</p>
                  <p className="text-xs text-gray-500 mt-1">Lãi suất 0%*</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">* Điều kiện áp dụng tùy từng đối tác tài chính</p>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              3. Thủ Tục Trả Góp
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Đến cửa hàng Xe Điện Smile mang theo CCCD.</li>
              <li>Chọn xe và kỳ hạn trả góp phù hợp.</li>
              <li>Ký hợp đồng với đối tác tài chính (khoảng 15–30 phút).</li>
              <li>Nhận xe và bắt đầu trả góp hàng tháng.</li>
            </ol>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              4. Tư Vấn Trả Góp
            </h2>
            <p>Hotline: <a href="tel:0918118508" className="text-[#00579c] font-bold">0918.118.508</a> (Gọi mua hàng &amp; trả góp)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

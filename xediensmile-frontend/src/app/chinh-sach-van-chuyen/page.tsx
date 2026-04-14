import Link from "next/link";

export default function ChinhSachVanChuyenPage() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#00579c] transition">Trang chủ</Link>
            <span>›</span>
            <span className="text-gray-800 font-semibold">Chính sách vận chuyển</span>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-black text-[#00579c] uppercase mb-8 text-center">Chính Sách Vận Chuyển</h1>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-6 text-[#4c4c4c] leading-relaxed text-sm md:text-base">
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              1. Phạm Vi Giao Hàng
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Nội thành TP.HCM:</strong> Giao hàng tận nơi miễn phí.</li>
              <li><strong>Tỉnh thành lân cận:</strong> Giao hàng qua đơn vị vận chuyển đối tác, phí ship theo khoảng cách.</li>
              <li><strong>Toàn quốc:</strong> Hỗ trợ giao hàng, liên hệ để được báo giá cụ thể.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              2. Thời Gian Giao Hàng
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Nội thành TP.HCM: Trong ngày hoặc hôm sau.</li>
              <li>Tỉnh thành lân cận: 1–3 ngày làm việc.</li>
              <li>Các tỉnh xa: 3–7 ngày làm việc.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              3. Lưu Ý Khi Nhận Hàng
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Kiểm tra kỹ sản phẩm trước khi ký nhận.</li>
              <li>Nếu phát hiện hư hỏng trong quá trình vận chuyển, từ chối nhận và liên hệ ngay hotline.</li>
              <li>Giữ lại hóa đơn và phiếu bảo hành để được hỗ trợ sau mua.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              4. Liên Hệ
            </h2>
            <p>Hotline: <a href="tel:0888882887" className="text-[#00579c] font-bold">0888.882.887</a> hoặc <a href="tel:0918118508" className="text-[#00579c] font-bold">0918.118.508</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

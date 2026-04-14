import Link from "next/link";

export default function ChinhSachBaoHanhPage() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#00579c] transition">Trang chủ</Link>
            <span>›</span>
            <span className="text-gray-800 font-semibold">Chính sách bảo hành</span>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-black text-[#00579c] uppercase mb-8 text-center">Chính Sách Bảo Hành</h1>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-6 text-[#4c4c4c] leading-relaxed text-sm md:text-base">
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              1. Thời Gian Bảo Hành
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Xe máy điện: Bảo hành <strong>12 tháng</strong> khung sườn, 6 tháng động cơ và bình ắc quy.</li>
              <li>Xe đạp điện: Bảo hành <strong>12 tháng</strong> khung sườn, 6 tháng động cơ và bình ắc quy.</li>
              <li>Phụ kiện đi kèm: Bảo hành <strong>3 tháng</strong>.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              2. Điều Kiện Bảo Hành
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sản phẩm còn trong thời hạn bảo hành và có phiếu bảo hành hợp lệ.</li>
              <li>Lỗi do nhà sản xuất (lỗi kỹ thuật, vật liệu).</li>
              <li>Sản phẩm không bị tác động ngoại lực, cháy nổ, ngập nước do người dùng.</li>
              <li>Không tự ý tháo lắp, sửa chữa tại nơi khác ngoài trung tâm bảo hành.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              3. Quy Trình Bảo Hành
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Khách hàng mang xe và phiếu bảo hành đến bất kỳ cửa hàng Xe Điện Smile.</li>
              <li>Kỹ thuật viên kiểm tra, xác định lỗi và thông báo thời gian xử lý.</li>
              <li>Bảo hành miễn phí nếu đủ điều kiện; thu phí sửa chữa nếu hết bảo hành hoặc lỗi ngoài phạm vi.</li>
              <li>Khách hàng nhận xe sau khi sửa chữa hoàn tất và kiểm tra lại.</li>
            </ol>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              4. Liên Hệ Bảo Hành
            </h2>
            <p>Hotline hỗ trợ kỹ thuật 24/7: <a href="tel:0969823528" className="text-[#00579c] font-bold hover:text-[#f48f7f] transition">0969.823.528</a></p>
            <p className="mt-1">Hoặc mang xe trực tiếp đến các cửa hàng Xe Điện Smile.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

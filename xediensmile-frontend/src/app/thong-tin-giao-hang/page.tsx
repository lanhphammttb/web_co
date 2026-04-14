import Link from "next/link";

export default function ThongTinGiaoHangPage() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#00579c] transition">Trang chủ</Link>
            <span>›</span>
            <span className="text-gray-800 font-semibold">Hướng dẫn giao nhận</span>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-black text-[#00579c] uppercase mb-8 text-center">Hướng Dẫn Giao Nhận</h1>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-6 text-[#4c4c4c] leading-relaxed text-sm md:text-base">
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              Nhận Hàng Tại Cửa Hàng
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Mang theo hóa đơn đặt hàng hoặc số điện thoại đặt hàng.</li>
              <li>Kiểm tra kỹ xe: khung sườn, lốp, đèn, bộ sạc, phụ kiện kèm theo.</li>
              <li>Ký xác nhận bàn giao và nhận phiếu bảo hành.</li>
              <li>Nhân viên hướng dẫn sử dụng xe và các lưu ý vận hành an toàn.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              Nhận Hàng Qua Giao Hàng
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Nhân viên giao hàng sẽ liên hệ trước khi đến.</li>
              <li>Kiểm tra tình trạng xe trước khi ký nhận.</li>
              <li>Nếu phát hiện hư hỏng do vận chuyển: từ chối nhận và liên hệ ngay <a href="tel:0888882887" className="text-[#00579c] font-bold">0888.882.887</a>.</li>
              <li>Thanh toán COD khi nhận hàng nếu chưa thanh toán trước.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              Sau Khi Nhận Xe
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sạc pin đầy trước lần đầu sử dụng (6–8 tiếng).</li>
              <li>Đăng ký xe theo quy định của địa phương trong vòng 30 ngày.</li>
              <li>Bảo dưỡng định kỳ theo khuyến nghị của nhà sản xuất.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

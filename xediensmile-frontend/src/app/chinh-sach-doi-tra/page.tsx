import Link from "next/link";

export default function ChinhSachDoiTraPage() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#00579c] transition">Trang chủ</Link>
            <span>›</span>
            <span className="text-gray-800 font-semibold">Chính sách đổi trả</span>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-black text-[#00579c] uppercase mb-8 text-center">Chính Sách Đổi Trả</h1>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-6 text-[#4c4c4c] leading-relaxed text-sm md:text-base">
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              1. Điều Kiện Đổi Trả
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sản phẩm được đổi/trả trong vòng <strong>7 ngày</strong> kể từ ngày mua.</li>
              <li>Sản phẩm còn nguyên vẹn, chưa qua sử dụng (hoặc lỗi nhà sản xuất).</li>
              <li>Còn đầy đủ phụ kiện, hộp đựng và hóa đơn mua hàng.</li>
              <li>Lỗi kỹ thuật được xác nhận bởi kỹ thuật viên Xe Điện Smile.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              2. Các Trường Hợp Không Áp Dụng
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sản phẩm đã qua sử dụng (trừ lỗi nhà sản xuất).</li>
              <li>Hư hỏng do tác động bên ngoài: tai nạn, ngập nước, cháy nổ.</li>
              <li>Sản phẩm đã bị tháo lắp, sửa chữa bởi bên thứ ba.</li>
              <li>Không có hóa đơn hoặc phiếu bảo hành.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              3. Quy Trình Đổi Trả
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Liên hệ hotline <a href="tel:0888882887" className="text-[#00579c] font-bold">0888.882.887</a> hoặc đến trực tiếp cửa hàng.</li>
              <li>Kỹ thuật viên kiểm tra và xác nhận lỗi.</li>
              <li>Nếu đủ điều kiện: đổi sản phẩm mới hoặc hoàn tiền trong 3–5 ngày làm việc.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

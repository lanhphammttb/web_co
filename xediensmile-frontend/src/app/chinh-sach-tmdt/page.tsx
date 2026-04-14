import Link from "next/link";

export default function ChinhSachTmdtPage() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#00579c] transition">Trang chủ</Link>
            <span>›</span>
            <span className="text-gray-800 font-semibold">Chính sách mua bán hàng hoá</span>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-black text-[#00579c] uppercase mb-8 text-center">Chính Sách Mua Bán Hàng Hoá</h1>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-6 text-[#4c4c4c] leading-relaxed text-sm md:text-base">
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              1. Cam Kết Hàng Chính Hãng
            </h2>
            <p>Xe Điện Smile cam kết 100% sản phẩm là hàng chính hãng, có nguồn gốc rõ ràng từ các nhà phân phối chính thức tại Việt Nam. Mọi sản phẩm đều có tem nhãn, giấy tờ hợp lệ và chế độ bảo hành theo tiêu chuẩn nhà sản xuất.</p>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              2. Giá Cả
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Giá niêm yết trên website là giá bán lẻ đề xuất, có thể thay đổi theo chương trình khuyến mãi.</li>
              <li>Giá đã bao gồm VAT (trừ trường hợp có ghi chú khác).</li>
              <li>Xe Điện Smile bảo lưu quyền điều chỉnh giá mà không cần thông báo trước.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              3. Xác Nhận Đơn Hàng
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sau khi đặt hàng, nhân viên sẽ liên hệ xác nhận trong vòng 30 phút (trong giờ làm việc).</li>
              <li>Đơn hàng chỉ được xử lý sau khi có xác nhận từ cả hai phía.</li>
              <li>Trường hợp sản phẩm hết hàng, chúng tôi sẽ thông báo và hỗ trợ chọn sản phẩm thay thế.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              4. Thông Tin Doanh Nghiệp
            </h2>
            <div className="p-4 bg-[#f9f9f9] rounded-xl border border-gray-100 text-sm">
              <p><strong>CÔNG TY TNHH XE ĐIỆN SMILE</strong></p>
              <p>GPDKKD: <strong>0319384061</strong></p>
              <p>do Sở Tài Chính TP.HCM cấp ngày 28/01/2026</p>
              <p className="mt-2">Địa chỉ: 285A Hậu Giang, Phường 5, Quận 6, TP.HCM</p>
              <p>Email: Xediensmile@gmail.com</p>
              <p>Hotline: <a href="tel:0888882887" className="text-[#00579c] font-bold">0888.882.887</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

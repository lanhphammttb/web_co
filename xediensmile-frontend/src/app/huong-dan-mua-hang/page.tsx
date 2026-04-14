import Link from "next/link";

export default function HuongDanMuaHangPage() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#00579c] transition">Trang chủ</Link>
            <span>›</span>
            <span className="text-gray-800 font-semibold">Hướng dẫn mua hàng</span>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-black text-[#00579c] uppercase mb-8 text-center">Hướng Dẫn Mua Hàng</h1>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-6 text-[#4c4c4c] leading-relaxed text-sm md:text-base">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { step: "01", title: "Chọn Sản Phẩm", desc: "Duyệt qua danh mục xe hoặc tìm kiếm theo hãng, loại xe. Xem chi tiết thông số kỹ thuật và hình ảnh." },
              { step: "02", title: "Liên Hệ Tư Vấn", desc: "Gọi hotline 0888.882.887 hoặc đến trực tiếp cửa hàng để được tư vấn miễn phí từ chuyên viên." },
              { step: "03", title: "Đặt Hàng", desc: "Xác nhận sản phẩm, màu sắc và phương thức thanh toán. Ký hợp đồng mua bán nếu cần." },
              { step: "04", title: "Thanh Toán", desc: "Thanh toán tiền mặt, chuyển khoản, quẹt thẻ hoặc trả góp. Nhận hóa đơn và phiếu bảo hành." },
              { step: "05", title: "Nhận Xe", desc: "Nhận xe tại cửa hàng hoặc được giao tận nơi (nội thành TP.HCM miễn phí). Kiểm tra kỹ trước khi nhận." },
              { step: "06", title: "Hậu Mãi", desc: "Hỗ trợ kỹ thuật 24/7 qua hotline 0969.823.528. Bảo dưỡng định kỳ tại bất kỳ cửa hàng Smile." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 bg-[#f9f9f9] rounded-xl border border-gray-100">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#00579c] text-white flex items-center justify-center font-black text-sm">
                  {item.step}
                </div>
                <div>
                  <p className="font-bold text-[#00579c] text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-3">Cần hỗ trợ thêm?</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="tel:0888882887" className="px-6 py-2.5 bg-[#00579c] text-white font-bold rounded-full text-sm hover:bg-[#0067bc] transition">
                Gọi 0888.882.887
              </a>
              <Link href="/lien-he" className="px-6 py-2.5 border-2 border-[#00579c] text-[#00579c] font-bold rounded-full text-sm hover:bg-[#00579c] hover:text-white transition">
                Gửi Tin Nhắn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

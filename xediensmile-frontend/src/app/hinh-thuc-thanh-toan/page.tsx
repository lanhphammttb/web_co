import Link from "next/link";

export default function HinhThucThanhToanPage() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#00579c] transition">Trang chủ</Link>
            <span>›</span>
            <span className="text-gray-800 font-semibold">Hướng dẫn thanh toán</span>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-black text-[#00579c] uppercase mb-8 text-center">Hình Thức Thanh Toán</h1>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-6 text-[#4c4c4c] leading-relaxed text-sm md:text-base">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: "💵", title: "Tiền Mặt (COD)", desc: "Thanh toán trực tiếp tại cửa hàng hoặc khi nhận hàng. Kiểm tra sản phẩm trước khi thanh toán." },
              { icon: "🏦", title: "Chuyển Khoản Ngân Hàng", desc: "Chuyển khoản qua tài khoản ngân hàng Xe Điện Smile. Nhân viên xác nhận và xử lý đơn hàng sau khi nhận được tiền." },
              { icon: "💳", title: "Quẹt Thẻ Tại Cửa Hàng", desc: "Hỗ trợ thanh toán bằng thẻ VISA, Mastercard, ATM nội địa tại tất cả các cửa hàng Xe Điện Smile." },
              { icon: "📱", title: "Ví Điện Tử", desc: "Hỗ trợ thanh toán qua ZaloPay, MoMo. Nhanh chóng và tiện lợi, không phí chuyển đổi." },
              { icon: "🤝", title: "Trả Góp 0% Lãi Suất", desc: "Trả góp qua thẻ tín dụng hoặc công ty tài chính đối tác. Xem thêm tại Chính sách trả góp." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-4 bg-[#f9f9f9] rounded-xl border border-gray-100">
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-[#00579c] text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 bg-[#f0f7ff] rounded-xl border border-[#00579c]/10">
            <p className="font-bold text-[#00579c] mb-2">Thông Tin Chuyển Khoản</p>
            <p><strong>Ngân hàng:</strong> Vietcombank</p>
            <p><strong>Chủ tài khoản:</strong> CÔNG TY TNHH XE ĐIỆN SMILE</p>
            <p><strong>Nội dung:</strong> [Họ tên] - [Số điện thoại] - Mua xe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

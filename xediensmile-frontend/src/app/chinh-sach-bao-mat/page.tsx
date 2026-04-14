import Link from "next/link";

export default function ChinhSachBaoMatPage() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#00579c] transition">Trang chủ</Link>
            <span>›</span>
            <span className="text-gray-800 font-semibold">Chính sách bảo mật</span>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-black text-[#00579c] uppercase mb-8 text-center">Chính Sách Bảo Mật</h1>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-6 text-[#4c4c4c] leading-relaxed text-sm md:text-base">
          <p>Xe Điện Smile cam kết bảo vệ thông tin cá nhân của khách hàng. Chính sách này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn.</p>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              1. Thông Tin Thu Thập
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Họ tên, số điện thoại, địa chỉ email khi đặt hàng hoặc liên hệ.</li>
              <li>Địa chỉ giao hàng khi mua hàng online.</li>
              <li>Thông tin thiết bị và nhật ký truy cập (cookies, IP) để cải thiện trải nghiệm.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              2. Mục Đích Sử Dụng
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Xử lý đơn hàng và liên hệ tư vấn, hỗ trợ khách hàng.</li>
              <li>Gửi thông báo khuyến mãi, tin tức xe điện (nếu khách đồng ý).</li>
              <li>Cải thiện chất lượng dịch vụ và trải nghiệm người dùng.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              3. Cam Kết Bảo Mật
            </h2>
            <p>Chúng tôi không chia sẻ thông tin cá nhân của khách hàng với bên thứ ba, trừ trường hợp pháp luật yêu cầu hoặc khi có sự đồng ý của khách hàng. Mọi thông tin được bảo mật theo tiêu chuẩn an toàn thông tin hiện hành.</p>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              4. Liên Hệ
            </h2>
            <p>Nếu có thắc mắc về chính sách bảo mật, vui lòng liên hệ: <a href="tel:0888882887" className="text-[#00579c] font-bold">0888.882.887</a> hoặc email <span className="text-[#00579c]">Xediensmile@gmail.com</span>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

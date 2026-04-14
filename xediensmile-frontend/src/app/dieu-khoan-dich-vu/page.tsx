import Link from "next/link";

export default function DieuKhoanDichVuPage() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#00579c] transition">Trang chủ</Link>
            <span>›</span>
            <span className="text-gray-800 font-semibold">Điều khoản dịch vụ</span>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-black text-[#00579c] uppercase mb-8 text-center">Điều Khoản Dịch Vụ</h1>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-6 text-[#4c4c4c] leading-relaxed text-sm md:text-base">
          <p>Khi sử dụng dịch vụ mua hàng tại Xe Điện Smile (trực tiếp hoặc trực tuyến), quý khách đồng ý tuân thủ các điều khoản dưới đây.</p>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              1. Quy Định Chung
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Khách hàng phải từ 18 tuổi trở lên hoặc có sự giám sát của người thành niên.</li>
              <li>Thông tin cung cấp khi đặt hàng phải chính xác và trung thực.</li>
              <li>Xe Điện Smile có quyền từ chối phục vụ nếu phát hiện thông tin gian lận.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              2. Quyền và Nghĩa Vụ Của Khách Hàng
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Được tư vấn, hỗ trợ trước và sau mua hàng.</li>
              <li>Được bảo hành, đổi trả theo đúng chính sách đã công bố.</li>
              <li>Thanh toán đầy đủ và đúng hạn theo phương thức đã chọn.</li>
              <li>Không sử dụng sản phẩm vào mục đích vi phạm pháp luật.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              3. Giới Hạn Trách Nhiệm
            </h2>
            <p>Xe Điện Smile không chịu trách nhiệm về các thiệt hại phát sinh do khách hàng sử dụng sản phẩm sai mục đích, không tuân thủ hướng dẫn sử dụng của nhà sản xuất hoặc do tai nạn giao thông.</p>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              4. Thay Đổi Điều Khoản
            </h2>
            <p>Xe Điện Smile có quyền cập nhật điều khoản dịch vụ bất kỳ lúc nào. Thay đổi sẽ được thông báo trên website. Việc tiếp tục sử dụng dịch vụ đồng nghĩa với việc chấp nhận điều khoản mới.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

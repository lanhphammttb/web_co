import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#00579c] transition">Trang chủ</Link>
            <span>›</span>
            <span className="text-gray-800 font-semibold">Về Xe Điện Smile</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-black text-[#00579c] uppercase mb-8 text-center">Về Xe Điện Smile</h1>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-8 text-[#4c4c4c] leading-relaxed">

          {/* Hero statement */}
          <div className="text-center py-6 bg-[#f0f7ff] rounded-xl border border-[#00579c]/10">
            <p className="text-lg md:text-xl font-black text-[#00579c] italic">
              "Bán Xe Chính Hãng, Là Tôn Trọng Khách Hàng!"
            </p>
            <p className="text-sm text-gray-500 mt-2">Phương châm hoạt động của Xe Điện Smile</p>
          </div>

          {/* Intro */}
          <div>
            <p className="text-sm md:text-base">
              Đây chính là kim chỉ nam, là phương châm hoạt động mà <strong>Xe Điện Smile</strong> luôn đặt lên hàng đầu kể từ ngày đầu thành lập. Tự hào là hệ thống cửa hàng uy tín, chuyên phân phối các dòng xe đạp điện, xe máy điện và phụ tùng chính hãng tại TP.HCM, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm chất lượng, an toàn cùng dịch vụ hậu mãi chu đáo nhất.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              Tầm Nhìn
            </h2>
            <p className="text-sm md:text-base">
              Xe Điện Smile hướng đến mục tiêu trở thành hệ thống phân phối xe điện hàng đầu tại TP.HCM và khu vực phía Nam, tiên phong trong việc mang đến những giải pháp di chuyển xanh, thông minh và thân thiện với môi trường cho cộng đồng. Chúng tôi mong muốn góp phần xây dựng một tương lai giao thông bền vững và nâng cao chất lượng cuộc sống của người dân.
            </p>
          </div>

          {/* Core values */}
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              Giá Trị Cốt Lõi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🏆", title: "Chính hãng", desc: "Cam kết 100% sản phẩm là hàng chính hãng, có nguồn gốc rõ ràng và được kiểm định chất lượng nghiêm ngặt." },
                { icon: "🤝", title: "Uy tín",      desc: "Sự tin tưởng của khách hàng là tài sản vô giá. Chúng tôi luôn đặt chữ tín lên hàng đầu trong mọi hoạt động kinh doanh." },
                { icon: "⭐", title: "Chất lượng",  desc: "Chúng tôi lựa chọn những sản phẩm tốt nhất, đảm bảo độ bền và hiệu suất hoạt động tối ưu." },
                { icon: "🛡️", title: "An toàn",    desc: "An toàn của khách hàng luôn là ưu tiên hàng đầu. Chúng tôi chỉ cung cấp sản phẩm đáp ứng các tiêu chuẩn an toàn cao nhất." },
                { icon: "💛", title: "Tận tâm",     desc: "Đội ngũ nhân viên luôn nhiệt tình, tận tâm tư vấn và hỗ trợ khách hàng một cách tốt nhất." },
              ].map((v) => (
                <div key={v.title} className="flex gap-3 p-4 bg-[#f9f9f9] rounded-xl border border-gray-100">
                  <span className="text-2xl shrink-0">{v.icon}</span>
                  <div>
                    <p className="font-bold text-[#00579c] text-sm mb-1">{v.title}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              Sứ Mệnh
            </h2>
            <p className="text-sm md:text-base">
              Sứ mệnh của Xe Điện Smile là mang đến cho khách hàng những sản phẩm xe điện chính hãng với giá tốt nhất, dịch vụ chăm sóc khách hàng tận tâm và chuyên nghiệp nhất. Chúng tôi cam kết đồng hành cùng khách hàng trên từng chặng đường, từ khi lựa chọn sản phẩm đến dịch vụ bảo hành hậu mãi lâu dài.
            </p>
          </div>

          {/* System */}
          <div>
            <h2 className="text-lg font-black text-[#333] uppercase mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#00579c] rounded-full"></span>
              Hệ Thống Cửa Hàng
            </h2>
            <div className="space-y-3">
              {[
                { name: "Trụ sở chính", addr: "285A Hậu Giang, Phường 5, Quận 6, TP.HCM" },
                { name: "Chi nhánh 2",  addr: "188 Lạc Long Quân, P.3, Q.11, TP.HCM" },
                { name: "Chi nhánh 3",  addr: "190 Lạc Long Quân, P.3, Q.11, TP.HCM" },
              ].map((branch) => (
                <div key={branch.name} className="flex items-start gap-3 p-4 bg-[#f0f7ff] rounded-xl border border-[#00579c]/10">
                  <span className="text-[#00579c] text-lg mt-0.5">📍</span>
                  <div>
                    <p className="font-bold text-[#00579c] text-sm">{branch.name}</p>
                    <p className="text-sm text-gray-700">{branch.addr}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <Link
              href="/lien-he"
              className="inline-block px-8 py-3 bg-[#00579c] text-white font-black rounded-full hover:bg-[#0067bc] transition shadow-md text-base"
            >
              Liên Hệ Với Chúng Tôi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

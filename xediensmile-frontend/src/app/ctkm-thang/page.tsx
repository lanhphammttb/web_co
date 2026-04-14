import Link from "next/link";

const PROMOTIONS = [
  {
    id: 1,
    slug: "khuyen-mai-mua-xe-tang-mu-bao-hiem",
    title: "Mua Xe Tặng Mũ Bảo Hiểm Cao Cấp",
    date: "01/04/2026",
    excerpt: "Tháng 4 này, khi mua bất kỳ dòng xe điện nào tại Xe Điện Smile, quý khách sẽ được tặng kèm mũ bảo hiểm cao cấp trị giá 350.000đ.",
    tag: "Tháng 4/2026",
  },
  {
    id: 2,
    slug: "tra-gop-0-phan-tram-lai-suat",
    title: "Trả Góp 0% Lãi Suất – Sở Hữu Xe Điện Ngay Hôm Nay",
    date: "01/04/2026",
    excerpt: "Chương trình trả góp 0% lãi suất áp dụng cho tất cả các dòng xe điện trong tháng 4. Trả trước chỉ từ 30%, phần còn lại chia đều 12 tháng.",
    tag: "Tháng 4/2026",
  },
  {
    id: 3,
    slug: "mua-xe-duoc-bao-duong-mien-phi-1-nam",
    title: "Mua Xe Được Bảo Dưỡng Miễn Phí 1 Năm",
    date: "01/04/2026",
    excerpt: "Tặng gói bảo dưỡng miễn phí 1 năm (4 lần/năm) khi mua xe tại cửa hàng trong tháng 4. Áp dụng cho tất cả dòng xe máy điện và xe đạp điện.",
    tag: "Tháng 4/2026",
  },
  {
    id: 4,
    slug: "giam-gia-den-3-trieu-dong-xe-yadea",
    title: "Giảm Giá Đến 3 Triệu Đồng Dòng Xe Yadea",
    date: "15/03/2026",
    excerpt: "Ưu đãi đặc biệt cho dòng xe Yadea – giảm trực tiếp từ 1 đến 3 triệu đồng tuỳ model. Số lượng có hạn, mua ngay kẻo hết!",
    tag: "Tháng 3/2026",
  },
  {
    id: 5,
    slug: "tang-binh-sac-khi-mua-xe-vinfast",
    title: "Tặng Bình Sạc Dự Phòng Khi Mua Xe VinFast",
    date: "15/03/2026",
    excerpt: "Riêng tháng 3, mua xe VinFast tại Xe Điện Smile – nhận ngay bình sạc dự phòng 10.000mAh chính hãng trị giá 450.000đ.",
    tag: "Tháng 3/2026",
  },
  {
    id: 6,
    slug: "doi-xe-cu-lay-xe-moi-giam-them-2-trieu",
    title: "Đổi Xe Cũ – Lấy Xe Mới Giảm Thêm 2 Triệu",
    date: "01/03/2026",
    excerpt: "Chương trình thu mua xe cũ, đổi xe mới với mức giảm thêm 2.000.000đ khi mang xe cũ (bất kỳ hãng) đến Xe Điện Smile.",
    tag: "Tháng 3/2026",
  },
];

export default function CTKMThangPage() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#00579c] transition">Trang chủ</Link>
            <span>›</span>
            <span className="text-gray-800 font-semibold">CTKM Tháng</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-2xl md:text-3xl font-black text-[#00579c] uppercase mb-8 text-center">
          Chương Trình Khuyến Mãi
        </h1>

        {/* Banner */}
        <div className="bg-gradient-to-r from-[#00579c] to-[#0081c6] rounded-2xl p-6 md:p-8 mb-8 text-white text-center shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-2">Xe Điện Smile</p>
          <p className="text-xl md:text-2xl font-black mb-3">Ưu Đãi Hấp Dẫn – Riêng Tháng Này!</p>
          <p className="text-sm opacity-90">Cập nhật các chương trình khuyến mãi mới nhất, áp dụng tại tất cả cửa hàng Xe Điện Smile.</p>
        </div>

        {/* Promotions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROMOTIONS.map((promo) => (
            <article key={promo.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group">
              {/* Promo color block as visual placeholder */}
              <div className="h-40 bg-gradient-to-br from-[#00579c]/10 to-[#f48f7f]/10 flex items-center justify-center">
                <div className="text-center px-6">
                  <span className="inline-block px-3 py-1 bg-[#f48f7f] text-white text-xs font-bold rounded-full mb-2">
                    {promo.tag}
                  </span>
                  <p className="text-4xl">🎁</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-400 mb-2">{promo.date}</p>
                <h2 className="font-black text-[#222] text-base mb-2 group-hover:text-[#00579c] transition leading-snug">
                  <Link href={`/ctkm-thang/${promo.slug}`}>{promo.title}</Link>
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{promo.excerpt}</p>
                <Link
                  href={`/ctkm-thang/${promo.slug}`}
                  className="inline-block mt-4 text-sm font-bold text-[#00579c] hover:text-[#f48f7f] transition"
                >
                  Xem chi tiết →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 mb-4">Muốn biết thêm về các chương trình ưu đãi?</p>
          <Link
            href="/lien-he"
            className="inline-block px-8 py-3 bg-[#00579c] text-white font-black rounded-full hover:bg-[#0067bc] transition shadow-md text-base"
          >
            Liên Hệ Ngay
          </Link>
        </div>
      </div>
    </div>
  );
}

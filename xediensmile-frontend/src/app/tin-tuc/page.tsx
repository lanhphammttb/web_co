import Link from "next/link";

const POSTS = [
  {
    id: 1,
    slug: "xe-dap-dien-hay-xe-may-dien-nen-chon-loai-nao",
    title: "Xe Đạp Điện Hay Xe Máy Điện – Nên Chọn Loại Nào?",
    date: "10/04/2026",
    category: "Tư vấn",
    excerpt: "Bạn đang phân vân giữa xe đạp điện và xe máy điện? Bài viết này sẽ giúp bạn so sánh ưu nhược điểm của từng loại để đưa ra lựa chọn phù hợp nhất.",
  },
  {
    id: 2,
    slug: "top-5-xe-may-dien-ban-chay-nhat-thang-4-2026",
    title: "Top 5 Xe Máy Điện Bán Chạy Nhất Tháng 4/2026 Tại Xe Điện Smile",
    date: "07/04/2026",
    category: "Tin tức",
    excerpt: "Cùng điểm qua 5 mẫu xe máy điện được khách hàng lựa chọn nhiều nhất trong tháng 4 tại hệ thống cửa hàng Xe Điện Smile TP.HCM.",
  },
  {
    id: 3,
    slug: "cach-bao-quan-pin-xe-dien-dung-cach",
    title: "Cách Bảo Quản Pin Xe Điện Đúng Cách Để Kéo Dài Tuổi Thọ",
    date: "03/04/2026",
    category: "Kinh nghiệm",
    excerpt: "Pin là linh kiện quan trọng nhất của xe điện. Dưới đây là những lưu ý quan trọng để bảo quản pin đúng cách, giúp tăng tuổi thọ và tiết kiệm chi phí.",
  },
  {
    id: 4,
    slug: "yadea-g5-lite-danh-gia-chi-tiet",
    title: "Đánh Giá Chi Tiết Yadea G5 Lite – Mẫu Xe Điện Tiết Kiệm Cho Học Sinh",
    date: "28/03/2026",
    category: "Review xe",
    excerpt: "Yadea G5 Lite có thiết kế trẻ trung, mức giá hợp lý và phù hợp với nhu cầu đi học hàng ngày. Hãy cùng Xe Điện Smile đánh giá chi tiết mẫu xe này!",
  },
  {
    id: 5,
    slug: "xe-dien-vinfast-klara-s-2026-co-gi-moi",
    title: "VinFast Klara S 2026 Có Gì Mới? Nâng Cấp Đáng Giá Hay Không?",
    date: "22/03/2026",
    category: "Review xe",
    excerpt: "VinFast Klara S 2026 ra mắt với nhiều cải tiến đáng chú ý. Bài viết phân tích những điểm mới và đánh giá liệu đây có phải lựa chọn đáng tiền.",
  },
  {
    id: 6,
    slug: "huong-dan-dang-ky-xe-dien-tai-tphcm-2026",
    title: "Hướng Dẫn Đăng Ký Xe Điện Tại TP.HCM Năm 2026 – Thủ Tục Mới Nhất",
    date: "15/03/2026",
    category: "Hướng dẫn",
    excerpt: "Thủ tục đăng ký xe điện tại TP.HCM có những thay đổi mới từ 2026. Bài viết hướng dẫn đầy đủ các bước để bạn hoàn tất thủ tục nhanh chóng.",
  },
];

const CATEGORIES = ["Tất cả", "Tin tức", "Tư vấn", "Review xe", "Kinh nghiệm", "Hướng dẫn"];

export default function TinTucPage() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#00579c] transition">Trang chủ</Link>
            <span>›</span>
            <span className="text-gray-800 font-semibold">Tin tức</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-2xl md:text-3xl font-black text-[#00579c] uppercase mb-6 text-center">
          Tin Tức Xe Điện
        </h1>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition ${
                cat === "Tất cả"
                  ? "bg-[#00579c] text-white border-[#00579c]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#00579c] hover:text-[#00579c]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group">
              {/* Image placeholder */}
              <div className="h-44 bg-gradient-to-br from-[#00579c]/10 to-[#00579c]/5 flex items-center justify-center">
                <span className="text-5xl">📰</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[#00579c]/10 text-[#00579c] text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h2 className="font-black text-[#222] text-sm mb-2 group-hover:text-[#00579c] transition leading-snug line-clamp-2">
                  <Link href={`/tin-tuc/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <Link
                  href={`/tin-tuc/${post.slug}`}
                  className="inline-block mt-3 text-xs font-bold text-[#00579c] hover:text-[#f48f7f] transition"
                >
                  Đọc tiếp →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="flex justify-center gap-2 mt-10">
          <button className="w-9 h-9 rounded-lg bg-[#00579c] text-white font-bold text-sm flex items-center justify-center">1</button>
          <button className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-600 font-bold text-sm flex items-center justify-center hover:border-[#00579c] hover:text-[#00579c] transition">2</button>
          <button className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-600 font-bold text-sm flex items-center justify-center hover:border-[#00579c] hover:text-[#00579c] transition">3</button>
        </div>
      </div>
    </div>
  );
}

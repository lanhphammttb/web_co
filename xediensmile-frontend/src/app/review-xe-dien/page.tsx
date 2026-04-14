import Link from "next/link";

const REVIEWS = [
  {
    id: 1,
    slug: "review-yadea-g5-lite-2026",
    title: "Review Yadea G5 Lite 2026 – Xe Điện Học Sinh Đáng Mua Nhất?",
    date: "08/04/2026",
    brand: "Yadea",
    excerpt: "Yadea G5 Lite sở hữu thiết kế trẻ trung, trang bị ổn với mức giá phân khúc học sinh. Cùng Khoa Smile review chi tiết mẫu xe này!",
    rating: 4.5,
  },
  {
    id: 2,
    slug: "review-vinfast-klara-s-2026",
    title: "Review VinFast Klara S 2026 – Xe Điện Quốc Dân Có Còn Đáng Mua?",
    date: "02/04/2026",
    brand: "VinFast",
    excerpt: "VinFast Klara S 2026 nâng cấp phanh đĩa và màn hình LCD. Khoa Smile đánh giá liệu có xứng đáng với mức giá mới?",
    rating: 4,
  },
  {
    id: 3,
    slug: "review-dk-bike-dk9-pro",
    title: "Review DK Bike DK9 Pro – Xe Điện Thể Thao Giá Tốt",
    date: "25/03/2026",
    brand: "DK Bike",
    excerpt: "DK9 Pro gây ấn tượng với thiết kế thể thao, động cơ mạnh 1200W và tốc độ tối đa 65km/h. Đánh giá toàn diện từ Xe Điện Smile.",
    rating: 4,
  },
  {
    id: 4,
    slug: "review-jvceco-nina-pro-s",
    title: "Review JVCeco Nina Pro S – Xe Điện Mini Cho Nữ Sinh",
    date: "18/03/2026",
    brand: "JVCeco",
    excerpt: "JVCeco Nina Pro S thiết kế nhỏ gọn, màu sắc đa dạng và dễ điều khiển. Phù hợp cho nữ sinh và người mới tập đi xe điện.",
    rating: 4.5,
  },
  {
    id: 5,
    slug: "review-dibao-gogo-2026",
    title: "Review Dibao GoGo 2026 – Xe Điện Mini Cực Cute",
    date: "10/03/2026",
    brand: "Dibao",
    excerpt: "Dibao GoGo 2026 cực kỳ dễ thương với nhiều màu pastel. Pin lithium 48V/20Ah, quãng đường 70km. Review chi tiết từ Khoa Smile.",
    rating: 4,
  },
  {
    id: 6,
    slug: "review-osakar-dk-200-xe-may-dien-gia-re",
    title: "Review Osakar DK200 – Xe Máy Điện Giá Rẻ Có Đáng Mua?",
    date: "01/03/2026",
    brand: "Osakar",
    excerpt: "Osakar DK200 giá chỉ từ 15 triệu nhưng có đáng tin cậy? Khoa Smile kiểm tra thực tế và đưa ra đánh giá khách quan nhất.",
    rating: 3.5,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={`text-sm ${s <= Math.floor(rating) ? "text-yellow-400" : s - 0.5 <= rating ? "text-yellow-300" : "text-gray-300"}`}>★</span>
      ))}
      <span className="text-xs text-gray-500 ml-1">{rating}/5</span>
    </div>
  );
}

export default function ReviewXeDienPage() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#00579c] transition">Trang chủ</Link>
            <span>›</span>
            <span className="text-gray-800 font-semibold">Review xe điện</span>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-2xl md:text-3xl font-black text-[#00579c] uppercase mb-8 text-center">
          Review Xe Điện Cùng Khoa Smile
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((review) => (
            <article key={review.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group">
              <div className="h-44 bg-gradient-to-br from-[#00579c]/10 to-[#00579c]/5 flex items-center justify-center relative">
                <span className="text-5xl">🛵</span>
                <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#00579c] text-white text-xs font-bold rounded-full">{review.brand}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <Stars rating={review.rating} />
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
                <h2 className="font-black text-[#222] text-sm mb-2 group-hover:text-[#00579c] transition leading-snug line-clamp-2">
                  <Link href={`/review-xe-dien/${review.slug}`}>{review.title}</Link>
                </h2>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{review.excerpt}</p>
                <Link
                  href={`/review-xe-dien/${review.slug}`}
                  className="inline-block mt-3 text-xs font-bold text-[#00579c] hover:text-[#f48f7f] transition"
                >
                  Xem review →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

const VIDEOS = [
  {
    id: 1,
    title: "Review Yadea G5 Lite 2026 | Xe Điện Học Sinh Đáng Mua Nhất?",
    date: "08/04/2026",
    views: "12.4K",
    duration: "12:35",
  },
  {
    id: 2,
    title: "Top 5 Xe Máy Điện Bán Chạy Tháng 4/2026 | Xe Điện Smile",
    date: "05/04/2026",
    views: "8.7K",
    duration: "9:20",
  },
  {
    id: 3,
    title: "So Sánh VinFast Klara S vs Yadea G5 Lite 2026 – Chọn Xe Nào?",
    date: "01/04/2026",
    views: "18.2K",
    duration: "15:48",
  },
  {
    id: 4,
    title: "Review DK Bike DK9 Pro – Xe Máy Điện Thể Thao Giá Tốt Nhất?",
    date: "25/03/2026",
    views: "9.1K",
    duration: "11:02",
  },
  {
    id: 5,
    title: "Cách Bảo Dưỡng Pin Xe Điện Đúng Cách | Mẹo Kéo Dài Tuổi Thọ Pin",
    date: "20/03/2026",
    views: "22.5K",
    duration: "8:15",
  },
  {
    id: 6,
    title: "Hướng Dẫn Đăng Ký Xe Điện Tại TP.HCM 2026 | Thủ Tục Mới Nhất",
    date: "15/03/2026",
    views: "31.0K",
    duration: "7:30",
  },
  {
    id: 7,
    title: "JVCeco Nina Pro S – Xe Điện Mini Đáng Yêu Nhất Cho Nữ Sinh",
    date: "10/03/2026",
    views: "14.3K",
    duration: "10:45",
  },
  {
    id: 8,
    title: "Dibao GoGo 2026 – Unbox & Review Chi Tiết | Xe Điện Smile",
    date: "03/03/2026",
    views: "7.6K",
    duration: "13:22",
  },
];

export default function VideoPage() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#00579c] transition">Trang chủ</Link>
            <span>›</span>
            <span className="text-gray-800 font-semibold">Video</span>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-2xl md:text-3xl font-black text-[#00579c] uppercase mb-4 text-center">
          Video Xe Điện Smile
        </h1>
        <p className="text-center text-sm text-gray-500 mb-8">
          Theo dõi kênh YouTube của Xe Điện Smile để xem các video review, so sánh xe và mẹo sử dụng xe điện.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {VIDEOS.map((video) => (
            <div key={video.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group cursor-pointer">
              {/* Thumbnail placeholder */}
              <div className="relative h-36 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                  <span className="text-white text-lg ml-1">▶</span>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-mono">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#222] text-xs leading-snug line-clamp-2 group-hover:text-[#00579c] transition mb-2">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{video.views} lượt xem</span>
                  <span>{video.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube subscribe CTA */}
        <div className="mt-10 text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          <p className="text-2xl mb-2">▶</p>
          <p className="font-black text-[#333] mb-1">Xem Thêm Trên YouTube</p>
          <p className="text-sm text-gray-500 mb-4">Đăng ký kênh để không bỏ lỡ các video review xe điện mới nhất!</p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-red-600 text-white font-black rounded-full hover:bg-red-700 transition shadow-md text-sm"
          >
            Đăng Ký Kênh YouTube
          </a>
        </div>
      </div>
    </div>
  );
}

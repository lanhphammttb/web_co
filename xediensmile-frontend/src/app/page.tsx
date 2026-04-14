import Link from "next/link";
import BannerSlider from "../components/ui/BannerSlider";
import ProductCard from "../components/ui/ProductCard";
import CountdownTimer from "../components/ui/CountdownTimer";

export const dynamic = "force-dynamic";

const API = "http://localhost:5001/api";

async function fetchJSON<T>(url: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return fallback;
    return res.json();
  } catch {
    return fallback;
  }
}

const CATEGORIES = [
  { label: "Xe Máy Điện", slug: "xe-may-dien",  icon: "🏍️" },
  { label: "Xe Đạp Điện", slug: "xe-dap-dien",  icon: "🚲" },
  { label: "Xe 50CC",     slug: "xe-may-50cc",  icon: "🛵" },
  { label: "Phụ Kiện",   slug: "phu-kien",      icon: "🔧" },
];

const REVIEWS = [
  {
    thumb: "🎬",
    title: "DIBAO LS007 | Xe Điện Kiểu Dáng Sang Như SH Mà Giá Rẻ Chưa Từng Thấy",
    label: "Review chi tiết",
    href: "/review-xe-dien",
  },
  {
    thumb: "🎬",
    title: "Thử thách CHO NGƯỜI LẠ MƯỢN XE ĐIỆN JVC ZH và cái kết",
    label: "Review chi tiết",
    href: "/review-xe-dien",
  },
  {
    thumb: "🎬",
    title: "Review XE ĐIỆN HOTTREND TAKASHI MONO Phiên bản Christian Dior",
    label: "Review chi tiết",
    href: "/review-xe-dien",
  },
  {
    thumb: "🎬",
    title: "Review Chi Tiết Xe Điện Vespa JVC V6 | Dòng Xe Đỉnh Cao Công Nghệ Thời 5.0",
    label: "Review chi tiết",
    href: "/review-xe-dien",
  },
];

const TESTIMONIALS = [
  {
    name: "Hoàng Minh",
    title: "Nhân Viên IT",
    text: "Đi sửa chiếc xe điện, đi 3,4 tiệm toàn bị từ chối. Tình cờ đi ngang qua Smile. Thấy các bạn tư vấn và tiếp nhận nhiệt tình. Bên này cũng nhận sửa chữa luôn. Rất thuyết phục.",
  },
  {
    name: "Thanh Trúc",
    title: "KDOL Thời Trang",
    text: "Điều mình cảm thấy ưng khi mua xe tại Smile là sự minh bạch, các chính sách đều rất rõ ràng. Mua xe điện được bảo hành giá – trong vòng 3 ngày tìm thấy giá tốt hơn bên Smile hoàn tiền chênh lệch.",
  },
  {
    name: "Khả Uyên",
    title: "Model ảnh",
    text: "Mua online chiếc đầu tiên ở nơi khác, hư gọi điện nhân viên cứ từ chối bảo hành. Chiếc thứ hai mình chọn Smile, ghé mua offline tại cửa hàng. Các bạn tư vấn rõ ràng, minh bạch. Nói chung là mình cảm thấy hài lòng.",
  },
  {
    name: "Hoàng Phong",
    title: "CEO Nội Thất Hoàng Phong",
    text: "2 vợ chồng định mua xe điện Vinfast nhưng không ưng vụ thuê pin. Tình cờ coi video của cậu Khoa Smile rồi ghé cửa hàng tham khảo. Bạn tư vấn khéo léo, nhiệt tình, cả nhà chốt được em xe đạp điện đẹp.",
  },
  {
    name: "Yên Nhi",
    title: "Hot Tiktoker",
    text: "Mê mẫu xe điện hotgirl, hỏi 3,4 chỗ toàn không đủ màu, giá toàn 14-16tr. Chi nhánh Quận 6 đủ mẫu và màu luôn, giá lại rất hợp ví. Biết ai mua nhất định giới thiệu.",
  },
  {
    name: "Gia Bảo",
    title: "Chủ doanh nghiệp",
    text: "Tham khảo mẫu xe ba bánh tại Xe Điện Smile. Xe đẹp, chắc. Bạn chủ shop tư vấn online rất ok. Mình đã chọn được xe cho ba mẹ. Chúc cửa hàng bán tâm huyết như Xe Điện Smile phát triển tốt.",
  },
];

const PROMOTIONS = [
  {
    date: "04/03/2026",
    author: "Nguyễn Hùng",
    title: "[CHƯƠNG TRÌNH 8/3] QUÀ SHE MÊ, CHUẨN GU KHỎI CHÊ CÙNG XE ĐIỆN SMILE",
    excerpt:
      "Một món quà đúng gu không chỉ nằm ở giá trị vật chất, mà còn ở sự tinh tế và quan tâm chân thành bạn dành cho cô ấy.",
    href: "/ctkm-thang",
  },
  {
    date: "09/02/2026",
    author: "Nguyễn Hùng",
    title: "[Valentine 2026] Rước Xế Về Dinh – Lung Linh Tình Cảm Cùng Xe Điện Smile",
    excerpt:
      "Valentine 2026 này, đừng để những buổi hẹn hò trở nên nhàm chán. Hãy biến chiếc xe điện thành người bạn đồng hành chứng kiến khoảnh khắc ngọt ngào.",
    href: "/ctkm-thang",
  },
  {
    date: "05/01/2026",
    author: "Khoa Smile",
    title: "Tết Đến Xuân Về – Lên Xe Mới, Đón Lộc Đầu Năm",
    excerpt:
      "Trong không khí se lạnh của những ngày cuối năm, phố xá trở nên nhộn nhịp hơn. Xe Điện Smile vô cùng biết ơn vì đã được quý khách hàng tin chọn và đồng hành.",
    href: "/ctkm-thang",
  },
];

export default async function HomePage() {
  const [banners, allProducts] = await Promise.all([
    fetchJSON<any[]>(`${API}/banners`, []),
    fetchJSON<any[]>(`${API}/products`, []),
  ]);

  const activeBanners = banners.filter((b: any) => b.isActive);
  const hotProducts   = allProducts.slice(0, 10);
  const xeMayDien     = allProducts.filter((p: any) => /máy điện/i.test(p.category)).slice(0, 10);
  const xeDapDien     = allProducts.filter((p: any) => /đạp điện/i.test(p.category)).slice(0, 10);
  const xe50cc        = allProducts.filter((p: any) => /50cc/i.test(p.category)).slice(0, 10);

  return (
    <div className="flex flex-col">

      {/* ── 1. BANNER SLIDER ── */}
      <section className="w-full bg-white shadow-sm">
        <BannerSlider banners={activeBanners} />
      </section>

      {/* ── 2. SERVICE STRIP ── */}
      <section className="bg-primary py-4 mt-2">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "🚚", title: "Giao Hàng Miễn Phí",         sub: "Toàn quốc cho đơn từ 500K" },
            { icon: "🔧", title: "Dịch Vụ Sửa Chữa, Cứu Hộ 24/7", sub: "Hỗ trợ kỹ thuật tận nơi" },
            { icon: "💳", title: "Trả Góp 0% Lãi Suất (*)",    sub: "Hỗ trợ trả góp qua ngân hàng" },
            { icon: "🛡️", title: "Hậu Mãi An Tâm Sau Bán Hàng", sub: "Bảo hành 12–36 tháng" },
          ].map((s) => (
            <div key={s.title} className="flex items-center gap-3 text-white">
              <span className="text-2xl shrink-0">{s.icon}</span>
              <div>
                <p className="font-bold text-xs md:text-sm leading-tight">{s.title}</p>
                <p className="text-[10px] md:text-xs text-blue-100">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. CATEGORY CIRCLES (Danh mục nổi bật) ── */}
      <section className="bg-white py-6 md:py-8 mt-2 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            <h2 className="text-lg md:text-xl font-black uppercase text-[#333]">Danh Mục Nổi Bật</h2>
          </div>
          <div className="grid grid-cols-4 gap-3 md:gap-6">
            {CATEGORIES.map((cat) => (
              <Link key={cat.slug} href={`/${cat.slug}`} className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-gray-100 bg-gray-50 flex items-center justify-center text-2xl md:text-4xl overflow-hidden group-hover:border-primary group-hover:bg-blue-50 transition shadow-sm">
                  {cat.icon}
                </div>
                <span className="text-xs md:text-sm font-bold text-[#333] group-hover:text-primary transition text-center uppercase leading-tight">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FLASH SALE / Giá Sốc ── */}
      <section className="bg-white py-6 md:py-8 mt-2 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-3 border-b-2 border-[#e83e3e]">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-lg md:text-xl font-black uppercase text-[#e83e3e] flex items-center gap-2">
                <span className="text-2xl">🔥</span> Giá Sốc Tháng Này
              </h2>
              <CountdownTimer />
            </div>
            <Link href="/xe-may-dien" className="text-sm text-primary font-semibold hover:text-accent transition whitespace-nowrap">
              Xem tất cả »
            </Link>
          </div>

          {hotProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {hotProducts.map((p: any) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          ) : (
            <SkeletonGrid count={5} />
          )}
        </div>
      </section>

      {/* ── 5. XE MÁY ĐIỆN ── */}
      <section className="bg-white py-6 md:py-8 mt-2 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-primary">
            <div className="flex items-center gap-2">
              <span className="text-xl">🏍️</span>
              <h2 className="text-lg md:text-xl font-black uppercase text-primary">Xe Máy Điện</h2>
            </div>
            <Link href="/xe-may-dien" className="text-sm text-gray-500 hover:text-primary transition font-semibold uppercase">
              Xem thêm »
            </Link>
          </div>
          {xeMayDien.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {xeMayDien.map((p: any) => <ProductCard key={p._id} product={p} />)}
            </div>
          ) : (
            <EmptyProductGrid label="xe máy điện" href="/xe-may-dien" />
          )}
        </div>
      </section>

      {/* ── 6. XE ĐẠP ĐIỆN ── */}
      <section className="bg-white py-6 md:py-8 mt-2 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-primary">
            <div className="flex items-center gap-2">
              <span className="text-xl">🚲</span>
              <h2 className="text-lg md:text-xl font-black uppercase text-primary">Xe Đạp Điện</h2>
            </div>
            <Link href="/xe-dap-dien" className="text-sm text-gray-500 hover:text-primary transition font-semibold uppercase">
              Xem thêm »
            </Link>
          </div>
          {xeDapDien.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {xeDapDien.map((p: any) => <ProductCard key={p._id} product={p} />)}
            </div>
          ) : (
            <EmptyProductGrid label="xe đạp điện" href="/xe-dap-dien" />
          )}
        </div>
      </section>

      {/* ── 7. XE MÁY 50CC ── */}
      <section className="bg-white py-6 md:py-8 mt-2 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-primary">
            <div className="flex items-center gap-2">
              <span className="text-xl">🛵</span>
              <h2 className="text-lg md:text-xl font-black uppercase text-primary">Xe Máy 50cc</h2>
            </div>
            <Link href="/xe-may-50cc" className="text-sm text-gray-500 hover:text-primary transition font-semibold uppercase">
              Xem thêm »
            </Link>
          </div>
          {xe50cc.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {xe50cc.map((p: any) => <ProductCard key={p._id} product={p} />)}
            </div>
          ) : (
            <EmptyProductGrid label="xe máy 50cc" href="/xe-may-50cc" />
          )}
        </div>
      </section>

      {/* ── 8. REVIEW section ── */}
      <section className="bg-white py-6 md:py-8 mt-2 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-primary">
            <div className="flex items-center gap-2">
              <span className="text-xl">▶️</span>
              <h2 className="text-lg md:text-xl font-black uppercase text-primary">Review Xe Điện Cùng Khoa Smile</h2>
            </div>
            <Link href="/review-xe-dien" className="text-sm text-gray-500 hover:text-primary transition font-semibold uppercase">
              Xem thêm »
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {REVIEWS.map((r) => (
              <Link key={r.title} href={r.href} className="group block bg-[#f5f5f5] rounded-xl overflow-hidden hover:shadow-md transition">
                <div className="aspect-video bg-[#222] flex items-center justify-center text-4xl group-hover:opacity-80 transition">
                  {r.thumb}
                </div>
                <div className="p-3">
                  <p className="text-xs font-semibold text-[#333] line-clamp-2 leading-snug group-hover:text-primary transition mb-2">
                    {r.title}
                  </p>
                  <span className="inline-block text-[10px] bg-primary text-white px-2 py-0.5 rounded font-bold">
                    {r.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. TESTIMONIALS ── */}
      <section className="bg-[#f5f5f5] py-10 mt-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            <h2 className="text-lg md:text-xl font-black uppercase text-[#333]">Khách Hàng Nói Gì Về Xe Điện Smile</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex gap-0.5 text-yellow-400 mb-3 text-sm">{"★★★★★"}</div>
                <p className="text-sm text-[#555] leading-relaxed line-clamp-4 mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black text-base shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#333]">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CTKM THÁNG blog posts ── */}
      <section className="bg-white py-8 md:py-10 mt-2 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6 pb-3 border-b-2 border-primary">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎁</span>
              <h2 className="text-lg md:text-xl font-black uppercase text-primary">CTKM Tháng</h2>
            </div>
            <Link href="/ctkm-thang" className="text-sm text-gray-500 hover:text-primary transition font-semibold uppercase">
              Xem thêm »
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PROMOTIONS.map((post) => (
              <Link key={post.title} href={post.href} className="group block bg-[#f9f9f9] rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition">
                <div className="aspect-video bg-gradient-to-br from-[#00579c] to-[#0067bc] flex items-center justify-center text-white p-4 text-center group-hover:opacity-90 transition">
                  <span className="text-sm font-bold leading-snug line-clamp-3">{post.title}</span>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-2">{post.author} — {post.date}</p>
                  <p className="text-sm text-[#555] line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  <span className="inline-block mt-3 text-xs text-primary font-semibold group-hover:underline">Xem chi tiết →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. CTA BOTTOM BANNER ── */}
      <section className="bg-primary py-10 mt-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-white text-center md:text-left">
          <div>
            <h3 className="text-2xl md:text-3xl font-black uppercase mb-2">
              Mua Xe Điện Chính Hãng – Giá Tốt Nhất
            </h3>
            <p className="text-blue-100 text-sm md:text-base">
              Cam kết xe chính hãng 100% • Giao hàng toàn quốc • Trả góp 0% lãi suất
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:0888882887"
              className="px-8 py-3 bg-[#e83e3e] text-white font-black rounded-full hover:bg-red-600 transition shadow-lg text-base"
            >
              📞 0888.882.887
            </a>
            <Link
              href="/xe-may-dien"
              className="px-8 py-3 bg-white text-primary font-black rounded-full hover:bg-blue-50 transition shadow-lg text-base"
            >
              Xem Sản Phẩm
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

function EmptyProductGrid({ label, href }: { label: string; href: string }) {
  return (
    <div className="bg-[#f5f5f5] rounded-xl p-10 text-center">
      <p className="text-gray-500 mb-3">Chưa có {label} nào. Hãy thêm sản phẩm từ Admin.</p>
      <Link href={href} className="text-primary font-semibold hover:underline text-sm">
        Khám phá danh mục →
      </Link>
    </div>
  );
}

function SkeletonGrid({ count }: { count: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col">
          <div className="aspect-square bg-gray-100 animate-pulse" />
          <div className="p-3 space-y-2">
            <div className="h-3 bg-gray-100 rounded animate-pulse" />
            <div className="h-3 bg-gray-100 rounded w-2/3 animate-pulse" />
            <div className="h-4 bg-gray-100 rounded w-1/2 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}

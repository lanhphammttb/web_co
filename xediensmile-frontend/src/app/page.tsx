import Link from "next/link";
import Image from "next/image";
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
  { label: "Xe Máy Điện", slug: "xe-may-dien", icon: "🏍️",  cat: "Xe Máy Điện" },
  { label: "Xe Đạp Điện", slug: "xe-dap-dien", icon: "🚲",  cat: "Xe Đạp Điện" },
  { label: "Xe 50CC",     slug: "xe-50cc",     icon: "🛵",  cat: "Xe 50CC"     },
  { label: "Phụ Kiện",   slug: "phu-kien",    icon: "🔧",  cat: "Phụ Kiện"    },
];

const TESTIMONIALS = [
  { name: "Nguyễn Thị Lan",   title: "Giáo viên",          text: "Shop tư vấn rất tận tình, xe giao đúng hẹn. Yadea chạy êm, pin trâu hơn mong đợi. Sẽ giới thiệu bạn bè!" },
  { name: "Trần Văn Minh",    title: "Sinh viên Đại học",   text: "Mua xe đạp điện DK Bike, giá tốt hơn nhiều chỗ khác. Nhân viên hỗ trợ nhiệt tình, giao xe tận nơi." },
  { name: "Lê Thị Hoa",       title: "Kế toán",            text: "Lần đầu mua xe máy điện, được tư vấn rất kỹ về pin, bảo hành. Hài lòng với dịch vụ hậu mãi của shop." },
  { name: "Phạm Quốc Tuấn",   title: "Kỹ sư IT",           text: "Đã mua 2 xe cho gia đình, cả hai đều chất lượng tốt. Chính sách trả góp 0% rất tiện lợi." },
  { name: "Hoàng Thị Mai",    title: "Nhân viên văn phòng", text: "Xe điện Smile bán hàng uy tín, giá cả công khai minh bạch. Không bị ép giá, không phí phụ trội." },
  { name: "Đinh Công Sơn",    title: "Chủ doanh nghiệp",   text: "Đặt hàng online giao tận nhà rất nhanh. Nhân viên kỹ thuật hỗ trợ 24/7, yên tâm khi có sự cố." },
];

export default async function HomePage() {
  const [banners, allProducts] = await Promise.all([
    fetchJSON<any[]>(`${API}/banners`, []),
    fetchJSON<any[]>(`${API}/products`, []),
  ]);

  const activeBanners = banners.filter((b: any) => b.isActive);
  const hotProducts  = allProducts.slice(0, 10);
  const xeMayDien    = allProducts.filter((p: any) => /máy điện/i.test(p.category)).slice(0, 5);
  const xeDapDien    = allProducts.filter((p: any) => /đạp điện/i.test(p.category)).slice(0, 5);

  return (
    <div className="flex flex-col">

      {/* ── 1. BANNER SLIDER ── */}
      <section className="w-full bg-white shadow-sm">
        <BannerSlider banners={activeBanners} />
      </section>

      {/* ── 2. CATEGORY CIRCLES ── */}
      <section className="bg-white py-6 md:py-8 mt-2 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            <h2 className="text-lg md:text-xl font-black uppercase text-[#333]">Danh Mục Sản Phẩm</h2>
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

      {/* ── 3. FLASH SALE / HOT TRENDING ── */}
      <section className="bg-white py-6 md:py-8 mt-2 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-3 border-b-2 border-primary">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-lg md:text-xl font-black uppercase text-[#e83e3e] flex items-center gap-2">
                <span className="text-2xl">🔥</span> SIÊU SALE THÁNG
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
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
          )}
        </div>
      </section>

      {/* ── 4. SERVICE GUARANTEES ── */}
      <section className="bg-primary py-8 mt-2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: "🚚",
                title: "Giao Hàng Miễn Phí",
                desc: "Miễn phí giao hàng toàn quốc cho đơn hàng từ 500K",
              },
              {
                icon: "🔧",
                title: "Sửa Chữa & Cứu Hộ 24/7",
                desc: "Đội ngũ kỹ thuật hỗ trợ tận nơi mọi lúc mọi nơi",
              },
              {
                icon: "💳",
                title: "Trả Góp 0% Lãi Suất",
                desc: "Hỗ trợ trả góp 0% qua các ngân hàng liên kết",
              },
              {
                icon: "🛡️",
                title: "Hậu Mãi An Tâm",
                desc: "Bảo hành ắc quy 12–36 tháng, xe lỗi đổi mới ngay",
              },
            ].map((s) => (
              <div key={s.title} className="flex flex-col items-center text-center gap-3 text-white">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/15 rounded-full flex items-center justify-center text-3xl md:text-4xl shadow-inner">
                  {s.icon}
                </div>
                <div>
                  <p className="font-black text-sm md:text-base leading-tight mb-1">{s.title}</p>
                  <p className="text-xs md:text-sm text-blue-100 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. XE MÁY ĐIỆN section ── */}
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

      {/* ── 6. XE ĐẠP ĐIỆN section ── */}
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

      {/* ── 7. TESTIMONIALS ── */}
      <section className="bg-[#f5f5f5] py-10 mt-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            <h2 className="text-lg md:text-xl font-black uppercase text-[#333]">Khách Hàng Nói Gì Về Chúng Tôi</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex gap-0.5 text-yellow-400 mb-3 text-sm">{"★★★★★"}</div>
                <p className="text-sm text-[#555] leading-relaxed line-clamp-3 mb-4 italic">"{t.text}"</p>
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

      {/* ── 8. CTA BOTTOM BANNER ── */}
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

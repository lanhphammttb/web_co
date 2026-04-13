import Image from "next/image";
import Link from "next/link";
import ProductCard from "../../components/ui/ProductCard";

export const dynamic = "force-dynamic";

const SLUG_TO_LABEL: Record<string, string> = {
  "xe-may-dien":  "Xe Máy Điện",
  "xe-dap-dien":  "Xe Đạp Điện",
  "xe-50cc":      "Xe 50CC",
  "phu-kien":     "Phụ Kiện",
  "ctkm-thang":   "CTKM Tháng",
  "tin-tuc":      "Blog - Tin Tức",
  "ve-xe-dien-smile": "Về Xe Điện Smile",
};

const BRANDS: Record<string, string[]> = {
  "xe-may-dien": ["DK Bike", "Yadea", "Vinfast", "Takashi", "JVCeco", "DV Motor", "Vespas", "Dibao", "Pega", "Atid"],
  "xe-dap-dien": ["Yadea", "DK Bike", "JVC", "Dinky Bike", "Bridgestone", "Atid"],
  "xe-50cc":     ["Xe Tay Ga", "Xe Số"],
};

const PRICE_RANGES = [
  { label: "Dưới 5 triệu",   min: 0,        max: 5_000_000  },
  { label: "5 – 10 triệu",   min: 5_000_000, max: 10_000_000 },
  { label: "10 – 20 triệu",  min: 10_000_000,max: 20_000_000 },
  { label: "20 – 30 triệu",  min: 20_000_000,max: 30_000_000 },
  { label: "Trên 30 triệu",  min: 30_000_000,max: Infinity   },
];

export default async function CategoryPage(props: { params: Promise<{ category: string }> }) {
  const { category } = await props.params;

  const label = SLUG_TO_LABEL[category] ?? category.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const brands = BRANDS[category] ?? [];

  let products: any[] = [];
  try {
    const url = `http://localhost:5001/api/products?category=${encodeURIComponent(label)}`;
    const res = await fetch(url, { cache: "no-store" });
    if (res.ok) products = await res.json();
  } catch {
    // show empty state
  }

  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition">Trang chủ</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#333] font-semibold">{label}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-5">

          {/* ── SIDEBAR ── */}
          <aside className="w-full lg:w-[240px] shrink-0">
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden sticky top-24 shadow-sm">

              {/* Price filter */}
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-black text-sm uppercase text-[#333] mb-3 flex items-center gap-2">
                  <span className="w-0.5 h-4 bg-primary rounded-full"></span>
                  Khoảng Giá
                </h3>
                <div className="space-y-1.5">
                  {PRICE_RANGES.map((r) => (
                    <label key={r.label} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-primary transition">{r.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand filter */}
              {brands.length > 0 && (
                <div className="p-4">
                  <h3 className="font-black text-sm uppercase text-[#333] mb-3 flex items-center gap-2">
                    <span className="w-0.5 h-4 bg-primary rounded-full"></span>
                    Hãng Sản Xuất
                  </h3>
                  <div className="space-y-1.5">
                    {brands.map((b) => (
                      <label key={b} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-primary transition">{b}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* ── PRODUCT GRID ── */}
          <div className="flex-1 min-w-0">
            {/* Top bar */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <h1 className="text-xl font-black text-[#333]">{label}</h1>
                <p className="text-xs text-gray-500 mt-0.5">
                  {products.length > 0 ? `${products.length} sản phẩm` : "Đang tải..."}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500 font-medium">Sắp xếp:</span>
                <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-primary bg-white text-[#333]">
                  <option>Mặc định</option>
                  <option>Giá thấp → cao</option>
                  <option>Giá cao → thấp</option>
                  <option>Mới nhất</option>
                </select>
              </div>
            </div>

            {products.length === 0 ? (
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-16 text-center">
                <div className="text-5xl mb-4">🛵</div>
                <h3 className="text-lg font-bold text-gray-700 mb-2">Chưa có sản phẩm</h3>
                <p className="text-sm text-gray-500 mb-6">
                  Danh mục <strong>{label}</strong> chưa có sản phẩm nào.<br />
                  Hãy thêm sản phẩm từ trang Admin.
                </p>
                <Link href="/" className="inline-block px-6 py-2.5 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-light transition">
                  Về trang chủ
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {products.map((p: any) => (
                  <ProductCard key={p._id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

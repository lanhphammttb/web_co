import Link from "next/link";
import ProductCard from "../../components/ui/ProductCard";

export const dynamic = "force-dynamic";

/* ─── mapping slug → display label & sub-categories ─── */
const CAT_MAP: Record<string, { label: string; subs: { label: string; href: string }[] }> = {
  "xe-may-dien": {
    label: "Xe Máy Điện",
    subs: [
      { label: "Tất cả",       href: "/xe-may-dien" },
      { label: "DK Bike",      href: "/xe-may-dien/dk-bike" },
      { label: "Yadea",        href: "/xe-may-dien/yadea" },
      { label: "Vinfast",      href: "/xe-may-dien/vinfast" },
      { label: "Takashi",      href: "/xe-may-dien/takashi" },
      { label: "JVCeco",       href: "/xe-may-dien/jvceco" },
      { label: "DV Motor",     href: "/xe-may-dien/dv-motor" },
      { label: "Vespas",       href: "/xe-may-dien/vespas" },
      { label: "Dibao",        href: "/xe-may-dien/dibao" },
      { label: "Pega",         href: "/xe-may-dien/pega" },
    ],
  },
  "xe-dap-dien": {
    label: "Xe Đạp Điện",
    subs: [
      { label: "Tất cả",       href: "/xe-dap-dien" },
      { label: "Yadea",        href: "/xe-dap-dien/yadea" },
      { label: "DK Bike",      href: "/xe-dap-dien/dk-bike" },
      { label: "JVC",          href: "/xe-dap-dien/jvc" },
      { label: "Dinky Bike",   href: "/xe-dap-dien/dinky-bike" },
      { label: "Bridgestone",  href: "/xe-dap-dien/bridgestone" },
      { label: "Atid",         href: "/xe-dap-dien/atid" },
    ],
  },
  "xe-50cc": {
    label: "Xe 50CC",
    subs: [
      { label: "Tất cả",  href: "/xe-50cc" },
      { label: "Xe Tay Ga", href: "/xe-50cc/xe-tay-ga" },
      { label: "Xe Số",     href: "/xe-50cc/xe-so" },
    ],
  },
};

function slugToLabel(slug: string) {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export default async function CategoryPage(props: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await props.params;
  const catInfo = CAT_MAP[category];
  const label = catInfo?.label ?? slugToLabel(category);

  /* Vietnamese category name for API query */
  const apiCategory = catInfo?.label ?? label;

  let products: any[] = [];
  try {
    const res = await fetch(
      `http://localhost:5001/api/products?category=${encodeURIComponent(apiCategory)}`,
      { cache: "no-store" }
    );
    if (res.ok) products = await res.json();
  } catch {
    /* empty — will show empty state */
  }

  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#00579c] transition">Trang chủ</Link>
            <span>›</span>
            <span className="text-gray-800 font-semibold">{label}</span>
          </nav>
        </div>
      </div>

      {/* ── Sub-category tabs (only when we have subs) ── */}
      {catInfo?.subs && (
        <div className="bg-white border-b border-gray-100 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2">
              {catInfo.subs.map((sub, i) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition whitespace-nowrap border ${
                    i === 0
                      ? "bg-[#00579c] text-white border-[#00579c]"
                      : "border-gray-200 text-gray-600 hover:border-[#00579c] hover:text-[#00579c] bg-white"
                  }`}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-5 max-w-7xl">
        {/* ── Top bar: title + sort ── */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-0.5 h-5 bg-[#00579c] rounded-full"></span>
            <h1 className="text-lg font-black text-gray-900 uppercase">{label}</h1>
            {products.length > 0 && (
              <span className="text-xs text-gray-400 font-normal">({products.length} sản phẩm)</span>
            )}
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-500">Sắp xếp:</span>
            <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-[#00579c] bg-white text-gray-700 cursor-pointer">
              <option>Mặc định</option>
              <option>Giá thấp → cao</option>
              <option>Giá cao → thấp</option>
              <option>Mới nhất</option>
              <option>Bán chạy nhất</option>
            </select>
          </div>
        </div>

        {/* ── Product grid (NO sidebar) ── */}
        {products.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-16 text-center">
            <div className="text-6xl mb-4">🛵</div>
            <h3 className="text-lg font-bold text-gray-700 mb-2">Chưa có sản phẩm</h3>
            <p className="text-sm text-gray-500 mb-6">
              Danh mục <strong>{label}</strong> chưa có sản phẩm nào.
              <br />Hãy thêm sản phẩm từ trang Admin.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-2.5 bg-[#00579c] text-white rounded-full font-bold text-sm hover:bg-[#0067bc] transition"
            >
              Về trang chủ
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {products.map((p: any) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

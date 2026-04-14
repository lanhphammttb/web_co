"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: { url: string; public_id: string }[];
  category: string;
  countInStock: number;
}

function ProductDetailContent({ slug }: { slug: string }) {
  const [product, setProduct] = useState<Product | null | "loading">("loading");
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState<"desc" | "specs">("desc");

  useEffect(() => {
    setProduct("loading");
    fetch(`http://localhost:5001/api/products/slug/${slug}`)
      .then((r) => r.json())
      .then((d) => setProduct(d._id ? d : null))
      .catch(() => setProduct(null));
  }, [slug]);

  if (product === "loading") {
    return (
      <div className="container mx-auto px-4 py-20 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-gray-500">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm">Đang tải sản phẩm...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-2xl font-black text-[#333] mb-3">Không tìm thấy sản phẩm</h1>
        <p className="text-gray-500 mb-6">Sản phẩm không tồn tại hoặc đã bị xóa.</p>
        <Link href="/" className="inline-block px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary-light transition">
          Về trang chủ
        </Link>
      </div>
    );
  }

  const hasDiscount = product.discountPrice && product.discountPrice > 0 && product.discountPrice < product.price;
  const salePrice   = hasDiscount ? product.discountPrice! : product.price;
  const origPrice   = hasDiscount ? product.price : null;
  const pct         = origPrice ? Math.round((1 - salePrice / origPrice) * 100) : null;
  const inStock     = product.countInStock > 0;

  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition">Trang chủ</Link>
            <span className="text-gray-300">/</span>
            <Link href={`/${product.category.toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="hover:text-primary transition capitalize">
              {product.category}
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#333] font-semibold line-clamp-1 max-w-xs">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Main product block */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">

            {/* ── IMAGE GALLERY ── */}
            <div className="w-full md:w-[45%] shrink-0">
              {/* Main image */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100 mb-3">
                {product.images.length > 0 ? (
                  <Image
                    src={product.images[activeImg].url}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 45vw"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">Chưa có ảnh</div>
                )}
                {pct && (
                  <span className="absolute top-3 left-3 bg-[#e83e3e] text-white text-sm font-black px-3 py-1 rounded-full">
                    -{pct}%
                  </span>
                )}
              </div>

              {/* Thumbnail strip */}
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border-2 transition ${
                        i === activeImg ? "border-primary" : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <Image src={img.url} alt="" fill className="object-cover" sizes="64px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── PRODUCT INFO ── */}
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl md:text-3xl font-black text-[#222] leading-tight mb-3">
                {product.name}
              </h1>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-4 text-sm mb-4 pb-4 border-b border-gray-100">
                <span className="text-gray-500">
                  Mã SP: <strong className="text-[#333]">XDS-{product._id.slice(-6).toUpperCase()}</strong>
                </span>
                <span className={`flex items-center gap-1.5 font-semibold ${inStock ? "text-green-600" : "text-red-500"}`}>
                  <span className={`w-2 h-2 rounded-full ${inStock ? "bg-green-500" : "bg-red-500"}`}></span>
                  {inStock ? `Còn hàng (${product.countInStock})` : "Hết hàng"}
                </span>
              </div>

              {/* Price */}
              <div className="bg-[#fff5f5] border border-red-100 rounded-xl p-4 mb-5">
                {origPrice && (
                  <span className="block text-gray-400 text-sm line-through mb-1">
                    {origPrice.toLocaleString("vi-VN")}₫
                  </span>
                )}
                <span className="block text-3xl md:text-4xl font-black text-[#e83e3e] leading-none">
                  {salePrice.toLocaleString("vi-VN")}₫
                </span>
                {pct && (
                  <span className="inline-block mt-2 bg-[#e83e3e] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    Tiết kiệm {(origPrice! - salePrice).toLocaleString("vi-VN")}₫ ({pct}%)
                  </span>
                )}
              </div>

              {/* Promotions */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-5">
                <p className="font-black text-primary text-sm mb-2">🎁 Ưu đãi tặng kèm:</p>
                <ul className="space-y-1.5 text-sm text-blue-700">
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Tặng mũ bảo hiểm cao cấp trị giá 250.000₫</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Tặng áo mưa Xe Điện Smile thời trang</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Miễn phí giao hàng bán kính 20km</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Bảo hành ắc quy 12 tháng tại nhà</li>
                </ul>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-2 mb-6 text-xs">
                {[
                  ["🏆", "Hàng chính hãng 100%"],
                  ["🚚", "Giao hàng toàn quốc"],
                  ["💳", "Trả góp 0% lãi suất"],
                  ["🔧", "Bảo hành tại nhà"],
                ].map(([icon, text]) => (
                  <div key={text} className="flex items-center gap-1.5 text-gray-600 bg-gray-50 rounded-lg px-2.5 py-2">
                    <span>{icon}</span><span className="font-semibold">{text}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex gap-3">
                <button className="flex-1 border-2 border-primary text-primary font-black text-sm md:text-base py-4 rounded-xl hover:bg-blue-50 transition">
                  🛒 THÊM VÀO GIỎ
                </button>
                <a
                  href="tel:0888882887"
                  className="flex-1 bg-primary text-white font-black text-sm md:text-base py-4 rounded-xl hover:bg-primary-light transition text-center flex flex-col items-center justify-center shadow-md"
                >
                  <span>MUA NGAY</span>
                  <span className="text-[10px] font-normal opacity-80">Gọi: 0888.882.887</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── TABS: Description / Specs ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mt-5 overflow-hidden">
          <div className="flex border-b border-gray-100">
            {[
              { id: "desc" as const, label: "Mô Tả Sản Phẩm" },
              { id: "specs" as const, label: "Thông Số Kỹ Thuật" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 md:flex-none px-6 md:px-10 py-4 font-bold text-sm uppercase transition border-b-2 ${
                  activeTab === tab.id
                    ? "border-primary text-primary bg-blue-50/50"
                    : "border-transparent text-gray-500 hover:text-[#333] hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8">
            {activeTab === "desc" ? (
              <div className="prose max-w-none text-sm md:text-base text-[#555] leading-relaxed">
                {product.description || (
                  <p className="text-gray-400 italic">
                    Đang cập nhật mô tả chi tiết. Quý khách vui lòng liên hệ Hotline{" "}
                    <a href="tel:0888882887" className="text-primary font-bold hover:underline">0888.882.887</a>{" "}
                    để được tư vấn.
                  </p>
                )}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    {[
                      ["Danh mục", product.category],
                      ["Tình trạng", inStock ? "Còn hàng" : "Hết hàng"],
                      ["Mã sản phẩm", `XDS-${product._id.slice(-6).toUpperCase()}`],
                      ["Bảo hành", "12 – 36 tháng theo chính sách hãng"],
                      ["Xuất xứ", "Chính hãng – Nhập khẩu"],
                    ].map(([key, val], i) => (
                      <tr key={key} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="px-4 py-3 font-bold text-[#333] w-40 border border-gray-100">{key}</td>
                        <td className="px-4 py-3 text-gray-600 border border-gray-100">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  return <ProductDetailContent slug={slug} />;
}

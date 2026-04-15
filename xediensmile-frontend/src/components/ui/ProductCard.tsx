import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  discountPrice?: number;
  images?: { url: string; public_id: string }[];
  category?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const hasDiscount =
    product.discountPrice &&
    product.discountPrice > 0 &&
    product.discountPrice < product.price;
  const salePrice = hasDiscount ? product.discountPrice! : product.price;
  const origPrice = hasDiscount ? product.price : null;
  const pct       = origPrice ? Math.round((1 - salePrice / origPrice) * 100) : null;

  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200 group flex flex-col">
      {/* ── Image ── */}
      <Link href={`/product/${product.slug}`} className="relative block aspect-square overflow-hidden bg-gray-50 shrink-0">
        {product.images && product.images.length > 0 ? (
          <Image
            src={product.images[0].url}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs text-center px-2">
            Chưa có ảnh
          </div>
        )}
        {/* Discount badge */}
        {pct && pct > 0 && (
          <span className="absolute top-2 left-2 bg-[#e83e3e] text-white text-[10px] font-black px-2 py-0.5 rounded z-10 leading-tight">
            -{pct}%
          </span>
        )}
      </Link>

      {/* ── Info ── */}
      <div className="p-2.5 flex flex-col flex-1">
        <Link href={`/product/${product.slug}`} className="flex-1 mb-2">
          <h3 className="text-xs md:text-sm font-semibold text-gray-800 line-clamp-2 leading-snug hover:text-[#00579c] transition">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="mb-2">
          <span className="block text-[#e83e3e] font-black text-sm md:text-base leading-tight">
            {salePrice.toLocaleString("vi-VN")}₫
          </span>
          {origPrice && (
            <span className="block text-gray-400 text-xs line-through leading-tight">
              {origPrice.toLocaleString("vi-VN")}₫
            </span>
          )}
        </div>

        {/* CTA button */}
        <Link
          href={`/product/${product.slug}`}
          className="block w-full text-center text-xs font-bold py-1.5 rounded border-2 border-[#00579c] text-[#00579c] hover:bg-[#00579c] hover:text-white transition leading-tight"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
}

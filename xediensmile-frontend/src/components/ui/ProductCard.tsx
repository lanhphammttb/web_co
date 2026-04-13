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
  const hasDiscount = product.discountPrice && product.discountPrice > 0 && product.discountPrice < product.price;
  const salePrice  = hasDiscount ? product.discountPrice! : product.price;
  const origPrice  = hasDiscount ? product.price : null;
  const pct        = origPrice ? Math.round((1 - salePrice / origPrice) * 100) : null;

  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group flex flex-col">
      {/* Image */}
      <Link href={`/product/${product.slug}`} className="relative block aspect-square overflow-hidden bg-gray-50">
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
        {pct && pct > 0 && (
          <span className="absolute top-2 left-2 bg-[#e83e3e] text-white text-[11px] font-black px-2 py-0.5 rounded-full z-10">
            -{pct}%
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="p-3 flex flex-col flex-1">
        <Link href={`/product/${product.slug}`} className="flex-1">
          <h3 className="text-sm font-semibold text-[#333] line-clamp-2 leading-tight hover:text-primary transition mb-2">
            {product.name}
          </h3>
        </Link>
        <div className="mt-auto space-y-0.5">
          <span className="block text-[#e83e3e] font-black text-base leading-tight">
            {salePrice.toLocaleString("vi-VN")}₫
          </span>
          {origPrice && (
            <span className="block text-gray-400 text-xs line-through">
              {origPrice.toLocaleString("vi-VN")}₫
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

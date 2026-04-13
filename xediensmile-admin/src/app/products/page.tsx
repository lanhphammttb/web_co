"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const API = "http://localhost:5001/api";

interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  discountPrice?: number;
  category: string;
  countInStock: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchProducts = async (q = "") => {
    setLoading(true);
    try {
      const url = q ? `${API}/products?search=${encodeURIComponent(q)}` : `${API}/products`;
      const res = await fetch(url);
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch {
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Xóa sản phẩm "${name}"?`)) return;
    try {
      const res = await fetch(`${API}/products/${id}`, { method: "DELETE" });
      if (res.ok) setProducts((prev) => prev.filter((p) => p._id !== id));
      else alert("Xóa thất bại");
    } catch {
      alert("Lỗi mạng");
    }
  };

  const displayed = search
    ? products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    : products;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Quản Lý Sản Phẩm</h1>
        <Link href="/products/new"
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold shadow transition">
          + Thêm Sản Phẩm
        </Link>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm theo tên sản phẩm..."
          className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-900 bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
        {loading ? (
          <div className="p-10 text-center text-gray-500">
            <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
            Đang tải dữ liệu...
          </div>
        ) : (
          <table className="w-full text-left min-w-[640px]">
            <thead className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-5 py-3.5 font-semibold">Tên Sản Phẩm</th>
                <th className="px-5 py-3.5 font-semibold">Danh Mục</th>
                <th className="px-5 py-3.5 font-semibold">Giá</th>
                <th className="px-5 py-3.5 font-semibold">Tồn Kho</th>
                <th className="px-5 py-3.5 font-semibold text-right">Hành Động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {displayed.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-gray-400 italic">
                    {search ? "Không tìm thấy sản phẩm phù hợp." : "Chưa có sản phẩm nào. Hãy thêm mới!"}
                  </td>
                </tr>
              ) : (
                displayed.map((p) => (
                  <tr key={p._id} className="hover:bg-slate-50 transition">
                    <td className="px-5 py-4 font-medium text-gray-900 max-w-[200px]">
                      <span className="line-clamp-2 text-sm">{p.name}</span>
                      <span className="text-xs text-gray-400 font-mono">{p.slug}</span>
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-600">{p.category}</td>
                    <td className="px-5 py-4 text-sm">
                      <span className="text-red-600 font-bold">
                        {(p.discountPrice && p.discountPrice > 0 ? p.discountPrice : p.price).toLocaleString("vi-VN")}₫
                      </span>
                      {p.discountPrice && p.discountPrice > 0 && (
                        <span className="block text-xs text-gray-400 line-through">
                          {p.price.toLocaleString("vi-VN")}₫
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        p.countInStock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}>
                        {p.countInStock > 0 ? `Còn ${p.countInStock}` : "Hết hàng"}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right space-x-3">
                      <Link href={`/products/${p._id}/edit`}
                        className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition">
                        Sửa
                      </Link>
                      <button onClick={() => handleDelete(p._id, p.name)}
                        className="text-red-600 hover:text-red-800 font-semibold text-sm transition">
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
      {!loading && (
        <p className="text-xs text-gray-400 text-right">
          Tổng: <strong>{displayed.length}</strong> sản phẩm
        </p>
      )}
    </div>
  );
}

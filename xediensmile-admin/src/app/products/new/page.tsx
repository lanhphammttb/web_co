"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const API = "http://localhost:5001/api";

const CATEGORIES = ["Xe Máy Điện", "Xe Đạp Điện", "Xe 50CC", "Phụ Kiện"];

export default function NewProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    price: "",
    discountPrice: "",
    category: "",
    countInStock: "",
  });
  const [images, setImages] = useState<FileList | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // Auto-generate slug from name
    if (name === "name") {
      const slug = value
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d").replace(/Đ/g, "D")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim().replace(/\s+/g, "-");
      setFormData((prev) => ({ ...prev, name: value, slug }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setImages(files);
    setPreviews(Array.from(files).map((f) => URL.createObjectURL(f)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([k, v]) => data.append(k, v));
      if (images) {
        for (let i = 0; i < images.length; i++) data.append("images", images[i]);
      }
      const res = await fetch(`${API}/products`, { method: "POST", body: data });
      if (res.ok) {
        alert("✅ Thêm sản phẩm thành công!");
        router.push("/products");
      } else {
        const err = await res.json();
        alert(`Lỗi: ${err.message}`);
      }
    } catch (err: any) {
      alert(`Lỗi mạng: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Thêm Sản Phẩm Mới</h1>
        <Link href="/products" className="text-sm text-gray-500 hover:text-gray-700 underline">
          ← Quay lại
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tên sản phẩm *</label>
            <input name="name" required value={formData.name} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              placeholder="VD: Xe Máy Điện Yadea Odora Pro" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Slug URL *</label>
            <input name="slug" required value={formData.slug} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none font-mono text-sm"
              placeholder="xe-may-dien-yadea-odora-pro" />
            <p className="text-xs text-gray-400 mt-1">Tự động tạo từ tên — có thể chỉnh lại</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Giá niêm yết (₫) *</label>
            <input name="price" type="number" required value={formData.price} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              placeholder="18990000" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Giá khuyến mãi (₫)</label>
            <input name="discountPrice" type="number" value={formData.discountPrice} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              placeholder="16990000" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Danh mục *</label>
            <select name="category" required value={formData.category} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none">
              <option value="">Chọn danh mục</option>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Số lượng tồn kho *</label>
            <input name="countInStock" type="number" required value={formData.countInStock} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              placeholder="10" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mô tả sản phẩm *</label>
          <textarea name="description" required rows={5} value={formData.description} onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none resize-none"
            placeholder="Nhập mô tả đầy đủ cho sản phẩm..." />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Hình ảnh sản phẩm (tối đa 5 ảnh)
          </label>
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 cursor-pointer hover:bg-gray-50 transition">
            <input type="file" multiple accept="image/*" onChange={handleFiles} className="hidden" />
            <div className="text-3xl mb-2">📸</div>
            <p className="text-sm text-gray-500">Kéo thả hoặc click để chọn ảnh (JPG, PNG, WebP)</p>
          </label>
          {previews.length > 0 && (
            <div className="flex gap-2 mt-3 flex-wrap">
              {previews.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={src} alt="" className="w-20 h-20 object-cover rounded-lg border border-gray-200" />
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 pt-2 border-t border-gray-100">
          <button type="button" onClick={() => router.back()}
            className="px-6 py-2.5 text-gray-700 bg-gray-100 rounded-lg font-semibold hover:bg-gray-200 transition">
            Hủy
          </button>
          <button type="submit" disabled={loading}
            className={`px-8 py-2.5 text-white bg-red-600 rounded-lg font-bold hover:bg-red-700 transition ${loading ? "opacity-60 cursor-not-allowed" : ""}`}>
            {loading ? "Đang lưu..." : "Lưu Sản Phẩm"}
          </button>
        </div>
      </form>
    </div>
  );
}

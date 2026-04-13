"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const API = "http://localhost:5001/api";
const CATEGORIES = ["Xe Máy Điện", "Xe Đạp Điện", "Xe 50CC", "Phụ Kiện"];

interface ProductImage { url: string; public_id: string }

export default function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "", slug: "", description: "",
    price: "", discountPrice: "", category: "", countInStock: "",
  });
  const [existingImages, setExistingImages] = useState<ProductImage[]>([]);
  const [newFiles, setNewFiles] = useState<FileList | null>(null);
  const [newPreviews, setNewPreviews] = useState<string[]>([]);

  useEffect(() => {
    fetch(`${API}/products/${id}`)
      .then((r) => r.json())
      .then((p) => {
        setFormData({
          name: p.name ?? "",
          slug: p.slug ?? "",
          description: p.description ?? "",
          price: String(p.price ?? ""),
          discountPrice: String(p.discountPrice ?? ""),
          category: p.category ?? "",
          countInStock: String(p.countInStock ?? ""),
        });
        setExistingImages(p.images ?? []);
      })
      .catch(() => alert("Không tải được sản phẩm"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setNewFiles(files);
    setNewPreviews(Array.from(files).map((f) => URL.createObjectURL(f)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([k, v]) => data.append(k, v));
      if (newFiles) {
        for (let i = 0; i < newFiles.length; i++) data.append("images", newFiles[i]);
      }
      const res = await fetch(`${API}/products/${id}`, { method: "PUT", body: data });
      if (res.ok) {
        alert("✅ Cập nhật thành công!");
        router.push("/products");
      } else {
        const err = await res.json();
        alert(`Lỗi: ${err.message}`);
      }
    } catch (err: any) {
      alert(`Lỗi mạng: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Chỉnh Sửa Sản Phẩm</h1>
        <Link href="/products" className="text-sm text-gray-500 hover:text-gray-700 underline">← Quay lại</Link>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tên sản phẩm *</label>
            <input name="name" required value={formData.name} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Slug URL *</label>
            <input name="slug" required value={formData.slug} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none font-mono text-sm" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Giá niêm yết (₫) *</label>
            <input name="price" type="number" required value={formData.price} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:ring-2 focus:ring-red-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Giá khuyến mãi (₫)</label>
            <input name="discountPrice" type="number" value={formData.discountPrice} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:ring-2 focus:ring-red-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Danh mục *</label>
            <select name="category" required value={formData.category} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:ring-2 focus:ring-red-500 outline-none">
              <option value="">Chọn danh mục</option>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tồn kho *</label>
            <input name="countInStock" type="number" required value={formData.countInStock} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:ring-2 focus:ring-red-500 outline-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mô tả *</label>
          <textarea name="description" required rows={5} value={formData.description} onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:ring-2 focus:ring-red-500 outline-none resize-none" />
        </div>

        {/* Existing images */}
        {existingImages.length > 0 && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ảnh hiện tại</label>
            <div className="flex gap-2 flex-wrap">
              {existingImages.map((img, i) => (
                <div key={i} className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-200">
                  <Image src={img.url} alt="" fill className="object-cover" sizes="80px" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upload new images */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Thêm ảnh mới (sẽ bổ sung vào ảnh cũ)</label>
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-5 cursor-pointer hover:bg-gray-50 transition">
            <input type="file" multiple accept="image/*" onChange={handleFiles} className="hidden" />
            <span className="text-2xl mb-1">📸</span>
            <span className="text-sm text-gray-500">Click để chọn ảnh mới</span>
          </label>
          {newPreviews.length > 0 && (
            <div className="flex gap-2 mt-2 flex-wrap">
              {newPreviews.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={src} alt="" className="w-16 h-16 object-cover rounded-lg border border-gray-200" />
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 pt-2 border-t border-gray-100">
          <button type="button" onClick={() => router.back()}
            className="px-6 py-2.5 text-gray-700 bg-gray-100 rounded-lg font-semibold hover:bg-gray-200 transition">
            Hủy
          </button>
          <button type="submit" disabled={saving}
            className={`px-8 py-2.5 text-white bg-red-600 rounded-lg font-bold hover:bg-red-700 transition ${saving ? "opacity-60 cursor-not-allowed" : ""}`}>
            {saving ? "Đang lưu..." : "Lưu Thay Đổi"}
          </button>
        </div>
      </form>
    </div>
  );
}

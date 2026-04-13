"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const API = "http://localhost:5001/api";

export default function EditBannerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "", linkTo: "#", isActive: true, order: 0,
  });
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const [newFile, setNewFile] = useState<File | null>(null);
  const [newPreview, setNewPreview] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API}/banners/${id}`)
      .then((r) => r.json())
      .then((b) => {
        setFormData({
          title: b.title ?? "",
          linkTo: b.linkTo ?? "#",
          isActive: b.isActive ?? true,
          order: b.order ?? 0,
        });
        setCurrentImageUrl(b.imageUrl ?? "");
      })
      .catch(() => alert("Không tải được banner"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const f = e.target.files[0];
      setNewFile(f);
      setNewPreview(URL.createObjectURL(f));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("linkTo", formData.linkTo);
      data.append("isActive", String(formData.isActive));
      data.append("order", String(formData.order));
      if (newFile) data.append("image", newFile);

      const res = await fetch(`${API}/banners/${id}`, { method: "PUT", body: data });
      if (res.ok) {
        alert("✅ Cập nhật banner thành công!");
        router.push("/banners");
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
        <h1 className="text-2xl font-bold text-gray-900">Chỉnh Sửa Banner</h1>
        <Link href="/banners" className="text-sm text-gray-500 hover:text-gray-700 underline">← Quay lại</Link>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">

        {/* Current image */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Ảnh hiện tại</label>
          {currentImageUrl && (
            <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
              <Image src={currentImageUrl} alt="Banner hiện tại" fill className="object-cover" sizes="100vw" />
            </div>
          )}
        </div>

        {/* Replace image */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Thay ảnh mới (tuỳ chọn)</label>
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-5 cursor-pointer hover:bg-gray-50 transition">
            <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
            <span className="text-2xl mb-1">🖼️</span>
            <span className="text-sm text-gray-500">Click để chọn ảnh mới (tỷ lệ 21:9 tốt nhất)</span>
          </label>
          {newPreview && (
            <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden border border-gray-200 mt-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={newPreview} alt="Preview" className="w-full h-full object-cover" />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tiêu đề nội bộ *</label>
            <input name="title" required value={formData.title} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              placeholder="VD: Banner Tháng 4 - CTKM Hè 2025" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Link đích (khi khách click)</label>
            <input name="linkTo" value={formData.linkTo} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:ring-2 focus:ring-red-500 outline-none"
              placeholder="/xe-may-dien" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Thứ tự hiển thị (số nhỏ xếp trước)</label>
            <input name="order" type="number" value={formData.order} onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 bg-white focus:ring-2 focus:ring-red-500 outline-none" />
          </div>
          <div className="flex items-center gap-3 pt-6">
            <input id="isActive" name="isActive" type="checkbox" checked={formData.isActive} onChange={handleChange}
              className="w-5 h-5 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer" />
            <label htmlFor="isActive" className="text-sm font-semibold text-gray-700 cursor-pointer">
              Hiển thị trên trang chủ
            </label>
          </div>
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

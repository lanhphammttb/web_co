"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewBannerPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    linkTo: '#',
    isActive: true,
    order: 0,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) {
      alert('Vui lòng chọn ảnh banner');
      return;
    }

    setLoading(true);
    const data = new FormData();
    data.append('title', formData.title);
    data.append('linkTo', formData.linkTo);
    data.append('isActive', formData.isActive.toString());
    data.append('order', formData.order.toString());
    data.append('image', imageFile);

    try {
      const res = await fetch('http://localhost:5001/api/banners', {
        method: 'POST',
        body: data,
      });
      if (res.ok) {
        alert('Tạo Banner thành công!');
        router.push('/banners');
      } else {
        const err = await res.json();
        alert('Lỗi: ' + err.message);
      }
    } catch (error) {
      console.error(error);
      alert('Đã xảy ra lỗi khi upload banner');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
         <h1 className="text-2xl font-bold text-gray-800">Thêm Banner Mới</h1>
         <Link href="/banners" className="text-gray-500 hover:text-gray-700 underline text-sm">Quay lại danh sách</Link>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Hình ảnh Banner (Ưu tiên tỷ lệ 21:9 ngang) *</label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition cursor-pointer relative overflow-hidden">
             <input type="file" onChange={handleImageChange} accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" required />
             {imagePreview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imagePreview} alt="Preview" className="w-full h-auto max-h-64 object-contain rounded-md" />
             ) : (
                <div className="text-gray-500 text-sm">
                   <div className="text-3xl mb-2">📸</div>
                   Kéo thả hoặc click để chọn ảnh (JPG, PNG)
                </div>
             )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
           <div>
             <label className="block text-sm font-semibold text-gray-700 mb-2">Tiêu đề nội bộ (Không hiển thị)*</label>
             <input type="text" name="title" value={formData.title} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition outline-none" placeholder="VD: Banner Tựu Trường 2026"/>
           </div>
           <div>
             <label className="block text-sm font-semibold text-gray-700 mb-2">Link đích (Khi khách click vào)</label>
             <input type="text" name="linkTo" value={formData.linkTo} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition outline-none" placeholder="/xe-may-dien"/>
           </div>
           <div>
             <label className="block text-sm font-semibold text-gray-700 mb-2">Thứ tự hiển thị (Nhỏ xếp trước)</label>
             <input type="number" name="order" value={formData.order} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 transition outline-none" />
           </div>
           <div className="flex items-center pt-8 space-x-3">
             <input type="checkbox" id="isActive" name="isActive" checked={formData.isActive} onChange={handleInputChange} className="w-5 h-5 text-red-600 rounded border-gray-300 focus:ring-red-500" />
             <label htmlFor="isActive" className="text-sm font-semibold text-gray-700 cursor-pointer">Bật hiển thị trên Frontend</label>
           </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-end">
          <button type="submit" disabled={loading} className={`bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition shadow-sm ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
             {loading ? 'Đang tải lên...' : 'Lưu Banner'}
          </button>
        </div>
      </form>
    </div>
  );
}

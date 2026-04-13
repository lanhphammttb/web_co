"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Banner {
  _id: string;
  title: string;
  imageUrl: string;
  linkTo: string;
  isActive: boolean;
  order: number;
}

export default function BannersPage() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await fetch('http://localhost:5001/api/banners');
        const data = await res.json();
        setBanners(data);
      } catch (error) {
        console.error('Error fetching banners', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBanners();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Bạn có chắc muốn xóa banner này?')) return;
    try {
      await fetch(`http://localhost:5001/api/banners/${id}`, {
        method: 'DELETE',
      });
      setBanners(banners.filter((b) => b._id !== id));
    } catch (error) {
      alert('Lỗi khi xóa');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Quản lý Banners</h1>
        <Link href="/banners/new" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition shadow-sm">
          + Thêm Banner Mới
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Đang tải dữ liệu...</div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100 text-gray-600">
              <tr>
                <th className="px-6 py-4 font-semibold text-sm">Hình Ảnh</th>
                <th className="px-6 py-4 font-semibold text-sm">Tiêu Đề</th>
                <th className="px-6 py-4 font-semibold text-sm">Link đích</th>
                <th className="px-6 py-4 font-semibold text-sm">Trạng thái</th>
                <th className="px-6 py-4 font-semibold text-sm">Thứ tự</th>
                <th className="px-6 py-4 font-semibold text-sm">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {banners.length === 0 ? (
                <tr><td colSpan={6} className="text-center py-8 text-gray-500">Chưa có banner nào</td></tr>
              ) : banners.map((banner) => (
                <tr key={banner._id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="w-40 aspect-[21/9] bg-gray-100 rounded-md overflow-hidden relative">
                      {banner.imageUrl ? (
                        <Image src={banner.imageUrl} alt={banner.title} fill className="object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs text-center p-2">Lỗi Ảnh</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">{banner.title}</td>
                  <td className="px-6 py-4 text-gray-500 text-sm truncate max-w-[150px]">{banner.linkTo}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${banner.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                      {banner.isActive ? 'Đang chạy' : 'Đã tắt'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 font-bold">{banner.order}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-3">
                      <Link href={`/banners/${banner._id}/edit`} className="text-blue-600 hover:text-blue-800 font-medium text-sm transition">Sửa</Link>
                      <button onClick={() => handleDelete(banner._id)} className="text-red-600 hover:text-red-800 font-medium text-sm transition">Xóa</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

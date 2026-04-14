import Link from 'next/link';
import NewsletterForm from '../ui/NewsletterForm';

const INFO_COL = [
  { label: 'Tin tức',              href: '/tin-tuc' },
  { label: 'CTKM Tháng',          href: '/ctkm-thang' },
  { label: 'Review xe điện',      href: '/review-xe-dien' },
  { label: 'Video',               href: '/video' },
];

const POLICIES = [
  { label: 'Quy định sử dụng',           href: '/dieu-khoan-dich-vu' },
  { label: 'Chính sách trả góp',         href: '/chinh-sach-tra-gop' },
  { label: 'Chính sách bảo mật',         href: '/chinh-sach-bao-mat' },
  { label: 'Chính sách vận chuyển',      href: '/chinh-sach-van-chuyen' },
  { label: 'Chính sách bảo hành',        href: '/chinh-sach-bao-hanh' },
  { label: 'Chính sách đổi trả',         href: '/chinh-sach-doi-tra' },
  { label: 'Chính sách mua bán hàng hoá', href: '/chinh-sach-tmdt' },
];

const GUIDES = [
  { label: 'Hướng dẫn mua hàng',  href: '/huong-dan-mua-hang' },
  { label: 'Hướng dẫn thanh toán', href: '/hinh-thuc-thanh-toan' },
  { label: 'Hướng dẫn giao nhận', href: '/thong-tin-giao-hang' },
  { label: 'Điều khoản dịch vụ',  href: '/dieu-khoan-dich-vu' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f5] border-t border-gray-200 text-[#4c4c4c]">

      {/* Main footer */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Col 1 – Brand + contact */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-black text-primary tracking-tight italic">SMILE</span>
              <span className="text-[10px] font-bold text-[#4c4c4c] uppercase tracking-widest -mt-1">Xe Điện</span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-justify mb-4">
            Xe Điện Smile – Hệ thống phân phối xe đạp điện, xe máy điện chính hãng.
            Tôn chỉ: <strong className="text-primary">"Bán xe chính hãng là tôn trọng khách hàng"</strong>.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary shrink-0">📍</span>
              <span><strong>Trụ sở chính:</strong> 285A Hậu Giang, Phường 5, Quận 6, TP.HCM</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary shrink-0">📍</span>
              <span><strong>CN2:</strong> 188 Lạc Long Quân, P.3, Q.11, TP.HCM</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary shrink-0">📍</span>
              <span><strong>CN3:</strong> 190 Lạc Long Quân, P.3, Q.11, TP.HCM</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary shrink-0">📞</span>
              <span>Hotline: <a href="tel:0888882887" className="text-primary font-bold hover:text-accent transition">0888.882.887</a></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary shrink-0">📞</span>
              <span>Gọi mua hàng: <a href="tel:0918118508" className="text-primary font-bold hover:text-accent transition">0918.118.508</a></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary shrink-0">🔧</span>
              <span>Hỗ trợ kỹ thuật 24/7: <a href="tel:0969823528" className="text-primary font-bold hover:text-accent transition">0969.823.528</a></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary shrink-0">✉️</span>
              <span className="truncate">Xediensmile@gmail.com</span>
            </li>
          </ul>

          {/* Social */}
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#1877f2] text-white flex items-center justify-center font-bold text-sm hover:opacity-80 transition">f</a>
            <a href="#" aria-label="YouTube"  className="w-9 h-9 rounded-full bg-[#ff0000] text-white flex items-center justify-center text-xs font-bold hover:opacity-80 transition">▶</a>
            <a href="#" aria-label="TikTok"   className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold hover:opacity-80 transition">TT</a>
            <a href="#" aria-label="Zalo"     className="w-9 h-9 rounded-full bg-[#0068ff] text-white flex items-center justify-center text-xs font-bold hover:opacity-80 transition">Za</a>
          </div>
        </div>

        {/* Col 2 – Thông tin + Chính sách */}
        <div>
          <h4 className="text-base font-bold text-[#333] mb-4 uppercase border-b-2 border-primary pb-2">
            Thông Tin
          </h4>
          <ul className="space-y-2 mb-6">
            {INFO_COL.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-sm flex items-center gap-1.5 hover:text-primary transition">
                  <span className="text-primary">›</span> {p.label}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="text-base font-bold text-[#333] mb-4 uppercase border-b-2 border-primary pb-2">
            Chính Sách
          </h4>
          <ul className="space-y-2">
            {POLICIES.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-sm flex items-center gap-1.5 hover:text-primary transition">
                  <span className="text-primary">›</span> {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 – Hướng dẫn */}
        <div>
          <h4 className="text-base font-bold text-[#333] mb-4 uppercase border-b-2 border-primary pb-2">
            Hướng Dẫn
          </h4>
          <ul className="space-y-2">
            {GUIDES.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-sm flex items-center gap-1.5 hover:text-primary transition">
                  <span className="text-primary">›</span> {p.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hỗ trợ khách hàng */}
          <h4 className="text-base font-bold text-[#333] mt-6 mb-4 uppercase border-b-2 border-primary pb-2">
            Hỗ Trợ Khách Hàng
          </h4>
          <ul className="space-y-2">
            {[
              { label: 'Tìm kiếm', href: '/search' },
              { label: 'Giỏ hàng', href: '/' },
            ].map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-sm flex items-center gap-1.5 hover:text-primary transition">
                  <span className="text-primary">›</span> {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 – Newsletter + payment + company */}
        <div>
          <h4 className="text-base font-bold text-[#333] mb-4 uppercase border-b-2 border-primary pb-2">
            Đăng Ký Nhận Tin
          </h4>
          <p className="text-sm mb-4 text-gray-600">
            Nhận thông báo khuyến mãi, xe mới và tin tức từ Xe Điện Smile.
          </p>
          <div className="mb-6">
            <NewsletterForm />
          </div>

          <h4 className="text-base font-bold text-[#333] mb-3 uppercase">Phương Thức Thanh Toán</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {['VISA', 'MC', 'ATM', 'COD', 'ZaloPay', 'MoMo'].map((pm) => (
              <span key={pm} className="px-2.5 py-1 bg-white border border-gray-200 rounded text-xs font-bold text-gray-600 shadow-sm">
                {pm}
              </span>
            ))}
          </div>

          <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs text-gray-500">
            <p className="font-bold text-gray-700 mb-1">CÔNG TY TNHH XE ĐIỆN SMILE</p>
            <p>GPDKKD: <strong>0319384061</strong></p>
            <p>do sở Tài Chính TP.HCM cấp ngày 28/01/2026</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#22272b] text-gray-400 py-3 text-xs text-center px-4">
        Bản quyền thuộc về{' '}
        <strong className="text-white">Xe Điện Smile</strong>. Cung cấp bởi{' '}
        <strong className="text-white">Xe Điện Smile</strong>.
      </div>
    </footer>
  );
}

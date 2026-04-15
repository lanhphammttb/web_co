import Link from 'next/link';
import NewsletterForm from '../ui/NewsletterForm';

const POLICIES = [
  { label: 'Điều khoản dịch vụ',      href: '/dieu-khoan-dich-vu' },
  { label: 'Chính sách trả góp',       href: '/chinh-sach-tra-gop' },
  { label: 'Chính sách bảo mật',       href: '/chinh-sach-bao-mat' },
  { label: 'Chính sách vận chuyển',    href: '/chinh-sach-van-chuyen' },
  { label: 'Chính sách bảo hành',      href: '/chinh-sach-bao-hanh' },
  { label: 'Chính sách đổi trả',       href: '/chinh-sach-doi-tra' },
  { label: 'Chính sách TMĐT',          href: '/chinh-sach-tmdt' },
];

const GUIDES = [
  { label: 'Hướng dẫn mua hàng',   href: '/huong-dan-mua-hang' },
  { label: 'Hình thức thanh toán',  href: '/hinh-thuc-thanh-toan' },
  { label: 'Thông tin giao hàng',   href: '/thong-tin-giao-hang' },
  { label: 'Điều khoản dịch vụ',   href: '/dieu-khoan-dich-vu' },
];

const INFO_LINKS = [
  { label: 'Tin tức',      href: '/tin-tuc' },
  { label: 'Khuyến mãi',  href: '/ctkm-thang' },
  { label: 'Đánh giá',    href: '/danh-gia' },
  { label: 'Video',        href: '/video' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#22272b] text-gray-300">

      {/* ── Main footer columns ── */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Col 1 – Brand */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black text-white tracking-tight italic">SMILE</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest -mt-0.5">Xe Điện</span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed mb-5 text-gray-400">
            Hệ thống phân phối xe đạp điện, xe máy điện chính hãng.
            Tôn chỉ: <strong className="text-white">Bán xe chính hãng là tôn trọng khách hàng</strong>.
          </p>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li className="flex items-start gap-2.5">
              <span className="text-[#00579c] mt-0.5 shrink-0">📍</span>
              <span><strong className="text-gray-200">CN1:</strong> 285A Hậu Giang, P.5, Q.6, TP.HCM</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#00579c] mt-0.5 shrink-0">📍</span>
              <span><strong className="text-gray-200">CN2:</strong> 897 Trường Chinh, P. Tây Thạnh, Q. Tân Phú, TP.HCM</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-[#00579c] shrink-0">📞</span>
              <span>Kinh doanh: <a href="tel:0918118508" className="text-white font-bold hover:text-[#f48f7f] transition">0918.118.508</a></span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-[#00579c] shrink-0">🔧</span>
              <span>Kỹ thuật 24/7: <a href="tel:0969823528" className="text-white font-bold hover:text-[#f48f7f] transition">0969.823.528</a></span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-[#00579c] shrink-0">✉️</span>
              <span className="break-all">Xediensmile@gmail.com</span>
            </li>
          </ul>

          {/* Social */}
          <div className="flex gap-2.5 mt-5">
            <a href="#" aria-label="Facebook"
               className="w-9 h-9 rounded-full bg-[#1877f2] text-white flex items-center justify-center font-bold text-sm hover:opacity-80 transition">f</a>
            <a href="#" aria-label="YouTube"
               className="w-9 h-9 rounded-full bg-[#ff0000] text-white flex items-center justify-center text-xs font-bold hover:opacity-80 transition">▶</a>
            <a href="#" aria-label="TikTok"
               className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold border border-white/20 hover:opacity-80 transition">TT</a>
            <a href="#" aria-label="Zalo"
               className="w-9 h-9 rounded-full bg-[#0068ff] text-white flex items-center justify-center text-xs font-bold hover:opacity-80 transition">Za</a>
            <a href="#" aria-label="Shopee"
               className="w-9 h-9 rounded-full bg-[#ee4d2d] text-white flex items-center justify-center text-xs font-bold hover:opacity-80 transition">Sh</a>
          </div>
        </div>

        {/* Col 2 – Policies */}
        <div>
          <h4 className="text-sm font-black text-white mb-4 uppercase border-b border-white/10 pb-3">Chính Sách</h4>
          <ul className="space-y-2">
            {POLICIES.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-sm text-gray-400 flex items-center gap-2 hover:text-white transition group">
                  <span className="text-[#00579c] group-hover:text-[#f48f7f] transition">›</span>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 – Info + Guides */}
        <div>
          <h4 className="text-sm font-black text-white mb-4 uppercase border-b border-white/10 pb-3">Thông Tin</h4>
          <ul className="space-y-2 mb-6">
            {INFO_LINKS.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-sm text-gray-400 flex items-center gap-2 hover:text-white transition group">
                  <span className="text-[#00579c] group-hover:text-[#f48f7f] transition">›</span>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="text-sm font-black text-white mb-4 uppercase border-b border-white/10 pb-3">Hướng Dẫn</h4>
          <ul className="space-y-2">
            {GUIDES.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-sm text-gray-400 flex items-center gap-2 hover:text-white transition group">
                  <span className="text-[#00579c] group-hover:text-[#f48f7f] transition">›</span>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 – Newsletter + payment */}
        <div>
          <h4 className="text-sm font-black text-white mb-4 uppercase border-b border-white/10 pb-3">Đăng Ký Nhận Tin</h4>
          <p className="text-sm text-gray-400 mb-4">Nhận thông báo khuyến mãi và xe mới từ Xe Điện Smile.</p>
          <div className="mb-6">
            <NewsletterForm dark />
          </div>

          <h4 className="text-sm font-black text-white mb-3 uppercase">Phương Thức Thanh Toán</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {['VISA', 'Mastercard', 'ATM', 'COD', 'ZaloPay', 'MoMo', 'VNPay'].map((pm) => (
              <span key={pm}
                className="px-2.5 py-1 bg-white/10 border border-white/10 rounded text-xs font-bold text-gray-300">
                {pm}
              </span>
            ))}
          </div>

          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-gray-400">
            <p className="font-bold text-gray-200 mb-1">CÔNG TY TNHH XE ĐIỆN SMILE</p>
            <p>GPDKKD: <strong className="text-gray-200">0319384061</strong></p>
            <p className="mt-0.5">Cấp bởi Sở KH&ĐT TP.HCM</p>
          </div>
        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="border-t border-white/10 py-4 text-xs text-center text-gray-500 px-4">
        &copy; {new Date().getFullYear()} Bản quyền thuộc về{' '}
        <strong className="text-gray-300">Xe Điện Smile</strong>. Đã đăng ký bản quyền.
      </div>
    </footer>
  );
}

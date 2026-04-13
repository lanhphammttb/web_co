import Link from 'next/link';
import NewsletterForm from '../ui/NewsletterForm';

const POLICIES = [
  { label: 'Điều khoản dịch vụ', href: '/dieu-khoan-dich-vu' },
  { label: 'Chính sách trả góp', href: '/chinh-sach-tra-gop' },
  { label: 'Chính sách bảo mật', href: '/chinh-sach-bao-mat' },
  { label: 'Chính sách vận chuyển', href: '/chinh-sach-van-chuyen' },
  { label: 'Chính sách bảo hành', href: '/chinh-sach-bao-hanh' },
  { label: 'Chính sách đổi trả', href: '/chinh-sach-doi-tra' },
  { label: 'Chính sách thương mại điện tử', href: '/chinh-sach-tmdt' },
];

const GUIDES = [
  { label: 'Hướng dẫn mua hàng', href: '/huong-dan-mua-hang' },
  { label: 'Hình thức thanh toán', href: '/hinh-thuc-thanh-toan' },
  { label: 'Thông tin giao hàng', href: '/thong-tin-giao-hang' },
  { label: 'Điều khoản dịch vụ', href: '/dieu-khoan-dich-vu' },
];

const INFO_LINKS = [
  { label: 'Tin tức', href: '/tin-tuc' },
  { label: 'Khuyến mãi', href: '/ctkm-thang' },
  { label: 'Đánh giá', href: '/danh-gia' },
  { label: 'Video', href: '/video' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f5] border-t border-gray-200 text-[#4c4c4c]">

      {/* Service guarantees strip */}
      <div className="bg-primary text-white py-4">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '🚚', title: 'Giao Hàng Miễn Phí', sub: 'Toàn quốc cho đơn từ 500K' },
            { icon: '🔧', title: 'Sửa Chữa 24/7', sub: 'Cứu hộ tận nơi mọi lúc' },
            { icon: '💳', title: 'Trả Góp 0%', sub: 'Hỗ trợ trả góp qua ngân hàng' },
            { icon: '🛡️', title: 'Hậu Mãi An Tâm', sub: 'Bảo hành 12–36 tháng' },
          ].map((s) => (
            <div key={s.title} className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <div>
                <p className="font-bold text-sm leading-tight">{s.title}</p>
                <p className="text-xs text-blue-100">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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
            Tôn chỉ: <strong className="text-primary">Bán xe chính hãng là tôn trọng khách hàng</strong>.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary shrink-0">📍</span>
              <span><strong>Chi nhánh 1:</strong> 285A Hậu Giang, P.5, Q.6, TP.HCM</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary shrink-0">📍</span>
              <span><strong>Chi nhánh 2:</strong> 897 Trường Chinh, P. Tây Thạnh, Q. Tân Phú, TP.HCM</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary shrink-0">📞</span>
              <span>Kinh doanh: <a href="tel:0918118508" className="text-primary font-bold hover:text-accent transition">0918.118.508</a></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary shrink-0">🔧</span>
              <span>Kỹ thuật: <a href="tel:0969823528" className="text-primary font-bold hover:text-accent transition">0969.823.528</a></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary shrink-0">✉️</span>
              <span className="truncate">Xediensmile@gmail.com</span>
            </li>
          </ul>

          {/* Social */}
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#1877f2] text-white flex items-center justify-center font-bold text-sm hover:opacity-80 transition">f</a>
            <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-[#ff0000] text-white flex items-center justify-center text-xs font-bold hover:opacity-80 transition">▶</a>
            <a href="#" aria-label="TikTok" className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold hover:opacity-80 transition">TT</a>
            <a href="#" aria-label="Zalo" className="w-9 h-9 rounded-full bg-[#0068ff] text-white flex items-center justify-center text-xs font-bold hover:opacity-80 transition">Za</a>
          </div>
        </div>

        {/* Col 2 – Policies */}
        <div>
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

        {/* Col 3 – Guides */}
        <div>
          <h4 className="text-base font-bold text-[#333] mb-4 uppercase border-b-2 border-primary pb-2">
            Thông Tin
          </h4>
          <ul className="space-y-2 mb-6">
            {INFO_LINKS.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-sm flex items-center gap-1.5 hover:text-primary transition">
                  <span className="text-primary">›</span> {p.label}
                </Link>
              </li>
            ))}
          </ul>
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
        </div>

        {/* Col 4 – Newsletter + payment */}
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
          <div className="flex flex-wrap gap-2">
            {['VISA', 'MC', 'ATM', 'COD', 'ZaloPay', 'MoMo'].map((pm) => (
              <span key={pm} className="px-2.5 py-1 bg-white border border-gray-200 rounded text-xs font-bold text-gray-600 shadow-sm">
                {pm}
              </span>
            ))}
          </div>

          <div className="mt-6 p-3 bg-white rounded-xl border border-gray-200 text-xs text-gray-500">
            <p className="font-bold text-gray-700 mb-1">Đăng ký kinh doanh</p>
            <p>MST: <strong>0319384061</strong></p>
            <p>Cấp bởi Sở KH&ĐT TP.HCM</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#22272b] text-gray-400 py-3 text-xs text-center px-4">
        &copy; {new Date().getFullYear()} Bản quyền thuộc về{' '}
        <strong className="text-white">Xe Điện Smile</strong>. Đã đăng ký bản quyền.
      </div>
    </footer>
  );
}

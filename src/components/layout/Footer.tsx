import React from "react";
import { Leaf, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Philosophy */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-primary text-white">
                <Leaf className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Menu<span className="text-primary-light">Green</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Kiến tạo hành trình dinh dưỡng xanh lành mạnh, đưa những bữa ăn
              hữu cơ tinh khiết từ thiên nhiên đến bàn ăn của bạn.
            </p>
            <p className="text-xs font-semibold text-primary-light tracking-wide uppercase italic">
              &quot;Ăn xanh • Sống sạch • Trọn sức sống&quot;
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Khám Phá
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#hero"
                  className="hover:text-primary-light transition-colors"
                >
                  Trang chủ
                </a>
              </li>
              <li>
                <a
                  href="#app"
                  className="hover:text-primary-light transition-colors"
                >
                  Ứng dụng
                </a>
              </li>
              <li>
                <a
                  href="#philosophy"
                  className="hover:text-primary-light transition-colors"
                >
                  Câu chuyện
                </a>
              </li>
              <li>
                <a
                  href="#metrics"
                  className="hover:text-primary-light transition-colors"
                >
                  Tính toán sức khỏe
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-primary-light transition-colors"
                >
                  Thực đơn xanh
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-primary-light transition-colors"
                >
                  Gói dịch vụ
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Chính Sách
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-light transition-colors"
                >
                  Về MenuGreen
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-light transition-colors"
                >
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-light transition-colors"
                >
                  Điều khoản dịch vụ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-light transition-colors"
                >
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1 flex flex-col gap-3 text-sm text-slate-400">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Liên Hệ
            </h3>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-primary-light shrink-0" />
              <span>123 Đường Xanh, Quận 1, TP. Hồ Chí Minh</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary-light shrink-0" />
              <span>+84 987 654 321</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary-light shrink-0" />
              <span>hello@menugreen.vn</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-full bg-slate-800 hover:bg-primary hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-full bg-slate-800 hover:bg-primary hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Website"
                className="p-2 rounded-full bg-slate-800 hover:bg-primary hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} MenuGreen. All rights reserved.
          </p>
          <p>Thiết kế tinh tế vì sức khỏe cộng đồng Việt.</p>
        </div>
      </div>
    </footer>
  );
}

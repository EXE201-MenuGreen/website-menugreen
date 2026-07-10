import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  variable: "--font-editorial",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MenuGreen - Thực Đơn Xanh & Cân Bằng Dinh Dưỡng Lành Mạnh",
  description: "Khám phá phong cách sống xanh sạch cùng MenuGreen. Tính toán chỉ số sức khỏe, đo lường năng lượng sinh khí và khám phá thực đơn hữu cơ thiết kế riêng cho thể trạng của bạn.",
  keywords: ["ăn xanh", "sống sạch", "thực đơn healthy", "dinh dưỡng lành mạnh", "MenuGreen", "healthy food", "organic salad"],
  authors: [{ name: "MenuGreen Team" }],
  openGraph: {
    title: "MenuGreen - Thực Đơn Xanh & Cân Bằng Dinh Dưỡng Lành Mạnh",
    description: "Giải pháp ăn uống sạch hữu cơ tối giản giúp thanh lọc cơ thể, tối ưu chỉ số BMI và tăng cường sinh khí.",
    url: "https://menugreen.vn",
    siteName: "MenuGreen",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${notoSerif.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground antialiased selection:bg-primary/10 selection:text-primary">
        <Navbar />
        <main className="flex-grow">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

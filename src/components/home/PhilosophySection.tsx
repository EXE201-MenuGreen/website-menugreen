"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Leaf, Heart, Sun } from "lucide-react";

export default function PhilosophySection() {
  const cards = [
    {
      icon: <Sun className="w-6 h-6 text-primary" />,
      title: "Gieo trồng tự nhiên",
      description: "Rau xanh hữu cơ được thu hoạch vào sáng sớm, canh tác hoàn toàn tự nhiên không hóa chất.",
    },
    {
      icon: <Leaf className="w-6 h-6 text-primary" />,
      title: "Dinh dưỡng nguyên bản",
      description: "Quy trình sơ chế giữ trọn vitamin, chất xơ và enzym tự nhiên tốt nhất cho hệ tiêu hóa.",
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Phù hợp thể trạng",
      description: "Thực đơn được định lượng khắt khe để vừa đủ năng lượng mà không tích tụ mỡ thừa.",
    },
  ];

  return (
    <section
      id="philosophy"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Giai Đoạn 2: Nguồn Gốc Tinh Khiết</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight">
            Nguồn Sống Xanh Bắt Đầu Từ Nông Trại Sạch
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Chúng tôi tin rằng, sức khỏe bền vững bắt đầu từ nguồn nguyên liệu trung thực và quá trình chế biến lành mạnh nhất.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Macro Image */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-slate-100 shadow-xl"
            >
              <Image
                src="/organic-greens.png"
                alt="Fresh farm-to-table organic vegetables"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </motion.div>
            
            {/* Visual floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/10 -z-10" />
          </div>

          {/* Right Column: Key Sourcing Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-text-dark">Hành trình Khép Kín "Từ Trang Trại Đến Bàn Ăn"</h3>
              <p className="text-text-secondary leading-relaxed">
                Mỗi bữa ăn tại MenuGreen không chỉ đơn thuần là thực phẩm. Đó là sự cam kết tuyệt đối về chất lượng. Toàn bộ rau xanh và ngũ cốc được tuyển chọn từ các hợp tác xã hữu cơ đạt chuẩn quốc tế, chế biến trong ngày để đảm bảo độ tươi mới tối đa.
              </p>
            </div>

            {/* Philosophy Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col gap-3 p-5 rounded-2xl bg-stone-50 border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h4 className="font-bold text-text-dark text-base">{card.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote / Highlight */}
            <div className="p-4 rounded-xl border-l-4 border-primary bg-primary/5 italic text-sm text-text-primary font-medium">
              "Lựa chọn thực phẩm sạch là cách tốt nhất để thể hiện sự tôn trọng đối với chính cơ thể của bạn."
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

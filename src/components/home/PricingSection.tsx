"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Shield, User, Briefcase, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const plans = [
    {
      icon: <User className="w-6 h-6 text-primary" />,
      title: "Gói Sinh Viên",
      price: "99.000",
      period: "ngày",
      description: "Dinh dưỡng chuẩn lành mạnh với chi phí tối ưu, giúp tăng cường sự tập trung trong học tập.",
      features: [
        "1 Bữa chính xanh tự chọn",
        "1 Chai nước ép thải độc (250ml)",
        "Tính toán lượng calo chi tiết",
        "Giao hàng tận nơi miễn phí nội khu",
      ],
      popular: false,
      ctaText: "Đăng Ký Gói Học Đường",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary-light" />,
      title: "Gói Văn Phòng",
      price: "189.000",
      period: "ngày",
      description: "Đập tan mệt mỏi buổi chiều, giữ dáng thon gọn và chống tích tụ mỡ thừa do ngồi lâu.",
      features: [
        "2 Bữa chính xanh thiết kế riêng",
        "1 Smoothie dinh dưỡng (350ml)",
        "Loại trừ 100% tinh bột xấu & dầu mỡ bẩn",
        "Hỗ trợ tư vấn chỉ số sức khỏe định kỳ",
      ],
      popular: true,
      ctaText: "Đăng Ký Gói Công Sở",
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-primary" />,
      title: "Gói Tập Gym",
      price: "200.000",
      period: "ngày",
      description: "Hàm lượng đạm thực và động vật sạch cao, hỗ trợ tối đa việc tăng cơ, giảm mỡ bền vững.",
      features: [
        "2 Bữa giàu đạm & rau xanh đậm màu",
        "1 Shake bổ sung protein thực vật",
        "Tùy chỉnh macros theo mục tiêu tăng/giảm cân",
        "Miễn phí thay đổi thực đơn linh hoạt",
      ],
      popular: false,
      ctaText: "Đăng Ký Gói Thể Hình",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 lg:py-24 bg-white/70 backdrop-blur-[1px] relative overflow-hidden"
    >
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-8 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Giai Đoạn 5: Đồng Hành Bền Vững</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.35rem] font-extrabold text-text-dark tracking-tight leading-tight">
            Chọn Gói Dinh Dưỡng Phù Hợp Thể Trạng
          </h2>
          <p className="text-text-secondary text-base lg:text-[1.05rem]">
            Được định lượng dinh dưỡng khoa học bởi chuyên gia để đồng hành cùng bạn trên con đường nâng cao chất lượng cuộc sống.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 w-full items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative bg-white border rounded-3xl p-6 xl:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl ${
                plan.popular
                  ? "border-primary-light shadow-xl shadow-primary/5 md:scale-105 z-10"
                  : "border-slate-100 shadow-lg shadow-slate-100/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md flex items-center gap-1">
                  <Shield className="w-3 h-3 fill-current" />
                  Được Chọn Nhiều Nhất
                </div>
              )}

              {/* Card Content */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className={`p-3 rounded-2xl ${plan.popular ? "bg-primary-light/10 text-primary-light" : "bg-primary/10 text-primary"}`}>
                    {plan.icon}
                  </div>
                  <span className="text-sm text-text-secondary font-medium">{plan.title}</span>
                </div>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black text-text-dark">{plan.price}đ</span>
                  <span className="text-xs text-text-secondary font-semibold">/ {plan.period}</span>
                </div>

                <p className="text-sm lg:text-xs xl:text-sm text-text-secondary leading-relaxed mb-5 border-b border-slate-100 pb-5">
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 lg:space-y-2.5 xl:space-y-3.5 mb-6 xl:mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action CTA */}
              <Button
                variant={plan.popular ? "default" : "outline"}
                className={`w-full rounded-2xl py-6 text-xs font-bold uppercase tracking-wider ${
                  plan.popular
                    ? "bg-primary hover:bg-primary-light text-white shadow-lg shadow-primary/20"
                    : "border-primary/20 text-primary hover:bg-primary/5"
                }`}
              >
                {plan.ctaText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

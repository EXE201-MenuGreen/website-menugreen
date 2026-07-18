"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Globe, Droplet, Sparkles, AlertCircle, Trash2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function InteractiveMetric() {
  const [meatMeals, setMeatMeals] = useState<number>(10); // meals per week
  const [plasticUsage, setPlasticUsage] = useState<number>(50); // % of plastic packaging used
  const [greenMeals, setGreenMeals] = useState<number>(7); // green meals per week

  const greenScore = Math.min(100, Math.max(10, Math.round(60 + (greenMeals * 2.5) - (meatMeals * 1) - (plasticUsage * 0.15))));
  const co2Saved = parseFloat((greenMeals * 1.6).toFixed(1));
  const waterSaved = greenMeals * 450;
  const plasticAvoided = greenMeals * 2;

  const getGreenCategory = (score: number) => {
    if (score < 45) return { label: "Cần cải thiện", color: "text-amber-600 bg-amber-50" };
    if (score <= 75) return { label: "Sống Xanh Tích Cực", color: "text-primary bg-emerald-50" };
    return { label: "Đại Sứ Xanh", color: "text-emerald-700 bg-emerald-100" };
  };

  const greenCat = getGreenCategory(greenScore);

  return (
    <section
      id="metrics"
      className="py-20 lg:py-24 bg-white/65 backdrop-blur-[1px] relative overflow-hidden"
    >
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-8 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5" />
            <span>Giai Đoạn 3: Dấu Chân Xanh Lối Sống</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.35rem] font-extrabold text-text-dark tracking-tight leading-tight">
            Đo Lường Chỉ Số Tác Động Xanh
          </h2>
          <p className="text-text-secondary text-base lg:text-[1.05rem]">
            Nhập thói quen sinh hoạt của bạn và xem việc bổ sung các bữa ăn xanh lành mạnh sẽ giúp bảo vệ môi trường & giảm dấu chân sinh thái thế nào.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-stretch">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-6 bg-white/60 border border-white/80 backdrop-blur-md shadow-xl flex flex-col gap-6 p-6 xl:p-8">
            <h3 className="text-xl font-bold text-text-dark border-b border-slate-100 pb-4">Thói Quen Tiêu Dùng</h3>
            
            {/* Meat Meals Slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm font-semibold text-text-dark">
                <span>Số bữa ăn nhiều thịt / đồ ăn nhanh (trên tuần):</span>
                <span className="text-primary text-base font-extrabold">{meatMeals} bữa / 21 bữa</span>
              </div>
              <input
                type="range"
                min="0"
                max="21"
                value={meatMeals}
                onChange={(e) => setMeatMeals(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            {/* Plastic Usage Slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm font-semibold text-text-dark">
                <span>Mức độ sử dụng hộp nhựa / túi nilon dùng 1 lần:</span>
                <span className="text-primary text-base font-extrabold">{plasticUsage}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={plasticUsage}
                onChange={(e) => setPlasticUsage(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            {/* Green Meals Slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm font-semibold text-text-dark">
                <span>Số bữa ăn xanh dự kiến (trên tuần):</span>
                <span className="text-primary text-base font-extrabold">{greenMeals} bữa / 21 bữa</span>
              </div>
              <input
                type="range"
                min="0"
                max="21"
                value={greenMeals}
                onChange={(e) => setGreenMeals(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <span className="text-xs text-text-secondary">
                * Khuyến nghị: Thay đổi ít nhất 7 bữa ăn mặn bằng bữa ăn xanh mỗi tuần để giảm thiểu đáng kể dấu chân carbon cá nhân.
              </span>
            </div>

            {/* Micro disclaimer */}
            <div className="flex items-start gap-2.5 p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-text-secondary leading-relaxed">
              <AlertCircle className="w-4 h-4 text-text-light shrink-0 mt-0.5" />
              <span>Chỉ số ước tính dựa trên nghiên cứu dấu chân carbon và tài nguyên nước của mạng lưới sinh thái toàn cầu.</span>
            </div>
          </div>

          {/* Right Column: Calculations & Visual Feedback */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Eco Impact Score Card */}
            <div className="bg-primary text-white p-6 xl:p-8 rounded-3xl flex flex-col gap-4 xl:gap-5 shadow-xl shadow-primary/20 relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-20%] w-48 h-48 rounded-full bg-primary-light/30 blur-2xl" />
              
              <div className="flex justify-between items-start z-10">
                <div>
                  <span className="text-xs font-semibold text-primary-light uppercase tracking-widest">Tác động sinh thái</span>
                  <h4 className="text-2xl font-black mt-1">Chỉ Số Sống Xanh</h4>
                </div>
                <div className="p-2.5 rounded-2xl bg-white/10 backdrop-blur-md">
                  <Sparkles className="w-6 h-6 text-emerald-300 fill-current" />
                </div>
              </div>

              <div className="flex items-baseline gap-2 z-10 my-2">
                <span className="text-5xl font-black tracking-tight">{greenScore}</span>
                <span className="text-lg font-semibold text-primary-light">/ 100 điểm</span>
              </div>

              <div className="z-10 flex flex-col gap-2">
                <div className="flex justify-between text-xs text-slate-200 font-semibold">
                  <span>Mức độ thân thiện môi trường</span>
                  <span>{greenScore}%</span>
                </div>
                <Progress value={greenScore} className="h-2.5 bg-white/20" />
              </div>

              <p className="text-sm text-slate-200/90 leading-relaxed z-10 pt-2 border-t border-white/10">
                {greenScore < 45
                  ? "Lối sống hiện tại có tác động khá lớn đến môi trường. Hãy tăng cường các bữa ăn xanh để cải thiện chỉ số sinh thái của bạn!"
                  : greenScore < 75
                  ? "Chỉ số sống xanh ở mức khá tốt! Hãy tiếp tục duy trì và tăng thêm bữa ăn xanh để lan tỏa lối sống bền vững."
                  : "Tuyệt vời! Chế độ tiêu dùng thân thiện của bạn đang đóng góp tích cực vào việc bảo vệ tài nguyên trái đất."}
              </p>
            </div>

            {/* Indicators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* CO2 Saved Card */}
              <div className="bg-white/60 p-6 rounded-2xl border border-white/80 backdrop-blur-md shadow-md flex flex-col gap-2 items-center text-center">
                <Globe className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs text-text-secondary uppercase font-semibold">Giảm thiểu CO2</span>
                <span className="text-2xl font-black text-text-dark">{co2Saved} kg</span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${greenCat.color}`}>
                  {greenCat.label}
                </span>
              </div>

              {/* Water Saved Card */}
              <div className="bg-white/60 p-6 rounded-2xl border border-white/80 backdrop-blur-md shadow-md flex flex-col gap-2 items-center text-center">
                <Droplet className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs text-text-secondary uppercase font-semibold">Tiết kiệm nước</span>
                <span className="text-2xl font-black text-text-dark">{waterSaved.toLocaleString()}L</span>
                <span className="text-xs text-text-light font-medium">Lượng nước sạch bảo tồn</span>
              </div>

              {/* Plastics Saved Card */}
              <div className="bg-white/60 p-6 rounded-2xl border border-white/80 backdrop-blur-md shadow-md flex flex-col gap-2 items-center text-center justify-center">
                <Trash2 className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs text-text-secondary uppercase font-semibold">Giảm rác thải nhựa</span>
                <span className="text-2xl font-black text-text-dark">
                  {plasticAvoided} hộp
                </span>
                <span className="text-xs text-text-light font-medium">Đã tránh xả ra môi trường</span>
              </div>

            </div>

          </div>

        </div>

        {/* Core Value Propositions */}
        <div className="mt-20 border-t border-slate-100 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:hidden">
          {/* Card 1: Organic Farm-to-Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4 items-start"
          >
            <div className="p-3.5 rounded-2xl bg-rose-50 text-rose-600 shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <div>
              <h4 className="text-base font-bold text-text-dark mb-1">Nông Sản Hữu Cơ 100%</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                Sử dụng nguồn nguyên liệu hoàn toàn từ các nông trại đạt chuẩn hữu cơ, canh tác tự nhiên không thuốc trừ sâu hay hóa chất, góp phần bảo vệ bền vững đất trồng và nguồn nước ngầm.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Save time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4 items-start"
          >
            <div className="p-3.5 rounded-2xl bg-emerald-50 text-primary shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <h4 className="text-base font-bold text-text-dark mb-1">Tiết Kiệm Thời Gian & Công Sức</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                Không còn mất thời gian lên thực đơn đi chợ, chuẩn bị nguyên liệu hay dọn dẹp sau khi nấu. Bữa ăn xanh giàu dinh dưỡng đã sẵn sàng để thưởng thức ngay tại nhà.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Biodegradable packaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4 items-start"
          >
            <div className="p-3.5 rounded-2xl bg-amber-50 text-amber-700 shrink-0">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-text-dark mb-1">Bao Bì Phân Hủy Sinh Học</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                Hộp đựng bữa ăn được làm 100% từ bã mía tự nhiên, tự phân hủy hoàn toàn trong lòng đất trong 45 ngày, tuyệt đối không tạo ra các hạt vi nhựa hay rác thải ô nhiễm môi trường.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Dumbbell, Droplet, Sparkles, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function InteractiveMetric() {
  const [weight, setWeight] = useState<number>(65);
  const [height, setHeight] = useState<number>(170);
  const [greenMeals, setGreenMeals] = useState<number>(7); // meals per week
  const [bmi, setBmi] = useState<number>(22.5);
  const [vitalityScore, setVitalityScore] = useState<number>(70);
  const [waterIntake, setWaterIntake] = useState<number>(2.3);

  // Recalculate values dynamically when inputs change
  useEffect(() => {
    // Calculate BMI
    const heightInMeters = height / 100;
    const computedBmi = weight / (heightInMeters * heightInMeters);
    setBmi(parseFloat(computedBmi.toFixed(1)));

    // Calculate Vitality Score (out of 100)
    // 50 base + meal contribution (up to 30) + healthy BMI contribution (up to 20)
    const mealScore = (greenMeals / 21) * 35;
    let bmiScore = 20;
    if (computedBmi < 18.5) {
      bmiScore = 10;
    } else if (computedBmi > 24.9 && computedBmi < 29.9) {
      bmiScore = 12;
    } else if (computedBmi >= 29.9) {
      bmiScore = 5;
    }
    const computedVitality = Math.min(100, Math.round(50 + mealScore + bmiScore));
    setVitalityScore(computedVitality);

    // Calculate Water Intake (liters)
    const computedWater = weight * 0.035;
    setWaterIntake(parseFloat(computedWater.toFixed(1)));
  }, [weight, height, greenMeals]);

  const getBmiCategory = (value: number) => {
    if (value < 18.5) return { label: "Thiếu cân", color: "text-amber-600 bg-amber-50" };
    if (value <= 24.9) return { label: "Cân đối", color: "text-primary bg-emerald-50" };
    if (value <= 29.9) return { label: "Thừa cân", color: "text-amber-600 bg-amber-50" };
    return { label: "Béo phì", color: "text-rose-600 bg-rose-50" };
  };

  const bmiCat = getBmiCategory(bmi);

  return (
    <section
      id="metrics"
      className="py-24 bg-gradient-to-br from-stone-50 via-emerald-50/20 to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5" />
            <span>Giai Đoạn 3: Cân Bằng Thể Trạng</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight">
            Đo Lường Sự Thay Đổi Của Cơ Thể
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Nhập các chỉ số cơ bản của bạn và xem việc bổ sung các bữa ăn xanh lành mạnh sẽ biến đổi năng lượng sống của bạn thế nào.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col gap-8">
            <h3 className="text-xl font-bold text-text-dark border-b border-slate-100 pb-4">Thông Số Cơ Thể</h3>
            
            {/* Height Slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm font-semibold text-text-dark">
                <span>Chiều cao của bạn:</span>
                <span className="text-primary text-base font-extrabold">{height} cm</span>
              </div>
              <input
                type="range"
                min="140"
                max="210"
                value={height}
                onChange={(e) => setHeight(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            {/* Weight Slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm font-semibold text-text-dark">
                <span>Cân nặng của bạn:</span>
                <span className="text-primary text-base font-extrabold">{weight} kg</span>
              </div>
              <input
                type="range"
                min="35"
                max="150"
                value={weight}
                onChange={(e) => setWeight(parseInt(e.target.value))}
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
                * Khuyến nghị tối thiểu: 7 bữa xanh/tuần để khởi động quá trình thải độc tự nhiên.
              </span>
            </div>

            {/* Micro disclaimer */}
            <div className="flex items-start gap-2.5 p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-text-secondary leading-relaxed">
              <AlertCircle className="w-4 h-4 text-text-light shrink-0 mt-0.5" />
              <span>Chỉ số ước tính dựa trên nghiên cứu cân bằng dinh dưỡng. Hãy duy trì thói quen để cảm nhận cơ thể nhẹ nhàng hơn mỗi ngày.</span>
            </div>
          </div>

          {/* Right Column: Calculations & Visual Feedback */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Vitality Score Card */}
            <div className="bg-primary text-white p-8 rounded-3xl flex flex-col gap-5 shadow-xl shadow-primary/20 relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-20%] w-48 h-48 rounded-full bg-primary-light/30 blur-2xl" />
              
              <div className="flex justify-between items-start z-10">
                <div>
                  <span className="text-xs font-semibold text-primary-light uppercase tracking-widest">Năng lượng sinh khí</span>
                  <h4 className="text-2xl font-black mt-1">Chỉ Số Sức Khỏe</h4>
                </div>
                <div className="p-2.5 rounded-2xl bg-white/10 backdrop-blur-md">
                  <Sparkles className="w-6 h-6 text-emerald-300 fill-current" />
                </div>
              </div>

              <div className="flex items-baseline gap-2 z-10 my-2">
                <span className="text-5xl font-black tracking-tight">{vitalityScore}</span>
                <span className="text-lg font-semibold text-primary-light">/ 100 điểm</span>
              </div>

              <div className="z-10 flex flex-col gap-2">
                <div className="flex justify-between text-xs text-slate-200 font-semibold">
                  <span>Mức độ hồi phục & đào thải độc tố</span>
                  <span>{vitalityScore}%</span>
                </div>
                <Progress value={vitalityScore} className="h-2.5 bg-white/20" />
              </div>

              <p className="text-sm text-slate-200/90 leading-relaxed z-10 pt-2 border-t border-white/10">
                {vitalityScore < 60
                  ? "Cơ thể bạn cần được bổ sung thêm các vi chất tự nhiên từ rau xanh để thanh lọc hiệu quả."
                  : vitalityScore < 85
                  ? "Thể trạng đang ở mức khá tốt! Tăng thêm vài bữa ăn xanh để cơ thể tràn trề năng lượng hơn."
                  : "Tuyệt vời! Chế độ ăn uống xanh lành mạnh đang giúp bạn tối ưu hóa sinh khí của tế bào."}
              </p>
            </div>

            {/* Indicators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* BMI Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md flex flex-col gap-2 items-center text-center">
                <Dumbbell className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs text-text-secondary uppercase font-semibold">Chỉ số BMI</span>
                <span className="text-2xl font-black text-text-dark">{bmi}</span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${bmiCat.color}`}>
                  {bmiCat.label}
                </span>
              </div>

              {/* Water Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md flex flex-col gap-2 items-center text-center">
                <Droplet className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs text-text-secondary uppercase font-semibold">Nước mỗi ngày</span>
                <span className="text-2xl font-black text-text-dark">{waterIntake}L</span>
                <span className="text-xs text-text-light font-medium">Khuyến nghị bổ sung</span>
              </div>

              {/* Diet Recommendation Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md flex flex-col gap-2 items-center text-center justify-center">
                <Activity className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs text-text-secondary uppercase font-semibold">Thải độc gan</span>
                <span className="text-2xl font-black text-text-dark">
                  {Math.round(greenMeals * 4.5)}%
                </span>
                <span className="text-xs text-text-light font-medium">Tỷ lệ giảm tải độc</span>
              </div>

            </div>

          </div>

        </div>

        {/* Core Value Propositions */}
        <div className="mt-20 border-t border-slate-100 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Exclude bad factors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4 items-start"
          >
            <div className="p-3.5 rounded-2xl bg-rose-50 text-rose-600 shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <div>
              <h4 className="text-base font-bold text-text-dark mb-1">Nhận Biết & Loại Trừ Tác Nhân Xấu</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                Tự động hiểu và loại bỏ các yếu tố gây hại cho trạng thái cơ thể của bạn như chất bảo quản, dầu mỡ bẩn, đường tinh luyện và các thành phần dễ gây dị ứng hay đầy hơi.
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
              <h4 className="text-base font-bold text-text-dark mb-1">Tiết Kiệm Thời Gian Tối Đa</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                Không còn mất giờ đi chợ, cân đo đong đếm calo phức tạp hay dọn dẹp bếp núc. Các bữa ăn xanh hữu cơ được chuẩn bị hoàn tất và giao ngay tới tay bạn.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Elevate nutrition quality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4 items-start"
          >
            <div className="p-3.5 rounded-2xl bg-amber-50 text-amber-700 shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <div>
              <h4 className="text-base font-bold text-text-dark mb-1">Nâng Cao Chất Lượng Dinh Dưỡng</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                Được nghiên cứu định lượng cân bằng vi chất, chế biến chuẩn khoa học giúp bảo toàn nguyên vẹn vitamin, chất xơ và các enzym có lợi giúp tế bào khỏe mạnh.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

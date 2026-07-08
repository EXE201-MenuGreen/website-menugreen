"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  Leaf,
  Play,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Star,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const weeklyMeals = [
  { name: "Salad Diêm Mạch", kcal: "420 kcal", tag: "Đạm cao" },
  { name: "Smoothie Xanh", kcal: "320 kcal", tag: "Thanh lọc" },
  { name: "Cá Hồi Măng Tây", kcal: "450 kcal", tag: "Omega 3" },
];

export default function AppDownloadSection() {
  return (
    <section
      id="app"
      className="min-h-screen lg:h-[100svh] py-20 lg:py-8 bg-white/70 backdrop-blur-[1px] relative overflow-hidden flex items-center"
    >
      <div className="absolute top-[-15%] left-[-10%] w-[38vw] h-[38vw] rounded-full bg-emerald-100/35 blur-3xl -z-10" />
      <div className="absolute bottom-[-18%] right-[-10%] w-[44vw] h-[44vw] rounded-full bg-lime-100/40 blur-3xl -z-10" />

      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/15 text-xs font-semibold uppercase tracking-wider"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Ứng dụng MenuGreen</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-text-dark tracking-tight leading-[1.05]">
                Thực đơn xanh trong tay,
                <span className="block text-primary">đặt bữa lành mạnh mỗi ngày</span>
              </h2>
              <p className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
                Theo dõi lịch giao bữa, chọn món theo mục tiêu sức khỏe và nhận nhắc nhở dinh dưỡng trực tiếp trên điện thoại.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#pricing"
                className={buttonVariants({
                  className:
                    "bg-primary hover:bg-primary-light text-white h-14 px-7 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg shadow-primary/20 flex items-center gap-2",
                })}
              >
                Mở gói đang chạy
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="inline-flex h-14 items-center gap-3 rounded-full border border-primary/15 bg-white/70 px-5 text-primary shadow-sm">
                <Play className="w-5 h-5 fill-current" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-text-secondary">
                    Hiện đã hoạt động trên
                  </span>
                  <span className="text-sm font-black">CH Play</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl pt-4"
            >
              {[
                { icon: CalendarDays, label: "Lịch bữa ăn", value: "7 ngày" },
                { icon: ShieldCheck, label: "Mục tiêu", value: "BMI & macros" },
                { icon: Bell, label: "Nhắc nhở", value: "Đúng giờ" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/60 p-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary font-semibold uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-black text-text-dark">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="landing-phone-float relative w-[230px] sm:w-[255px] lg:w-[270px] xl:w-[290px] [perspective:1400px]">
              <div className="absolute -left-6 top-16 z-30 hidden sm:flex rounded-2xl border border-white/80 bg-white/80 px-3 py-2.5 shadow-lg shadow-primary/10 backdrop-blur-md lg:[transform:translateZ(52px)]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-primary flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-dark">Đơn hôm nay</p>
                    <p className="text-[11px] text-text-secondary">Giao trước 11:30</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-5 bottom-20 z-30 hidden sm:flex rounded-2xl border border-white/80 bg-white/80 px-3 py-2.5 shadow-lg shadow-primary/10 backdrop-blur-md lg:[transform:translateZ(56px)]">
                <div className="flex items-center gap-2 text-amber-600">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-xs font-black">4.9</span>
                  <span className="text-xs font-semibold text-text-secondary">đánh giá</span>
                </div>
              </div>

              <div className="absolute inset-x-16 bottom-[-20px] hidden h-9 rounded-[100%] bg-primary/14 blur-2xl lg:block" />
              <div className="absolute top-16 bottom-16 right-[-2px] hidden w-2 rounded-r-[2rem] bg-slate-900/70 shadow-md lg:block lg:[transform:rotateY(-12deg)_rotateX(5deg)_translateZ(-14px)]" />
              <div className="absolute top-20 bottom-20 left-[-2px] hidden w-1 rounded-l-[2rem] bg-slate-900/55 lg:block lg:[transform:rotateY(-12deg)_rotateX(5deg)_translateZ(-12px)]" />

              <div className="relative origin-center rounded-[2.45rem] bg-gradient-to-br from-slate-700 via-slate-950 to-black p-1.5 shadow-xl shadow-primary/18 transition-transform duration-500 will-change-transform [transform-style:preserve-3d] lg:[transform:rotateY(-13deg)_rotateX(5deg)_rotateZ(.5deg)_scale(.86)] lg:hover:[transform:rotateY(-8deg)_rotateX(4deg)_rotateZ(0deg)_scale(.89)]">
                <div className="pointer-events-none absolute inset-0 rounded-[2.75rem] border border-white/10" />
                <div className="pointer-events-none absolute left-3 top-8 z-30 h-24 w-0.5 rounded-full bg-slate-500/45" />
                <div className="pointer-events-none absolute -right-0.5 top-28 z-30 h-16 w-0.5 rounded-full bg-slate-800/70" />
                <div className="pointer-events-none absolute inset-1.5 z-30 rounded-[2.15rem] bg-gradient-to-br from-white/24 via-transparent to-transparent" />
                <div className="absolute left-1/2 top-1.5 h-3.5 w-20 -translate-x-1/2 rounded-b-2xl bg-slate-950 z-20" />
                <div className="relative overflow-hidden rounded-[2rem] bg-[#F6FAF6] min-h-[480px] sm:min-h-[500px] lg:min-h-[510px] lg:[transform:translateZ(14px)]">
                  <div className="bg-white/90 border-b border-emerald-900/5 px-3.5 pt-7 pb-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center">
                          <Leaf className="w-4 h-4 fill-current" />
                        </div>
                        <div>
                          <p className="text-xs font-black text-text-dark">MenuGreen</p>
                          <p className="text-[10px] font-semibold text-text-secondary uppercase tracking-wider">
                            Mobile app
                          </p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Bell className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  <div className="px-3.5 py-3.5 flex flex-col gap-2.5">
                    <div className="rounded-2xl bg-primary p-3.5 text-white shadow-lg shadow-primary/20">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-200">
                            Biểu ngữ hôm nay
                          </p>
                          <h3 className="mt-1.5 text-base font-black leading-tight">
                            Ăn xanh đều đặn, cơ thể nhẹ hơn từng ngày.
                          </h3>
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                          <ShoppingBag className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {["Calo", "Protein", "Nước"].map((label, index) => (
                        <div
                          key={label}
                          className="rounded-2xl bg-white p-2 text-center border border-emerald-900/5"
                        >
                          <p className="text-[10px] font-bold uppercase text-text-light">{label}</p>
                          <p className="mt-1 text-sm font-black text-text-dark">
                            {["1.250", "82g", "2.3L"][index]}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black text-text-dark">Lịch bữa tuần này</h4>
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-primary">
                        Đang hoạt động
                      </span>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      {weeklyMeals.map((meal, index) => (
                        <div
                          key={meal.name}
                          className="rounded-2xl border border-emerald-900/5 bg-white p-2.5 shadow-sm"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-primary flex items-center justify-center font-black text-sm">
                              {index + 1}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-black text-text-dark truncate">{meal.name}</p>
                              <p className="text-[11px] text-text-secondary">{meal.kcal}</p>
                            </div>
                            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-bold uppercase text-primary">
                              {meal.tag}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl bg-white p-2.5 border border-emerald-900/5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">
                            Trạng thái app
                          </p>
                          <p className="text-sm font-black text-text-dark">Đã có mặt trên CH Play</p>
                        </div>
                        <Play className="w-6 h-6 text-primary fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

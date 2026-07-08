"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white/70 backdrop-blur-[1px]"
    >
      {/* Background Decorative Glowing Blobs (Sleepiest-Inspired Light Edition) */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-100/35 blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-emerald-200/25 blur-3xl -z-10" />

      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Story & Headings */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
            
            {/* Story stage tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold uppercase tracking-wider"
            >
              <Leaf className="w-3.5 h-3.5 fill-current animate-pulse" />
              <span>Giai Đoạn 1: Gieo Mầm Lành Mạnh</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-dark tracking-tight leading-[1.1]"
            >
              Cân Bằng Thể Trạng <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                Bằng Thực Đơn Xanh
              </span>
            </motion.h1>

            {/* Short concise content showing healthy target */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-text-secondary max-w-xl leading-relaxed"
            >
              Sức khỏe bắt nguồn từ những gì bạn lựa chọn mỗi ngày. MenuGreen mang đến giải pháp ăn uống tối giản, dinh dưỡng lành mạnh và hoàn toàn tự nhiên giúp cơ thể thanh nhẹ, tràn trề sinh lực.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <a
                href="#metrics"
                className={buttonVariants({
                  className: "bg-primary hover:bg-primary-light text-white font-semibold text-base h-14 px-8 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary-light/35 transition-all flex items-center gap-2 group"
                })}
              >
                Đo Lường Chỉ Số Sức Khỏe
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#menu"
                className={buttonVariants({
                  variant: "outline",
                  className: "border-primary/20 text-primary hover:bg-primary/5 font-semibold text-base h-14 px-8 rounded-full transition-all flex items-center justify-center"
                })}
              >
                Khám Phá Thực Đơn
              </a>
            </motion.div>

            {/* Micro value badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-6 mt-6 border-t border-white/10 w-full max-w-lg"
            >
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-dark">100% Sạch</h4>
                  <p className="text-xs text-text-secondary">Nguyên liệu hữu cơ</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-dark">Năng Lượng</h4>
                  <p className="text-xs text-text-secondary">Tăng cường bền bỉ</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-dark">Lành Mạnh</h4>
                  <p className="text-xs text-text-secondary">Tối ưu calo & macros</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-8 border-white shadow-2xl shadow-primary/10"
            >
              <Image
                src="/hero-salad.png"
                alt="Vibrant healthy organic green salad bowl"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 450px"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

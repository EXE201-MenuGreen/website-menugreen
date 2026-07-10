"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const nutritionFacts = [
  { value: "24", label: "thực đơn mới mỗi tuần" },
  { value: "03", label: "mục tiêu sức khỏe" },
  { value: "100%", label: "nguyên liệu rõ nguồn gốc" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#f6f1e7] pb-14 pt-28 sm:pt-32 lg:pb-16"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[58%] bg-[#e3efdd]" />
      <div className="absolute -right-20 top-20 -z-10 h-72 w-72 rounded-full border border-primary/15 sm:h-[32rem] sm:w-[32rem]" />
      <div className="absolute -bottom-28 -left-24 -z-10 h-80 w-80 rounded-full bg-[#e8b96b]/25 blur-3xl" />

      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="mx-auto grid max-w-[1500px] items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7 flex items-center gap-3 text-primary"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/25 bg-white/60">
                <Leaf className="h-4 w-4 fill-current" />
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                MenuGreen / mùa ăn lành 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="max-w-4xl font-heading text-[3.35rem] leading-[0.98] tracking-[-0.02em] text-[#183529] sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]"
            >
              Ăn ngon theo
              <span className="block italic text-[#c8723d]">cách cơ thể cần.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-[#4d5e54] sm:text-lg"
            >
              MenuGreen thiết kế thực đơn tươi, cân bằng dinh dưỡng và vừa với nhịp sống của bạn — để mỗi bữa ăn là một lựa chọn dễ chịu.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#menu"
                className={buttonVariants({
                  className:
                    "group h-14 rounded-full bg-primary px-7 text-sm font-bold text-white shadow-[0_14px_28px_-14px_rgba(27,67,50,0.8)] transition-all hover:bg-primary-light",
                })}
              >
                Xem thực đơn tuần này
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#metrics"
                className="border-b border-[#183529]/30 pb-1 text-sm font-bold text-[#183529] transition-colors hover:border-[#c8723d] hover:text-[#c8723d]"
              >
                Tìm thực đơn hợp với bạn
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="mt-11 grid max-w-2xl grid-cols-3 border-y border-[#183529]/15"
            >
              {nutritionFacts.map((fact) => (
                <div key={fact.label} className="py-4 pr-3 sm:py-5 sm:pr-5 [&:not(:first-child)]:border-l [&:not(:first-child)]:border-[#183529]/15 [&:not(:first-child)]:pl-3 sm:[&:not(:first-child)]:pl-5">
                  <p className="font-heading text-2xl leading-none text-[#183529] sm:text-3xl">{fact.value}</p>
                  <p className="mt-1.5 max-w-[7rem] text-[9px] font-bold uppercase leading-tight tracking-[0.08em] text-[#5f7065] sm:text-[10px]">
                    {fact.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 22 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[32rem] lg:col-span-6 xl:col-span-5"
          >
            <div className="absolute -left-5 top-12 hidden font-heading text-8xl italic leading-none text-[#c8723d]/70 sm:block">01</div>
            <div className="relative ml-4 aspect-[4/5] overflow-hidden rounded-t-[10rem] rounded-bl-[2.5rem] rounded-br-[10rem] border-[10px] border-[#fbfaf5] shadow-[0_32px_55px_-30px_rgba(24,53,41,0.65)] sm:ml-8">
              <Image
                src="/hero-salad.png"
                alt="Tô salad tươi từ MenuGreen"
                fill
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 512px, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#183529]/45 via-transparent to-transparent" />
              <div className="absolute left-5 top-5 rounded-full bg-[#fbfaf5]/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-primary backdrop-blur-sm">
                Bowl / 07
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">Thực đơn hôm nay</p>
                  <p className="mt-1 font-heading text-2xl italic">Green balance</p>
                </div>
                <Sparkles className="h-5 w-5" />
              </div>
            </div>

            <div className="relative -mt-14 mr-3 ml-auto w-[13.5rem] rounded-[1.5rem] bg-[#183529] p-4 text-white shadow-xl shadow-[#183529]/20 sm:mr-0 sm:w-56 sm:p-5">
              <div className="flex items-center justify-between text-[#c4e0bc]">
                <span className="text-[9px] font-black uppercase tracking-[0.16em]">Nutrition passport</span>
                <Leaf className="h-4 w-4 fill-current" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/15 pt-3">
                <div><p className="text-[9px] text-white/60">Calo</p><p className="text-sm font-black">420</p></div>
                <div><p className="text-[9px] text-white/60">Đạm</p><p className="text-sm font-black">28g</p></div>
                <div><p className="text-[9px] text-white/60">Xơ</p><p className="text-sm font-black">12g</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

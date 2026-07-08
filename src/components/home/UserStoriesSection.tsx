"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  Dumbbell,
  Briefcase,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  Flame,
  ArrowLeft,
  ArrowRight,
  Target,
  AlertTriangle,
  Heart
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RecommendedMeal {
  name: string;
  vietnameseName: string;
  calories: number;
  macros: { carb: string; protein: string; fat: string };
  icon: string;
  badge: string;
}

interface PersonaStory {
  id: string;
  title: string;
  icon: React.JSX.Element;
  name: string;
  role: string;
  tagline: string;
  avatar: string;
  goal: string;
  painPoints: string[];
  steps: {
    title: string;
    description: string;
    icon: React.JSX.Element;
  }[];
  recommendedMeals: RecommendedMeal[];
  stats: {
    label: string;
    value: string;
  }[];
}

export default function UserStoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const stories: PersonaStory[] = [
    {
      id: "gym",
      title: "Giải pháp cho người tập Gym & Thể hình",
      icon: <Dumbbell className="w-5 h-5 text-emerald-400" />,
      name: "Chế độ tăng cơ - giảm mỡ",
      role: "Phân khúc khách hàng Gymer & Active",
      tagline: "Tính toán macros chính xác, chế biến khoa học",
      avatar: "/gym_persona.png",
      goal: "Cần kiểm soát calo nạp vào nghiêm ngặt, giữ lượng protein cao ổn định và tinh bột phức tạp để nuôi cơ nạc, tối ưu thể trạng tập luyện.",
      painPoints: [
        "Mất thời gian cân đo đong đếm từng gram ức gà sống trước khi luộc.",
        "Ức gà nấu sẵn tự chuẩn bị thường bị khô cứng, dai, khó nuốt sau vài ngày trữ tủ lạnh.",
        "Căn bếp luôn bừa bộn xoong nồi, mất 2 tiếng mỗi ngày dọn dẹp và nấu nướng sau giờ tập mệt mỏi."
      ],
      steps: [
        {
          icon: <Target className="w-5 h-5 text-emerald-400" />,
          title: "Thiết lập định lượng cá nhân",
          description: "Người dùng nhập chỉ số chiều cao, cân nặng và tỷ lệ mỡ để MenuGreen tự động gợi ý mức calo và macros mục tiêu."
        },
        {
          icon: <Heart className="w-5 h-5 text-emerald-400" />,
          title: "Chế biến mềm mọng (Sous-vide)",
          description: "Thịt gà và cá hồi được nấu chậm nhiệt độ thấp giữ trọn nước, mềm ngọt tự nhiên, dễ ăn mà không bị ngán."
        },
        {
          icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
          title: "Giao bữa ăn định lượng sẵn",
          description: "Mỗi hộp cơm gạo lứt, khoai lang và thịt được cân đo chuẩn xác đến từng gram dinh dưỡng trước khi đóng gói giao nóng."
        }
      ],
      recommendedMeals: [
        {
          name: "Quinoa Green Salad",
          vietnameseName: "Salad Diêm Mạch & Ức Gà",
          calories: 420,
          macros: { carb: "45g", protein: "32g", fat: "11g" },
          icon: "🥗",
          badge: "Đạm cao"
        },
        {
          name: "Salmon Asparagus Salad",
          vietnameseName: "Salad Cá Hồi Na Uy & Măng Tây",
          calories: 450,
          macros: { carb: "15g", protein: "38g", fat: "22g" },
          icon: "🐟",
          badge: "Omega 3 & Low-Carb"
        }
      ],
      stats: [
        { label: "Thời gian chuẩn bị bữa ăn", value: "-12h/tuần" },
        { label: "Sai số định lượng dinh dưỡng", value: "~0%" },
        { label: "Mức độ hài lòng thể trạng", value: "98%" }
      ]
    },
    {
      id: "office",
      title: "Giải pháp cho Nhóm Nhân viên Văn phòng",
      icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
      name: "Chế độ thanh lọc - tỉnh táo",
      role: "Phân khúc khách hàng văn phòng & nhóm",
      tagline: "Xóa tan mệt mỏi chiều muộn, giảm tích mỡ bụng",
      avatar: "/office_persona.png",
      goal: "Giảm tình trạng đầy hơi, uể oải sau khi ăn trưa, bổ sung chất xơ và hạn chế tích mỡ do ngồi làm việc liên tục suốt 8 tiếng.",
      painPoints: [
        "Thói quen gọi đồ ăn ngoài nhiều dầu mỡ bẩn, nhiều muối và đường tinh luyện gây đầy bụng.",
        "Cơn buồn ngủ ập đến lúc 14:00 (food coma) làm giảm 50% hiệu suất làm việc và sự tập trung.",
        "Mất thời gian thảo luận 'Trưa nay ăn gì?' và tốn phí vận chuyển riêng lẻ khi đặt đồ ăn mỗi ngày."
      ],
      steps: [
        {
          icon: <Users className="w-5 h-5 text-emerald-400" />,
          title: "Đăng ký gói ăn trưa đồng nghiệp",
          description: "Nhóm văn phòng đặt mua chung gói Combo tuần/tháng để nhận mức giá ưu đãi và miễn phí giao hàng."
        },
        {
          icon: <Clock className="w-5 h-5 text-emerald-400" />,
          title: "Giao hàng đồng loạt trước 11:30",
          description: "Menu trưa được shipper giao đúng giờ hẹn đến quầy lễ tân văn phòng, các phần ăn vẫn giữ được độ tươi mát."
        },
        {
          icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
          title: "Cân bằng năng lượng buổi chiều",
          description: "Các bữa ăn thanh nhẹ, giàu xơ hỗ trợ hệ tiêu hóa giúp não bộ tỉnh táo, tràn đầy sinh khí làm việc."
        }
      ],
      recommendedMeals: [
        {
          name: "Green Smoothie Bowl",
          vietnameseName: "Smoothie Xanh Cải Xoăn & Bơ",
          calories: 320,
          macros: { carb: "42g", protein: "12g", fat: "10g" },
          icon: "🥤",
          badge: "Thanh lọc nhẹ"
        },
        {
          name: "Zucchini Noodle Basil Pesto",
          vietnameseName: "Mì Bí Ngòi Sốt Quế Tây Hạt Điều",
          calories: 290,
          macros: { carb: "24g", protein: "8g", fat: "16g" },
          icon: "🍝",
          badge: "Keto / Ít carb"
        }
      ],
      stats: [
        { label: "Cải thiện độ tập trung chiều", value: "+45%" },
        { label: "Mỡ thừa tích lũy vòng eo", value: "Giảm rõ rệt" },
        { label: "Chi phí ăn trưa nhóm", value: "-15%" }
      ]
    }
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth;
      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="stories" className="min-h-screen lg:h-[100svh] py-20 lg:py-8 bg-white/65 backdrop-blur-[1px] relative overflow-hidden flex items-center">
      {/* Background Decorative Glowing Blobs (Sleepiest Style) */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-emerald-100/30 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] rounded-full bg-stone-100/50 blur-3xl -z-10" />

      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">

        {/* Section Header with Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-6 gap-6">
          <div className="max-w-3xl flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider self-start">
              <Users className="w-3.5 h-3.5" />
              <span>Nhóm Đối Tượng & Kịch Bản</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.35rem] font-extrabold text-text-dark tracking-tight leading-tight">
              Giải Pháp Thực Tế Cho Từng Lối Sống
            </h2>
            <p className="text-text-secondary text-base lg:text-[1.05rem]">
              MenuGreen hoạt động thế nào để giải quyết triệt để các rắc rối thường ngày trong ăn uống của bạn? Cuộn ngang để xem chi tiết.
            </p>
          </div>

          {/* Scroll Controls (Desktop only) */}
          <div className="hidden md:flex gap-3 shrink-0">
            <Button
              onClick={() => handleScroll("left")}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-slate-200/80 text-primary hover:bg-slate-50 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => handleScroll("right")}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-slate-200/80 text-primary hover:bg-slate-50 transition-all cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Horizontal Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 lg:pb-0 snap-x snap-mandatory scroll-smooth scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {stories.map((story) => (
            <div
              key={story.id}
              className="snap-start w-full min-w-full flex-none"
            >
              <Card className="border border-white/80 shadow-xl rounded-3xl overflow-hidden bg-white/70 backdrop-blur-md grid grid-cols-1 lg:grid-cols-[minmax(300px,0.95fr)_minmax(340px,1fr)_minmax(280px,0.85fr)] lg:h-[68svh] items-stretch">

                {/* Column 1 (Left): Image & Stats Overlay */}
                <div className="relative min-h-[420px] sm:min-h-[500px] lg:min-h-0 lg:h-full bg-slate-100 overflow-hidden">
                  <Image
                    src={story.avatar}
                    alt={story.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 34vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Category icon & label */}
                  <div className="absolute top-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border border-slate-100 w-fit max-w-[calc(100%-2rem)]">
                    {story.icon}
                    <span className="text-xs font-bold text-text-dark leading-tight">{story.title}</span>
                  </div>

                  {/* Name and role details */}
                  <div className="absolute bottom-24 lg:bottom-28 left-6 right-6 text-white">
                    <h3 className="text-xl sm:text-2xl font-black leading-tight mb-1">{story.name}</h3>
                    <p className="text-xs text-slate-200 font-semibold">{story.role}</p>
                  </div>

                  {/* Stats Overlay at the bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/45 backdrop-blur-sm border-t border-white/10 p-4 grid grid-cols-3 gap-2 text-center text-white shrink-0">
                    {story.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col gap-0.5">
                        <span className="text-sm sm:text-base font-black text-emerald-400 tracking-tight">
                          {stat.value}
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-slate-300 font-medium uppercase leading-tight">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2 (Middle): Scenario Details & Pain Points */}
                <CardContent className="p-6 sm:p-8 lg:p-6 xl:p-8 flex flex-col gap-4 xl:gap-5 justify-start border-b lg:border-b-0 lg:border-r border-slate-100">
                  {/* Tagline */}
                  <p className="text-base lg:text-lg font-extrabold text-primary border-l-4 border-primary pl-4 leading-snug">
                    {story.tagline}
                  </p>

                  {/* Healthy Goal */}
                  <div className="flex flex-col gap-2 bg-stone-50 p-5 rounded-2xl border border-stone-100">
                    <h4 className="text-[11px] font-bold text-text-light uppercase tracking-wider flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-primary shrink-0" />
                      Mục tiêu dinh dưỡng
                    </h4>
                    <p className="text-sm lg:text-xs xl:text-sm text-text-secondary leading-relaxed">
                      {story.goal}
                    </p>
                  </div>

                  {/* Realistic Pain Points (Vấn đề thực tế) */}
                  <div className="flex flex-col gap-2.5">
                    <h4 className="text-[11px] font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      Rắc rối & Vấn đề thường gặp
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {story.painPoints.map((point, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start text-sm lg:text-xs xl:text-sm text-text-secondary leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80 shrink-0 mt-1.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                {/* Column 3 (Right): Steps & Recommended Meals */}
                <CardContent className="p-6 sm:p-8 lg:p-6 xl:p-8 flex flex-col gap-4 xl:gap-6 justify-start">
                  {/* Workflow steps */}
                  <div className="flex flex-col gap-4">
                    <h4 className="text-[11px] font-bold text-text-light uppercase tracking-wider">
                      Lộ trình MenuGreen giải quyết
                    </h4>
                    <div className="flex flex-col gap-4">
                      {story.steps.map((step, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                          <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 text-primary font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                            {idx + 1}
                          </div>
                          <div>
                            <h5 className="font-bold text-text-dark text-sm mb-1">
                              {step.title}
                            </h5>
                            <p className="text-xs lg:text-[11px] xl:text-xs text-text-secondary leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended meals */}
                  <div className="flex flex-col gap-3 border-t border-slate-100 pt-5 mt-auto">
                    <h4 className="text-[11px] font-bold text-text-light uppercase tracking-wider">
                      Thực đơn gợi ý khuyên dùng
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {story.recommendedMeals.map((meal) => (
                        <div
                          key={meal.name}
                          className="bg-stone-50 border border-slate-100 p-4 rounded-2xl flex flex-col justify-between gap-3 hover:bg-white hover:border-primary/20 transition-all shadow-sm"
                        >
                          <div className="flex justify-between items-start">
                            <span className="text-lg filter drop-shadow">{meal.icon}</span>
                            <span className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-wider">
                              {meal.badge}
                            </span>
                          </div>
                          <div>
                            <h5 className="font-extrabold text-text-dark text-sm leading-tight">
                              {meal.vietnameseName}
                            </h5>
                            <p className="text-[10px] text-text-light uppercase mt-1 tracking-wide">
                              {meal.name}
                            </p>
                          </div>
                          <div className="flex justify-between items-center border-t border-slate-100 pt-2 text-xs">
                            <span className="font-extrabold text-primary flex items-center gap-0.5">
                              <Flame className="w-3.5 h-3.5 fill-current text-rose-500 shrink-0" />
                              {meal.calories} kcal
                            </span>
                            <span className="text-text-secondary font-medium">
                              P: <span className="font-bold text-text-dark">{meal.macros.protein}</span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>

              </Card>
            </div>
          ))}
        </div>

        {/* Mobile Indicator tip */}
        <div className="flex md:hidden justify-center items-center gap-1.5 mt-2 text-text-light text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 fill-current text-emerald-400" />
          <span>Vuốt ngang để xem câu chuyện tiếp theo</span>
        </div>

      </div>
    </section>
  );
}

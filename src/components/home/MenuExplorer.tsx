"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Flame, Sparkles, PlusCircle, Check, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface MenuItem {
  name: string;
  vietnameseName: string;
  description: string;
  calories: number;
  macros: { carb: string; protein: string; fat: string };
  tag: string;
  badgeColor: string;
  icon: string;
}

export default function MenuExplorer() {
  const [selectedMeals, setSelectedMeals] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const menuData: Record<string, MenuItem[]> = {
    breakfast: [
      {
        name: "Green Smoothie Bowl",
        vietnameseName: "Smoothie Xanh Cải Xoăn & Bơ",
        description: "Hỗn hợp cải kale hữu cơ, bơ sáp, chuối và sữa hạt điều nguyên chất, phủ hạt chia và việt quất tươi.",
        calories: 320,
        macros: { carb: "42g", protein: "12g", fat: "10g" },
        tag: "Đào thải độc tố",
        badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/50",
        icon: "🥤",
      },
      {
        name: "Avocado Organic Toast",
        vietnameseName: "Bánh Mì Đen Quả Bơ & Trứng Chần",
        description: "Bánh mì lúa mạch đen nguyên cám giòn rụm kết hợp bơ tươi nghiền nhuyễn và trứng chần lòng đào.",
        calories: 380,
        macros: { carb: "35g", protein: "18g", fat: "14g" },
        tag: "Năng lượng sáng",
        badgeColor: "bg-amber-50 text-amber-700 border-amber-200/50",
        icon: "🥑",
      },
    ],
    lunch: [
      {
        name: "Quinoa Green Salad",
        vietnameseName: "Salad Diêm Mạch & Ức Gà Áp Chảo",
        description: "Ức gà organic ướp lá thảo mộc áp chảo, trộn hạt diêm mạch quinoa, rau chân vịt và sốt mù tạt mật ong.",
        calories: 420,
        macros: { carb: "45g", protein: "32g", fat: "11g" },
        tag: "Đạm thực thể cao",
        badgeColor: "bg-blue-50 text-blue-700 border-blue-200/50",
        icon: "🥗",
      },
      {
        name: "Tofu Broccoli Rice Bowl",
        vietnameseName: "Cơm Gạo Lứt Đậu Hũ & Súp Lơ Xanh",
        description: "Đậu hũ non hữu cơ nướng tương tỏi, ăn kèm cơm gạo lứt huyết rồng dẻo thơm và súp lơ xanh hấp chín tới.",
        calories: 410,
        macros: { carb: "55g", protein: "16g", fat: "12g" },
        tag: "Ăn chay lành mạnh",
        badgeColor: "bg-purple-50 text-purple-700 border-purple-200/50",
        icon: "🍲",
      },
    ],
    dinner: [
      {
        name: "Salmon Asparagus Salad",
        vietnameseName: "Salad Cá Hồi Na Uy & Măng Tây",
        description: "Cá hồi phi lê áp chảo giàu omega-3, ăn kèm măng tây non giòn ngọt và sốt chanh leo chua thanh mát.",
        calories: 450,
        macros: { carb: "15g", protein: "38g", fat: "22g" },
        tag: "Ít tinh bột (Low Carb)",
        badgeColor: "bg-rose-50 text-rose-700 border-rose-200/50",
        icon: "🐟",
      },
      {
        name: "Zucchini Noodle Basil Pesto",
        vietnameseName: "Mì Bí Ngòi Sốt Quế Tây Hạt Điều",
        description: "Mì bào mỏng từ quả bí ngòi tươi mát trộn với sốt pesto húng quế hạt điều thơm bùi béo nhẹ tự nhiên.",
        calories: 290,
        macros: { carb: "24g", protein: "8g", fat: "16g" },
        tag: "Keto / Thanh lọc nhẹ",
        badgeColor: "bg-teal-50 text-teal-700 border-teal-200/50",
        icon: "🍝",
      },
    ],
  };

  const handleSelectMeal = (mealName: string) => {
    if (selectedMeals.includes(mealName)) {
      setSelectedMeals(selectedMeals.filter((name) => name !== mealName));
    } else {
      setSelectedMeals([...selectedMeals, mealName]);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section
      id="menu"
      className="min-h-screen lg:h-[100svh] py-20 lg:py-8 bg-emerald-50/55 backdrop-blur-[1px] relative overflow-hidden flex items-center"
    >
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-8 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5 fill-current" />
            <span>Giai Đoạn 4: Trải Nghiệm Thực Đơn</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.35rem] font-extrabold text-text-dark tracking-tight leading-tight">
            Thực Đơn Thiết Kế Riêng Cho Sức Khỏe
          </h2>
          <p className="text-text-secondary text-base lg:text-[1.05rem]">
            Mỗi món ăn đều cân đối hoàn hảo về mặt calo và dưỡng chất cần thiết, giúp bạn duy trì vóc dáng nhẹ nhàng mà không mệt mỏi.
          </p>
        </div>

        {/* Tabs Control */}
        <Tabs defaultValue="breakfast" className="w-full flex flex-col items-center">
          <TabsList className="bg-slate-100 p-1 rounded-full w-full max-w-md border border-slate-200/60 mb-8 lg:mb-6 flex justify-between">
            <TabsTrigger value="breakfast" className="rounded-full py-2.5 px-6 font-semibold flex-1">
              Bữa Sáng
            </TabsTrigger>
            <TabsTrigger value="lunch" className="rounded-full py-2.5 px-6 font-semibold flex-1">
              Bữa Trưa
            </TabsTrigger>
            <TabsTrigger value="dinner" className="rounded-full py-2.5 px-6 font-semibold flex-1">
              Bữa Tối
            </TabsTrigger>
          </TabsList>

          {Object.keys(menuData).map((key) => (
            <TabsContent key={key} value={key} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 w-full">
                {menuData[key].map((meal, idx) => {
                  const isSelected = selectedMeals.includes(meal.name);
                  return (
                    <motion.div
                      key={meal.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className={`relative bg-white/60 border p-6 lg:p-5 xl:p-7 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-2xl flex flex-col justify-between ${
                        isSelected
                          ? "border-primary bg-emerald-50/20 shadow-md shadow-primary/5"
                          : "border-slate-100"
                      }`}
                    >
                      {/* Top elements */}
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <span className={`text-xs px-3 py-1 rounded-full border font-bold uppercase tracking-wider ${meal.badgeColor}`}>
                            {meal.tag}
                          </span>
                          <span className="text-3xl filter drop-shadow">{meal.icon}</span>
                        </div>

                        <h3 className="text-xl font-extrabold text-text-dark leading-tight">{meal.vietnameseName}</h3>
                        <p className="text-xs text-text-light font-medium tracking-wide uppercase mt-1 mb-3">{meal.name}</p>
                        <p className="text-sm lg:text-xs xl:text-sm text-text-secondary leading-relaxed mb-5">{meal.description}</p>
                      </div>

                      {/* Bottom elements: Calories & Macros */}
                      <div className="border-t border-slate-100 pt-4 flex flex-col gap-4 mt-auto">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-primary">
                            <Flame className="w-4 h-4 fill-current shrink-0" />
                            <span className="text-sm font-extrabold">{meal.calories} kcal</span>
                          </div>
                          
                          {/* Macro labels */}
                          <div className="flex gap-3 text-xs text-text-secondary font-medium">
                            <div>Carb: <span className="font-bold text-text-dark">{meal.macros.carb}</span></div>
                            <div>Protein: <span className="font-bold text-text-dark">{meal.macros.protein}</span></div>
                            <div>Fat: <span className="font-bold text-text-dark">{meal.macros.fat}</span></div>
                          </div>
                        </div>

                        {/* Interactive Select Button */}
                        <Button
                          onClick={() => handleSelectMeal(meal.name)}
                          variant={isSelected ? "default" : "outline"}
                          className={`w-full rounded-2xl py-5 transition-all text-xs font-bold uppercase tracking-wide flex items-center justify-center gap-2 ${
                            isSelected
                              ? "bg-primary hover:bg-primary-light text-white border-transparent"
                              : "border-primary/20 text-primary hover:bg-primary/5"
                          }`}
                        >
                          {isSelected ? (
                            <>
                              <Check className="w-4 h-4" />
                              Đã Chọn Vào Thực Đơn
                            </>
                          ) : (
                            <>
                              <PlusCircle className="w-4 h-4" />
                              Thêm Vào Thực Đơn Của Bạn
                            </>
                          )}
                        </Button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Storytelling stage 5: Final Transform CTA (Order / Signup) */}
        <div id="cta" className="w-full mt-16 lg:hidden bg-gradient-to-br from-primary to-primary-light text-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-primary/20 relative overflow-hidden flex flex-col items-center text-center gap-6 z-10">
          <div className="absolute top-[-30%] left-[-20%] w-[300px] h-[300px] rounded-full bg-white/5 blur-2xl -z-10" />
          <div className="absolute bottom-[-30%] right-[-20%] w-[300px] h-[300px] rounded-full bg-white/5 blur-2xl -z-10" />

          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md">
            <Sparkles className="w-7 h-7 text-emerald-300 fill-current animate-spin" style={{ animationDuration: "12s" }} />
          </div>

          <h3 className="text-2xl sm:text-3xl font-black tracking-tight max-w-lg leading-tight">
            Nhận Thực Đơn Xanh Tự Động Phù Hợp Cho Sức Khỏe Bạn
          </h3>
          <p className="text-slate-200/90 text-sm sm:text-base max-w-md">
            {selectedMeals.length > 0
              ? `Bạn đã chọn ${selectedMeals.length} món ăn! Hãy để lại email để chúng tôi gửi lộ trình dinh dưỡng chi tiết.`
              : "Đăng ký nhận miễn phí bản tin sức khỏe và lộ trình thực đơn 7 ngày thải độc từ chuyên gia dinh dưỡng."}
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubscribe} className="w-full max-w-md flex flex-col sm:flex-row gap-2 mt-4 z-10">
              <input
                type="email"
                placeholder="Nhập địa chỉ email của bạn..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 flex-1"
              />
              <Button type="submit" className="bg-white hover:bg-slate-100 text-primary font-bold px-6 py-3.5 rounded-2xl transition-all shadow-md text-xs uppercase tracking-wider flex items-center justify-center gap-2">
                Gửi Cho Tôi
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 bg-white/10 border border-white/20 rounded-2xl text-sm font-semibold max-w-sm"
            >
              🎉 Cảm ơn bạn! Lộ trình MenuGreen đã được gửi đến email của bạn.
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}

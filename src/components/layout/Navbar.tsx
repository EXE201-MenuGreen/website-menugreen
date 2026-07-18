"use client";

import React, { useEffect, useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Trang chủ", href: "#hero" },
    { name: "Ứng dụng", href: "#app" },
    { name: "Câu chuyện", href: "#philosophy" },
    { name: "Dấu chân xanh", href: "#metrics" },
    { name: "Thực đơn xanh", href: "#menu" },
    { name: "Gói dịch vụ", href: "#pricing" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-border shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 group">
              <div className="p-2 rounded-xl bg-primary text-white transition-transform group-hover:rotate-12 duration-300">
                <Leaf className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-bold text-text-dark font-sans tracking-tight">
                Menu<span className="text-primary font-extrabold">Green</span>
              </span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-text-dark hover:text-primary hover:bg-slate-100 rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`fixed inset-0 top-[60px] bg-white z-40 transition-transform duration-300 transform border-t border-border ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col gap-6">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-text-secondary hover:text-primary py-2 border-b border-slate-100"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <a
              href="#metrics"
              onClick={() => setIsMobileMenuOpen(false)}
              className={buttonVariants({
                className:
                  "w-full bg-primary hover:bg-primary-light text-white font-medium rounded-full h-12 flex items-center justify-center transition-all",
              })}
            >
              Trải Nghiệm Sống Xanh
            </a>
          </div>
        </div>
      </header>

      <header
        className={`fixed top-0 left-0 right-0 z-40 hidden md:block transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-border shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="p-2.5 rounded-xl bg-primary text-white transition-transform group-hover:rotate-12 duration-300">
                <Leaf className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-extrabold text-text-dark tracking-tight">
                Menu<span className="text-primary">Green</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-text-secondary hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <a
              href="#metrics"
              className={buttonVariants({
                className:
                  "bg-primary hover:bg-primary-light text-white font-bold rounded-full px-6 h-10 flex items-center justify-center transition-all duration-300 shadow-md shadow-primary/10 hover:shadow-primary-light/20 text-xs uppercase tracking-wider",
              })}
            >
              Trải Nghiệm Sống Xanh
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

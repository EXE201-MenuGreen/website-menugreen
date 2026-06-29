"use client";

import React, { useState, useEffect } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to spy on active scroll section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // triggers when section is in the middle of the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = ["hero", "philosophy", "metrics", "menu", "pricing"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: "Trang chủ", href: "#hero" },
    { name: "Câu chuyện", href: "#philosophy" },
    { name: "Chỉ số sức khỏe", href: "#metrics" },
    { name: "Thực đơn xanh", href: "#menu" },
    { name: "Gói dịch vụ", href: "#pricing" },
  ];

  return (
    <>
      {/* MOBILE & TABLET HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="p-2 rounded-xl bg-primary text-white transition-transform group-hover:rotate-12 duration-300">
                <Leaf className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-bold text-text-dark font-sans tracking-tight">
                Menu<span className="text-primary font-extrabold">Green</span>
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-text-dark hover:text-primary hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed inset-0 top-[60px] bg-white dark:bg-slate-950 z-40 transition-transform duration-300 transform border-t border-border ${
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
                className: "w-full bg-primary hover:bg-primary-light text-white font-medium rounded-full h-12 flex items-center justify-center transition-all"
              })}
            >
              Thử Tính Toán Sức Khỏe
            </a>
          </div>
        </div>
      </header>

      {/* DESKTOP TOP HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 hidden md:block transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo on the left */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="p-2.5 rounded-xl bg-primary text-white transition-transform group-hover:rotate-12 duration-300">
                <Leaf className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-extrabold text-text-dark tracking-tight">
                Menu<span className="text-primary">Green</span>
              </span>
            </a>

            {/* CTA Button on the right */}
            <div>
              <a
                href="#metrics"
                className={buttonVariants({
                  className: "bg-primary hover:bg-primary-light text-white font-bold rounded-full px-6 h-10 flex items-center justify-center transition-all duration-300 shadow-md shadow-primary/10 hover:shadow-primary-light/20 text-xs uppercase tracking-wider"
                })}
              >
                Thử Tính Toán Sức Khỏe
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* DESKTOP FLOATING DOT NAVIGATION (Left side, overlay on page margin) */}
      <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
        {navItems.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = activeSection === id;
          return (
            <a
              key={item.name}
              href={item.href}
              className="group relative flex items-center p-2"
              aria-label={`Đi tới phần ${item.name}`}
            >
              {/* Dot indicator */}
              <span
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-primary scale-150 ring-4 ring-primary/25"
                    : "bg-slate-300 dark:bg-slate-700 hover:bg-primary group-hover:scale-125"
                }`}
              />
              
              {/* Tooltip text label sliding to the right (Permanent for active dot, hover-triggered for inactive) */}
              <span
                className={`absolute left-7 pl-2 transition-all duration-300 whitespace-nowrap text-[11px] font-extrabold uppercase tracking-wider text-primary bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 px-3 py-1.5 rounded-xl shadow-lg ${
                  isActive
                    ? "opacity-100 translate-x-0 pointer-events-auto"
                    : "opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto"
                }`}
              >
                {item.name}
              </span>
            </a>
          );
        })}
      </div>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DynamicHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
          isScrolled ? "w-[95%] max-w-7xl" : "w-40"
        }`}
      >
        <div
          className={`relative overflow-hidden transition-all duration-500 ${
            isScrolled
              ? "rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10"
              : "rounded-full bg-black/90 backdrop-blur-xl border border-white/20"
          }`}
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent to-accent opacity-20 animate-shimmer" />

          <nav
            className={`relative flex items-center transition-all duration-500 ${
              isScrolled
                ? "justify-between px-4 md:px-6 py-3"
                : "justify-center px-4 py-2"
            }`}
          >
            <Link href="/" className="flex items-center gap-2 relative z-10">
              <Image
                src="/luna-logo-white.png"
                alt="Luna TV"
                width={isScrolled ? 100 : 80}
                height={isScrolled ? 40 : 32}
                className="transition-all duration-500 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            {isScrolled && (
              <div className="hidden md:flex items-center gap-6 lg:gap-8 animate-in fade-in duration-300">
                <Link
                  href="#features"
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="#screenshots"
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Screenshots
                </Link>
                <Link
                  href="#footer"
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  About
                </Link>
                <Button
                  size="sm"
                  className="bg-white hover:bg-white/90 text-black shadow-lg rounded-full"
                >
                  Download
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            {isScrolled && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-white"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            )}
          </nav>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="flex flex-col items-center justify-center h-full gap-8 text-center px-4">
            <Link
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#screenshots"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
            >
              Screenshots
            </Link>
            <Link
              href="#footer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

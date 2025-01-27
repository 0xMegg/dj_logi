"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = !isScrolled && isLandingPage;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-gradient-to-b from-black/50 to-transparent"
          : "backdrop-blur-md bg-gradient-to-r from-blue-50 to-white border-b border-gray-200 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="로고"
              width={120}
              height={40}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg text-base font-semibold transition-all ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              회사소개
            </Link>
            <Link
              href="/business"
              className={`px-3 py-2 rounded-lg text-base font-semibold transition-all ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              사업소개
            </Link>
            <Link
              href="/team"
              className={`px-3 py-2 rounded-lg text-base font-semibold transition-all ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              직원소개
            </Link>
            <Link
              href="/careers"
              className={`px-3 py-2 rounded-lg text-base font-semibold transition-all ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              인재채용
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg text-base font-semibold transition-all ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* 모바일 햄버거 버튼 */}
          <button
            className={`md:hidden px-4 py-2 rounded-lg transition-colors ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">메뉴</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-48 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg md:hidden rounded-bl-lg">
          <div className="px-2 py-3">
            <div className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-gray-600 px-4 py-3 rounded-lg text-base font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all text-right"
                onClick={() => setIsMenuOpen(false)}
              >
                회사소개
              </Link>
              <Link
                href="/business"
                className="text-gray-600 px-4 py-3 rounded-lg text-base font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all text-right"
                onClick={() => setIsMenuOpen(false)}
              >
                사업소개
              </Link>
              <Link
                href="/team"
                className="text-gray-600 px-4 py-3 rounded-lg text-base font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all text-right"
                onClick={() => setIsMenuOpen(false)}
              >
                직원소개
              </Link>
              <Link
                href="/careers"
                className="text-gray-600 px-4 py-3 rounded-lg text-base font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all text-right"
                onClick={() => setIsMenuOpen(false)}
              >
                인재채용
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 px-4 py-3 rounded-lg text-base font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all text-right"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

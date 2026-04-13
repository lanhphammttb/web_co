"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface Banner {
  _id: string;
  title: string;
  imageUrl: string;
  linkTo?: string;
}

export default function BannerSlider({ banners }: { banners: Banner[] }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % banners.length), [banners.length]);
  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + banners.length) % banners.length), [banners.length]);

  useEffect(() => {
    if (banners.length <= 1 || isPaused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [banners.length, isPaused, next]);

  if (banners.length === 0) {
    return (
      <div className="w-full aspect-[21/9] bg-gradient-to-r from-primary to-primary-light flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-3">XE ĐIỆN SMILE</h2>
          <p className="text-lg opacity-80">Thêm banner từ trang Admin để hiển thị tại đây</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full aspect-[16/7] md:aspect-[21/9] overflow-hidden bg-gray-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {banners.map((banner, idx) => (
        <div
          key={banner._id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={banner.imageUrl}
            alt={banner.title}
            fill
            className="object-cover"
            priority={idx === 0}
            sizes="100vw"
          />
          {banner.linkTo && banner.linkTo !== "#" && (
            <Link href={banner.linkTo} className="absolute inset-0 z-20" />
          )}
        </div>
      ))}

      {/* Arrows */}
      {banners.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Banner trước"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-black/30 text-white flex items-center justify-center text-xl hover:bg-black/50 transition"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Banner tiếp"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-black/30 text-white flex items-center justify-center text-xl hover:bg-black/50 transition"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  idx === current
                    ? "w-6 h-2.5 bg-white"
                    : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Slide } from "@/lib/site-config";

const INTERVAL = 5000;

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);

  // Keyed on `active`, so clicking a dot also restarts the timer.
  useEffect(() => {
    const id = setTimeout(
      () => setActive((i) => (i + 1) % slides.length),
      INTERVAL,
    );
    return () => clearTimeout(id);
  }, [active, slides.length]);

  return (
    <section
      className="relative w-full overflow-hidden bg-placeholder"
      style={{ aspectRatio: "1.617" }}
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="(max-width: 1024px) 100vw, 70vw"
          className="object-cover transition-opacity duration-700"
          style={{ opacity: i === active ? 1 : 0 }}
        />
      ))}

      {slides[active].label && (
        <span
          className="absolute right-[14px] top-1/2 -translate-y-1/2 font-serif text-[15px] tracking-[0.08em] text-white lg:right-[18px] lg:text-[19px]"
          style={{ writingMode: "vertical-rl" }}
        >
          {slides[active].label}
        </span>
      )}

      <div
        className="absolute bottom-[20px] left-[20px] flex gap-[13px] lg:bottom-[26px] lg:left-[72px]"
        hidden={slides.length < 2}
      >
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Slide ${i + 1}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
            className="h-[9px] w-[9px] rounded-full transition-colors"
            style={{ backgroundColor: i === active ? "#4a4a4a" : "#dcdcdc" }}
          />
        ))}
      </div>
    </section>
  );
}

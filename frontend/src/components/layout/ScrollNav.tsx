"use client";

import { ChevronDown, ChevronUp } from "lucide-react";

export default function ScrollNav() {
  const scrollTo = (top: number) =>
    window.scrollTo({ top, behavior: "smooth" });

  return (
    <div className="fixed bottom-[24px] right-[16px] z-50 flex flex-col gap-[6px] text-ink-faint">
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() => scrollTo(0)}
        className="hover:text-ink"
      >
        <ChevronUp size={22} strokeWidth={1.2} />
      </button>
      <button
        type="button"
        aria-label="Scroll to bottom"
        onClick={() => scrollTo(document.body.scrollHeight)}
        className="hover:text-ink"
      >
        <ChevronDown size={22} strokeWidth={1.2} />
      </button>
    </div>
  );
}

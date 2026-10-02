"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { csFaq } from "@/lib/site-config";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="mt-[16px] border-t border-ink">
      {csFaq.map((item, index) => (
        <li key={item.question} className="border-b border-hairline">
          <button
            type="button"
            aria-expanded={open === index}
            onClick={() => setOpen(open === index ? null : index)}
            className="flex w-full items-center justify-between py-[14px] text-left text-[13px] leading-none"
          >
            <span className="flex gap-[10px]">
              <span className="text-ink-faint">Q.</span>
              {item.question}
            </span>
            <ChevronRight
              size={16}
              strokeWidth={1.4}
              className={`shrink-0 text-ink-muted transition-transform ${
                open === index ? "rotate-90" : ""
              }`}
            />
          </button>
          {open === index && (
            <p className="flex gap-[10px] pb-[18px] text-[12.5px] leading-[1.7] text-ink-muted">
              <span className="text-ink-faint">A.</span>
              {item.answer}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

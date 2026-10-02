"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { productPolicies } from "@/lib/site-config";

export default function ProductAccordion() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <ul className="mt-[30px] border-t border-hairline">
      {productPolicies.map((policy) => (
        <li key={policy.label} className="border-b border-hairline">
          <button
            type="button"
            aria-expanded={open === policy.label}
            onClick={() => setOpen(open === policy.label ? null : policy.label)}
            className="flex w-full items-center justify-between py-[9px] text-[13px] leading-none tracking-[0.05em]"
          >
            {policy.label}
            <ChevronRight
              size={16}
              strokeWidth={1.4}
              className={`text-ink-muted transition-transform ${
                open === policy.label ? "rotate-90" : ""
              }`}
            />
          </button>
          {open === policy.label && (
            <p className="pb-[14px] text-[12px] leading-[1.7] text-ink-muted">
              {policy.content}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

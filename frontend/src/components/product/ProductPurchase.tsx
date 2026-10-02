"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/lib/site-config";

export default function ProductPurchase({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(product.minimumOrder);
  const clamp = (value: number) => Math.max(product.minimumOrder, value);

  return (
    <div>
      <div className="flex items-center justify-between border-t border-hairline py-[16px] text-[13px]">
        <span>{product.name}</span>

        <div className="flex h-[28px] w-[62px] items-center border border-hairline">
          <input
            type="text"
            inputMode="numeric"
            aria-label="수량"
            value={quantity}
            onChange={(e) => setQuantity(clamp(Number(e.target.value) || 0))}
            className="w-full px-[6px] text-[12px] outline-none"
          />
          <div className="flex h-full flex-col border-l border-hairline">
            <button
              type="button"
              aria-label="수량 증가"
              onClick={() => setQuantity(clamp(quantity + 1))}
              className="flex flex-1 items-center px-[3px] text-ink-muted hover:text-ink"
            >
              <ChevronUp size={10} strokeWidth={2} />
            </button>
            <button
              type="button"
              aria-label="수량 감소"
              onClick={() => setQuantity(clamp(quantity - 1))}
              className="flex flex-1 items-center border-t border-hairline px-[3px] text-ink-muted hover:text-ink"
            >
              <ChevronDown size={10} strokeWidth={2} />
            </button>
          </div>
        </div>

        <span>{formatPrice(product.salePrice)}</span>
      </div>

      <p className="mt-[20px] text-[16px]">
        <strong className="font-bold">Total</strong>(Quantity) :{" "}
        {formatPrice(product.salePrice * quantity)} ({quantity}개)
      </p>

      <div className="mt-[22px] grid grid-cols-3 gap-[5px] text-[13px] tracking-[0.08em]">
        <button
          type="button"
          className="bg-ink py-[12px] text-[13px] leading-none tracking-[0.08em] text-white hover:opacity-85"
        >
          BUY NOW
        </button>
        <button
          type="button"
          className="border border-hairline py-[12px] text-[13px] leading-none tracking-[0.08em] hover:bg-muted"
        >
          ADD TO CART
        </button>
        <button
          type="button"
          className="border border-hairline py-[12px] text-[13px] leading-none tracking-[0.08em] hover:bg-muted"
        >
          ADD TO WISH
        </button>
      </div>
    </div>
  );
}

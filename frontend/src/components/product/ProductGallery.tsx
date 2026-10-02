import Image from "next/image";
import { Search } from "lucide-react";
import type { Product } from "@/lib/site-config";

export default function ProductGallery({ product }: { product: Product }) {
  return (
    <div>
      <div
        className="relative overflow-hidden bg-placeholder"
        style={{ aspectRatio: "1.625" }}
      >
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        )}
        <span className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-[6px] bg-black px-[14px] py-[6px] text-[12px] text-white">
          <Search size={12} strokeWidth={2} />
          마우스를 올려보세요.
        </span>
      </div>

      {product.images && product.images.length > 0 && (
        <ul className="mt-[10px] flex gap-[10px]">
          {product.images.map((src) => (
            <li
              key={src}
              className="relative w-[80px] overflow-hidden bg-placeholder"
              style={{ aspectRatio: "1" }}
            >
              <Image
                src={src}
                alt={product.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/lib/site-config";

type Props = {
  product: Product;
  showInfo?: boolean;
};

export default function ProductCard({ product, showInfo = false }: Props) {
  return (
    <Link
      href={`/product/${product.slug}`}
      aria-label={product.name}
      className="group block"
    >
      <div
        className="relative overflow-hidden bg-placeholder"
        style={{ aspectRatio: "1.625" }}
      >
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}

        {!showInfo && (
          <div className="absolute inset-x-0 bottom-0 hidden bg-[#ececec] px-[19px] pt-[17px] pb-[14px] group-hover:block">
            <p className="text-[12px] leading-none tracking-[0.06em]">
              {product.name}
            </p>
            <p className="mt-[19px] text-[11px] leading-none text-ink-muted line-through">
              {formatPrice(product.price)}
            </p>
            <p className="mt-[6px] text-[11px] leading-none text-accent-blue">
              {formatPrice(product.salePrice)}
            </p>
          </div>
        )}
      </div>

      {showInfo && (
        <div className="mt-[14px] text-[13px]">
          <p className="tracking-[0.03em]">{product.name}</p>
          <p className="mt-[6px] flex gap-[8px]">
            <span className="text-ink-muted line-through">
              {formatPrice(product.price)}
            </span>
            <span>{formatPrice(product.salePrice)}</span>
          </p>
        </div>
      )}
    </Link>
  );
}

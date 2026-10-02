import { formatPrice } from "@/lib/format";
import type { Product } from "@/lib/site-config";
import ProductPurchase from "@/components/product/ProductPurchase";
import ProductAccordion from "@/components/product/ProductAccordion";

export default function ProductInfo({ product }: { product: Product }) {
  return (
    <div className="pt-[10px]">
      <h1 className="text-[19px] tracking-[0.02em]">{product.name}</h1>

      <div className="mt-[38px] space-y-[18px] text-[14px] leading-none">
        <p className="text-ink-muted line-through">{formatPrice(product.price)}</p>
        <p className="text-accent-blue">{formatPrice(product.salePrice)}</p>
        {product.shipping.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <hr className="mt-[40px] border-t border-dashed border-hairline" />

      <p className="mt-[16px] text-[12px] text-ink-muted">
        (최소주문수량 {product.minimumOrder}개 이상)
      </p>

      <div className="mt-[16px]">
        <ProductPurchase product={product} />
      </div>

      <ProductAccordion />
    </div>
  );
}

import Image from "next/image";
import ProductTabs from "@/components/product/ProductTabs";
import type { Product } from "@/lib/site-config";

export default function ProductDetailSection({ detail }: { detail: Product["detail"] }) {
  return (
    <section id="prdDetail" className="scroll-mt-[20px] pt-[80px]">
      <ProductTabs active="prdDetail" />

      <div className="mx-auto mt-[100px] max-w-[680px] text-center">
        {detail.note && <p className="text-[15px]">{detail.note}</p>}

        {detail.images.map((src) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={680}
            height={450}
            className="mt-[60px] h-auto w-full"
          />
        ))}

        <div className="mt-[60px] space-y-[36px] text-[14px] leading-[1.45]">
          {detail.sizeGuide.map((guide) => (
            <div key={guide.title}>
              <p className="font-bold">{guide.title}</p>
              {guide.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ))}
          {detail.material && <p>{detail.material}</p>}
        </div>
      </div>
    </section>
  );
}

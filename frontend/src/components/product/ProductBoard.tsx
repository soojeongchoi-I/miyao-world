import ProductTabs from "@/components/product/ProductTabs";

type Props = {
  id: string;
  description: string;
  writeLabel: string;
};

export default function ProductBoard({ id, description, writeLabel }: Props) {
  return (
    <section id={id} className="scroll-mt-[20px] pt-[88px]">
      <ProductTabs active={id} />

      <p className="mt-[70px] text-center text-[14px]">{description}</p>

      <div className="mt-[36px] border-y border-hairline">
        <p className="py-[20px] text-center text-[13px] text-ink-muted">
          게시물이 없습니다
        </p>
      </div>

      <div className="mt-[16px] flex justify-end gap-[6px] text-[13px]">
        <button
          type="button"
          className="bg-ink px-[18px] py-[9px] text-[13px] leading-none text-white hover:opacity-85"
        >
          {writeLabel}
        </button>
        <button
          type="button"
          className="border border-hairline px-[18px] py-[9px] text-[13px] leading-none hover:bg-muted"
        >
          모두 보기
        </button>
      </div>
    </section>
  );
}

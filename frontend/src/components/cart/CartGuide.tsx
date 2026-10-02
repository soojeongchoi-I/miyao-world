import { cartGuides } from "@/lib/site-config";

export default function CartGuide() {
  return (
    <section className="border border-hairline">
      <h2 className="border-b border-hairline px-[24px] py-[16px] text-[14px] text-ink-soft">
        이용안내
      </h2>

      <div className="space-y-[34px] px-[24px] py-[24px]">
        {cartGuides.map((guide) => (
          <div key={guide.title}>
            <h3 className="text-[13.5px] text-ink-soft">{guide.title}</h3>

            <ol className="mt-[18px] space-y-[5px]">
              {guide.items.map((item, index) => (
                <li key={item} className="flex gap-[10px] text-[13px] leading-[1.4]">
                  <span className="mt-[1px] flex h-[15px] w-[15px] shrink-0 items-center justify-center bg-[#c7c7c7] text-[10px] leading-none text-white">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}

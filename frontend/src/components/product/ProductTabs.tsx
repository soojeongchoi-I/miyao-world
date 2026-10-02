export const PRODUCT_TABS = [
  { id: "prdDetail", label: "Detail" },
  { id: "prdReview", label: "Review" },
  { id: "prdQnA", label: "Q&A" },
];

export default function ProductTabs({ active }: { active: string }) {
  return (
    <ul className="flex justify-center gap-[33px] text-[15px]">
      {PRODUCT_TABS.map((tab) => (
        <li key={tab.id}>
          <a
            href={`#${tab.id}`}
            className={
              tab.id === active ? "text-ink" : "text-ink-faint hover:text-ink"
            }
          >
            {tab.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

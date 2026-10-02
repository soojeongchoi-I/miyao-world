import { ChevronRight } from "lucide-react";
import {
  mockOrders,
  orderStatusExtra,
  orderStatusFlow,
} from "@/lib/site-config";

function countBy(status: string) {
  return mockOrders.filter((order) => order.status === status).length;
}

function StatusCell({ label }: { label: string }) {
  return (
    <div className="text-center">
      <p className="text-[12.5px] text-ink-muted">{label}</p>
      <p className="mt-[8px] text-[20px] leading-none">{countBy(label)}</p>
    </div>
  );
}

export default function OrderStatusBoard() {
  return (
    <section>
      <h2 className="text-[14px] text-ink-soft">주문처리 현황</h2>

      <div className="mt-[14px] flex flex-wrap items-center gap-y-[24px] border border-hairline px-[40px] py-[28px]">
        {orderStatusFlow.map((label, index) => (
          <div key={label} className="flex items-center">
            {index > 0 && (
              <ChevronRight
                size={16}
                strokeWidth={1.4}
                className="mx-[28px] text-ink-faint"
                aria-hidden
              />
            )}
            <StatusCell label={label} />
          </div>
        ))}

        <div className="ml-auto flex items-center gap-[40px] border-l border-hairline pl-[40px]">
          {orderStatusExtra.map((label) => (
            <StatusCell key={label} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}

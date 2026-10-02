import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/format";
import { mockOrders } from "@/lib/site-config";

const headers = ["주문일자 [주문번호]", "이미지", "상품정보", "수량", "상품구매금액", "주문처리상태"];

export default function OrderHistory() {
  return (
    <section>
      <h2 className="text-[14px] text-ink-soft">최근 주문내역</h2>

      {mockOrders.length === 0 ? (
        <div className="mt-[14px] border-y border-hairline">
          <p className="py-[40px] text-center text-[13px] text-ink-muted">
            주문 내역이 없습니다.
          </p>
        </div>
      ) : (
        <div className="mt-[14px] overflow-x-auto">
          <table className="w-full min-w-[860px] border-t border-ink text-[12.5px]">
            <colgroup>
              <col style={{ width: "170px" }} />
              <col style={{ width: "92px" }} />
              <col />
              <col style={{ width: "75px" }} />
              <col style={{ width: "120px" }} />
              <col style={{ width: "120px" }} />
            </colgroup>

            <thead>
              <tr className="border-b border-hairline text-ink-soft">
                {headers.map((header) => (
                  <th key={header} scope="col" className="py-[12px] font-normal">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {mockOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-hairline text-center align-middle"
                >
                  <td className="py-[16px]">
                    {order.date}
                    <br />
                    <span className="text-ink-muted">[{order.id}]</span>
                  </td>

                  <td className="py-[16px]">
                    <Link href={`/product/${order.slug}`} className="block px-[10px]">
                      <span
                        className="relative block overflow-hidden bg-placeholder"
                        style={{ aspectRatio: "1.625" }}
                      >
                        {order.image && (
                          <Image
                            src={order.image}
                            alt={order.name}
                            fill
                            sizes="72px"
                            className="object-cover"
                          />
                        )}
                      </span>
                    </Link>
                  </td>

                  <td className="py-[16px] pr-[16px] text-left">
                    <Link
                      href={`/product/${order.slug}`}
                      className="hover:opacity-60"
                    >
                      {order.name}
                    </Link>
                    <ul className="mt-[6px] space-y-[2px] text-ink-muted">
                      {order.options.map((option) => (
                        <li key={option}>{option}</li>
                      ))}
                    </ul>
                  </td>

                  <td className="py-[16px]">{order.quantity}</td>

                  <td className="py-[16px]">
                    {formatPrice(order.price * order.quantity)}
                  </td>

                  <td className="py-[16px]">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

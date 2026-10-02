"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export default function BookmarkButton({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState("");

  const close = () => {
    setOpen(false);
    setHint("");
  };

  // Browsers no longer let a page add a bookmark on its own, so show the shortcut.
  const add = () => {
    const isMac = navigator.userAgent.includes("Mac");
    setHint(
      `${isMac ? "⌘ + D" : "Ctrl + D"} 를 눌러\n즐겨찾기에 추가해주세요.`,
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-[length:inherit] leading-[inherit] tracking-[inherit] hover:text-ink"
      >
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-start justify-start p-[40px]">
          <button
            type="button"
            aria-label="닫기"
            onClick={close}
            className="absolute inset-0 bg-black/30"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="즐겨찾기 추가"
            className="relative w-full max-w-[420px] bg-white"
          >
            <div className="flex flex-col items-center px-[28px] pt-[42px] pb-[34px]">
              <span className="flex h-[110px] w-[110px] items-center justify-center rounded-full border-[5px] border-[#ededed]">
                <Star size={58} fill="#ec5a5a" strokeWidth={0} aria-hidden />
              </span>

              <p className="mt-[28px] whitespace-pre-line text-center text-[14px] leading-[1.75]">
                {hint || "즐겨찾기가 추가됩니다.\n추가하시겠습니까?"}
              </p>
            </div>

            <div className="flex justify-center gap-[6px] border-t border-hairline bg-[#fafafa] px-[28px] py-[16px] text-[13px]">
              {hint ? (
                <button
                  type="button"
                  onClick={close}
                  className="w-[124px] bg-[#2b2b2b] py-[11px] text-[13px] leading-none text-white hover:opacity-85"
                >
                  확인
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={add}
                    className="w-[124px] bg-[#2b2b2b] py-[11px] text-[13px] leading-none text-white hover:opacity-85"
                  >
                    추가하기
                  </button>
                  <button
                    type="button"
                    onClick={close}
                    className="w-[124px] border border-hairline bg-white py-[11px] text-[13px] leading-none hover:bg-muted"
                  >
                    취소하기
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

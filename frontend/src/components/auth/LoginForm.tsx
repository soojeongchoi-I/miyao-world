"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Key, Lock, Search, User } from "lucide-react";
import { useAuth } from "@/lib/auth";

function Field({
  icon,
  type,
  placeholder,
}: {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="flex h-[30px] items-center border border-hairline">
      <span className="flex h-full w-[52px] shrink-0 items-center justify-center border-r border-hairline">
        {icon}
      </span>
      <input
        type={type}
        aria-label={placeholder}
        placeholder={placeholder}
        autoComplete={type === "password" ? "current-password" : "username"}
        className="h-full w-full px-[14px] text-[12.5px] tracking-[0.05em] outline-none placeholder:text-ink"
      />
    </div>
  );
}

export default function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();

  // TODO: replace with the real sign-in call once the auth API exists
  const signIn = () => {
    login();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[528px] border border-hairline px-[24px] pt-[54px] pb-[46px] sm:px-[100px]">
        <h2 className="text-center text-[14px] leading-none tracking-[0.1em]">
          MEMBER LOGIN
        </h2>

        <div className="mt-[64px] space-y-[5px]">
          <Field
            icon={<User size={13} fill="currentColor" strokeWidth={0} />}
            type="text"
            placeholder="ID"
          />
          <Field
            icon={<Lock size={13} fill="currentColor" strokeWidth={0} />}
            type="password"
            placeholder="PASSWORD"
          />
        </div>

        <p className="mt-[13px] flex items-center gap-[5px] text-[12px]">
          <Lock size={12} strokeWidth={2} className="text-[#e8643c]" />
          보안접속
        </p>

        <button
          type="button"
          onClick={signIn}
          className="mt-[13px] w-full bg-ink py-[13px] text-[13px] leading-none tracking-[0.1em] text-white hover:opacity-85"
        >
          LOGIN
        </button>

        <ul className="mt-[10px] space-y-[5px] text-[13px]">
          {[
            { id: "kakao", label: "카카오 로그인", style: { backgroundColor: "#FEE500", color: "#191600" } },
            { id: "naver", label: "네이버 로그인", style: { backgroundColor: "#03C75A", color: "#ffffff" } },
            {
              id: "google",
              label: "Google 로그인",
              style: { backgroundColor: "#ffffff", color: "#3c4043", border: "1px solid #dadce0" },
            },
          ].map((provider) => (
            <li key={provider.id}>
              <button
                type="button"
                className="w-full py-[12px] text-[13px] leading-none hover:opacity-85"
                style={provider.style}
              >
                {provider.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-[24px] flex items-start justify-between gap-[16px]">
          <p className="text-[12.5px] leading-[1.3]">
            회원가입을 하시면 다양하고 특별한
            <br />
            혜택이 준비되어 있습니다.
          </p>
          <Link
            href="/join"
            className="shrink-0 border border-hairline px-[18px] py-[8px] text-[12.5px] leading-none hover:bg-muted"
          >
            회원가입
          </Link>
        </div>

        <hr className="mt-[24px] border-hairline" />

        <div className="mt-[22px] flex items-center justify-between text-[12.5px]">
          <span>MEMBER SEARCH</span>
          <Link href="/find-id" className="flex items-center gap-[5px] hover:opacity-60">
            <Search size={12} strokeWidth={2} />
            아이디찾기
          </Link>
          <Link
            href="/find-password"
            className="flex items-center gap-[5px] hover:opacity-60"
          >
            <Key size={12} strokeWidth={2} />
            비밀번호찾기
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Facebook, Instagram, Search, Twitter } from "lucide-react";
import BookmarkButton from "@/components/common/BookmarkButton";
import { useAuth } from "@/lib/auth";
import {
  primaryNav,
  secondaryNav,
  socialLinks,
  utilityNav,
} from "@/lib/site-config";

export default function SiteNav({ onNavigate }: { onNavigate?: () => void }) {
  const { isLoggedIn, logout } = useAuth();

  return (
    <>
      <div className="space-y-[11px] text-[12px] leading-none tracking-[0.05em] text-ink-muted">
        {utilityNav[isLoggedIn ? "member" : "guest"].map((row, i) => (
          <div key={i} className="flex gap-[6px]">
            {row.map((item, j) => (
              <span key={item.label} className="flex gap-[6px]">
                {j > 0 && <span aria-hidden>/</span>}
                {item.action === "bookmark" ? (
                  <BookmarkButton label={item.label} />
                ) : item.action === "logout" ? (
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      onNavigate?.();
                    }}
                    className="text-[length:inherit] leading-[inherit] tracking-[inherit] hover:text-ink"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link href={item.href} onClick={onNavigate} className="hover:text-ink">
                    {item.label}
                  </Link>
                )}
              </span>
            ))}
          </div>
        ))}
      </div>

      <nav className="mt-[57px]">
        <ul className="space-y-[17px]">
          {primaryNav.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className="block text-[12px] leading-none tracking-[0.05em] text-ink hover:opacity-60"
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="mt-[14px] space-y-[12px] pl-[7px]">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        onClick={onNavigate}
                        className="block text-[12px] leading-none text-ink-muted hover:text-ink"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <ul className="mt-[50px] space-y-[17px]">
          {secondaryNav.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className="block text-[12px] leading-none tracking-[0.05em] text-ink hover:opacity-60"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <form
        role="search"
        className="mt-[50px] flex items-center gap-2 border-b border-ink pb-[6px]"
      >
        <input
          type="search"
          aria-label="Search"
          className="w-full bg-transparent text-[12px] outline-none"
        />
        <button type="submit" aria-label="Search" className="shrink-0">
          <Search size={14} strokeWidth={1.5} className="text-ink-soft" />
        </button>
      </form>

      <ul className="mt-[26px] flex items-center gap-[14px]">
        {socialLinks.map((item) => (
          <li key={item.label}>
            <Link href={item.href} aria-label={item.label} onClick={onNavigate}>
              {item.label === "Facebook" && (
                <Facebook size={14} fill="currentColor" strokeWidth={0} />
              )}
              {item.label === "Twitter" && (
                <Twitter size={14} fill="currentColor" strokeWidth={0} />
              )}
              {item.label === "Instagram" && <Instagram size={14} strokeWidth={1.6} />}
              {item.label === "Blog" && (
                <span className="font-serif text-[15px] leading-none">B</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

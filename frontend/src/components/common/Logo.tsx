import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "w-[100px]" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Miyao World" className={`block ${className}`}>
      <Image
        src="/static/miyao-world.png"
        alt="Miyao World"
        width={902}
        height={685}
        priority
        className="h-auto w-full"
      />
    </Link>
  );
}

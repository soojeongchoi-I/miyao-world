export default function PageTitle({ children }: { children: string }) {
  return (
    <h1 className="text-[15px] uppercase tracking-[0.08em]">{children}</h1>
  );
}

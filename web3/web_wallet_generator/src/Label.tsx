export function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/50">
      {children}
    </div>
  );
}
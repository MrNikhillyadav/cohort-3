import { CopyBtn } from "./CopyBtn";

export function MonoBox({
  value,
  accent, // kept for compatibility
  id,
  active,
  onCopy,
}: {
  value: string;
  accent: "neutral" | "green" | "red";
  id: string;
  active: string;
  onCopy: (t: string, id: string) => void;
}) {
  return (
    <div
      className="
        flex items-center gap-2
        rounded-lg px-3 py-2
        bg-black
        border border-white/10
      "
    >
      <code className="flex-1 text-xs font-mono break-all leading-relaxed text-white">
        {value}
      </code>

      <CopyBtn
        text={value}
        id={id}
        active={active}
        onCopy={onCopy}
      />
    </div>
  );
}
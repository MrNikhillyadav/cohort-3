export function CopyBtn({
  text,
  id,
  active,
  onCopy,
}: {
  text: string;
  id: string;
  active: string;
  onCopy: (t: string, id: string) => void;
}) {
  const copied = active === id;

  return (
    <button
      onClick={() => onCopy(text, id)}
      className={`
        shrink-0
        text-xs
        px-2 py-0.5
        rounded
        transition-all duration-200
        ${
          copied
            ? "bg-white text-black"
            : "text-white/60 hover:text-white"
        }
      `}
    >
      {copied ? "✓ Copied" : "Copy"}
    </button>
  );
}
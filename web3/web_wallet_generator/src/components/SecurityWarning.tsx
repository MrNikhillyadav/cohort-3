export function SecurityWarning() {
  return (
    <div className="flex gap-3 items-start mb-5 rounded-lg border border-white/10 bg-black px-4 py-3 text-sm text-white">
      
      <span className="text-base">⚠️</span>

      <span>
        <strong className="font-semibold">
          Security Warning:
        </strong>{" "}
        Never share your mnemonic or private keys. Educational use only.
      </span>

    </div>
  );
}
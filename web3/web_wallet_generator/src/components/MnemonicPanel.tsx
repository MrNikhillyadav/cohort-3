import { useState } from "react";
import { Label } from "../Label";
import { CopyBtn } from "./CopyBtn";

export function MnemonicPanel({
  mnemonic,
  active,
  onCopy,
}: {
  mnemonic: string;
  active: string;
  onCopy: (t: string, id: string) => void;
}) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="bg-black border border-white/10 rounded-xl p-4 mb-4">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <Label>Recovery Phrase</Label>

        <div className="flex gap-2">
          <button
            onClick={() => setRevealed((r) => !r)}
            className="text-xs px-3 py-1 rounded-md border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
          >
            {revealed ? "Hide" : "Reveal"}
          </button>

          {revealed && (
            <CopyBtn
              text={mnemonic}
              id="mnemonic"
              active={active}
              onCopy={onCopy}
            />
          )}
        </div>
      </div>

      {/* Body */}
      {revealed ? (
        <div className="flex flex-wrap gap-2">
          {mnemonic.split(" ").map((word, i) => (
            <span
              key={i}
              className="flex items-center bg-black border border-white/10 rounded-md px-3 py-1 text-sm font-mono text-white"
            >
              <span className="text-[10px] text-white/40 mr-1">
                {i + 1}
              </span>
              {word}
            </span>
          ))}
        </div>
      ) : (
        <div className="bg-black border border-white/10 rounded-lg px-4 py-3 font-mono text-sm tracking-[0.4em] text-white/40">
          {"••• ".repeat(12).trim()}
        </div>
      )}
    </div>
  );
}
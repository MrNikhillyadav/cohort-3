import { useState } from "react";
import { Label } from "../Label";
import { MonoBox } from "./MonoBox";
import type { Wallet } from "../types";

export function WalletCard({
  wallet,
  active,
  onCopy,
  onRemove,
}: {
  wallet: Wallet;
  active: string;
  onCopy: (t: string, id: string) => void;
  onRemove: (index: number) => void;
})
{
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-black border border-white/10 rounded-xl overflow-hidden mb-3">
      
      {/* Header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3.5 text-white hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          
          {/* Index Circle */}
          <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-white text-black shrink-0">
            {wallet.index + 1}
          </span>

          {/* Derivation Path */}
          <span className="font-mono text-xs text-white/50">
            {wallet.derivationPath}
          </span>
        </div>
        
        {/* Remove button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove(wallet.index);
            }}
            className="text-xs text-white/40 hover:text-white transition"
          >
            Remove
          </button>

        {/* Chevron */}
        <svg
          className={`w-4 h-4 text-white/50 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Body */}
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-4 pb-4 pt-1">
          
          <div className="mb-4">
            <Label>Public Key (Address)</Label>
            <MonoBox
              value={wallet.publicKey}
              accent="neutral"
              id={`pub-${wallet.index}`}
              active={active}
              onCopy={onCopy}
            />
          </div>

          <div>
            <Label>Private Key (Base64)</Label>
            <MonoBox
              value={wallet.privateKey}
              accent="neutral"
              id={`prv-${wallet.index}`}
              active={active}
              onCopy={onCopy}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
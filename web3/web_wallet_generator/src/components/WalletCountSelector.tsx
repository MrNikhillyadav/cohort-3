import { Label } from "../Label";

export function WalletCountSelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="mb-5">
      <Label>Number of Wallets</Label>

      <div className="flex gap-2">
        {[1, 2, 3, 4].map((n) => {
          const active = value === n;

          return (
            <button
              key={n}
              onClick={() => onChange(n)}
              className={`
                flex-1 py-3 rounded-lg text-base font-bold transition-all duration-150 border
                ${
                  active
                    ? "bg-white text-black border-white"
                    : "bg-black text-white/60 border-white/10 hover:text-white hover:border-white/30"
                }
              `}
            >
              {n}
            </button>
          );
        })}
      </div>
    </div>
  );
}
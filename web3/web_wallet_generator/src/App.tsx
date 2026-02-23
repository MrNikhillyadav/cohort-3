import { useState, useCallback, useEffect } from "react";
import { generateMnemonic, mnemonicToSeedSync } from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english.js";
import { HDKey } from "@scure/bip32";
import bs58 from "bs58";
import { Keypair } from "@solana/web3.js";
import type { GenerateResult, Wallet } from "./types";
import { SecurityWarning } from "./components/SecurityWarning";
import { WalletCountSelector } from "./components/WalletCountSelector";
import { GenerateButton } from "./components/GenerateButton";
import { MnemonicPanel } from "./components/MnemonicPanel";
import { WalletCard } from "./components/WalletCard";
import "./index.css";

/* ----------------------------- Wallet Generator ---------------------------- */

async function generateWallets(numWallets: number): Promise<GenerateResult> {
  const mnemonic = generateMnemonic(wordlist);
  const seed = mnemonicToSeedSync(mnemonic);
  const hd = HDKey.fromMasterSeed(seed);

  const wallets: Wallet[] = Array.from({ length: numWallets }, (_, i) => {
    const path = `m/44'/501'/${i}'/0'`;
    const child = hd.derive(path);

    if (!child.privateKey) {
      throw new Error("Failed to derive private key");
    }

    const keypair = Keypair.fromSeed(child.privateKey);

    return {
      index: i,
      derivationPath: path,
      publicKey: keypair.publicKey.toBase58(),
      privateKey: bs58.encode(keypair.secretKey),
    };
  });

  return { mnemonic, wallets };
}

/* -------------------------------------------------------------------------- */

export default function App() {
  /* ----------------------- Initialize from localStorage ----------------------- */

  const [mnemonic, setMnemonic] = useState(() => {
    return localStorage.getItem("mnemonic") || "";
  });

  const [wallets, setWallets] = useState<Wallet[]>(() => {
    const stored = localStorage.getItem("wallets");
    return stored ? JSON.parse(stored) : [];
  });

  const [numWallets, setNumWallets] = useState(1);
  const [loading, setLoading] = useState(false);
  const [copiedField, setCopiedField] = useState("");

  /* ---------------------------- Persist to storage ---------------------------- */

  useEffect(() => {
    if (wallets.length > 0) {
      localStorage.setItem("wallets", JSON.stringify(wallets));
      localStorage.setItem("mnemonic", mnemonic);
    } else {
      localStorage.removeItem("wallets");
      localStorage.removeItem("mnemonic");
    }
  }, [wallets, mnemonic]);

  /* ------------------------------- Generate -------------------------------- */

  const handleGenerate = useCallback(async () => {
    setLoading(true);

    // allow loading UI to render
    await new Promise((r) => requestAnimationFrame(r));

    const { mnemonic: m, wallets: w } =
      await generateWallets(numWallets);

    setMnemonic(m);
    setWallets(w);
    setLoading(false);
  }, [numWallets]);

  /* ------------------------------- Add Wallet -------------------------------- */

  const addWallet = () => {
    if (!mnemonic) return;

    const seed = mnemonicToSeedSync(mnemonic);
    const hd = HDKey.fromMasterSeed(seed);

    const nextIndex = wallets.length;
    const path = `m/44'/501'/${nextIndex}'/0'`;
    const child = hd.derive(path);

    if (!child.privateKey) return;

    const keypair = Keypair.fromSeed(child.privateKey);

    const newWallet: Wallet = {
      index: nextIndex,
      derivationPath: path,
      publicKey: keypair.publicKey.toBase58(),
      privateKey: bs58.encode(keypair.secretKey),
    };

    setWallets((prev) => [...prev, newWallet]);
  };

  /* ------------------------------ Remove Wallet ------------------------------ */

  const removeWallet = (index: number) => {
    const updated = wallets.filter((w) => w.index !== index);

    if (updated.length === 0) {
      setWallets([]);
      setMnemonic("");
    } else {
      setWallets(updated);
    }
  };

  /* ------------------------------- Clipboard -------------------------------- */

  const copyToClipboard = useCallback((text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 2000);
  }, []);

  /* --------------------------------- Render --------------------------------- */

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-3xl px-6 py-12">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl bg-white text-black">
            ◎
          </div>

          <h1 className="text-3xl font-bold mb-2">
            Solana Wallet Generator
          </h1>

          <p className="text-sm text-white/50">
            BIP39 mnemonic → SLIP-0010 ed25519 → Keypair
          </p>
        </div>

        {/* Control Panel */}
        <div className="bg-black border border-white/10 rounded-xl p-6 mb-6">
          <SecurityWarning />
          <WalletCountSelector
            value={numWallets}
            onChange={setNumWallets}
          />
          <GenerateButton
            onClick={handleGenerate}
            loading={loading}
          />
        </div>

        {/* Results */}
        {mnemonic && (
          <>
            <MnemonicPanel
              mnemonic={mnemonic}
              active={copiedField}
              onCopy={copyToClipboard}
            />

            <div className="flex items-center justify-between mb-3">
              <div className="text-[11px] tracking-[0.12em] uppercase font-bold text-white/40">
                {wallets.length} Wallet
                {wallets.length > 1 ? "s" : ""} Derived
              </div>

              <button
                onClick={addWallet}
                className="text-sm bg-white text-black px-4 py-1.5 rounded-lg"
              >
                Add Wallet
              </button>
            </div>

            {wallets.map((w) => (
              <WalletCard
                key={w.index}
                wallet={w}
                active={copiedField}
                onCopy={copyToClipboard}
                onRemove={removeWallet}
              />
            ))}
          </>
        )}

        {/* Empty State */}
        {!mnemonic && !loading && (
          <div className="text-center py-16 text-white/40">
            <div className="text-4xl mb-4">◎</div>
            <div className="text-sm">
              Select a count and click Generate Wallets
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
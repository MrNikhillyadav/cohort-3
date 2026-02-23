export function GenerateButton({
  onClick,
  loading,
}: {
  onClick: () => void;
  loading: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`
        w-full
        rounded-lg
        py-3.5
        text-[15px]
        font-bold
        flex items-center justify-center gap-2
        transition-all duration-200
        ${
          loading
            ? "bg-white text-black opacity-60 cursor-not-allowed"
            : "bg-white text-black hover:opacity-90 active:scale-[0.98]"
        }
      `}
    >
      {loading ? (
        <>
          <span className="animate-spin inline-block">⟳</span>
          Generating…
        </>
      ) : (
        "Generate Wallets"
      )}
    </button>
  );
}
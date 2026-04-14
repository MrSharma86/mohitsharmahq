"use client";

type LikeButtonProps = {
  count: number;
  clicked: boolean;
  onClick: () => void;
  compact?: boolean;
};

export default function LikeButton({
  count,
  clicked,
  onClick,
  compact = false,
}: LikeButtonProps) {
  if (compact) {
    return (
      <button
        onClick={onClick}
        className={`flex items-center gap-2 transition active:scale-95 ${
          clicked ? "text-white" : "text-zinc-400 hover:text-white"
        }`}
      >
        <span className="text-3xl">❤️</span>
        <span className="text-base">{count}</span>
      </button>
    );
  }

  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className={`flex items-center gap-2 transition active:scale-95 hover:scale-105 cursor-pointer ${
          clicked ? "text-white" : "text-zinc-400 hover:text-white"
        }`}
      >
        <span className="text-2xl">❤️</span>
        <span className="text-lg">{count}</span>
      </button>
    </div>
  );
}
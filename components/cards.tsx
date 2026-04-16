type CardProps = {
  title?: string;
  children: React.ReactNode;
  variant?: "default" | "info" | "warning" | "success";
};

export default function Card({ title, children, variant = "default" }: CardProps) {
  const variants = {
    default: "border-white/10 bg-white/5",
    info: "border-blue-500/30 bg-blue-500/10",
    warning: "border-yellow-500/30 bg-yellow-500/10",
    success: "border-green-500/30 bg-green-500/10",
  };

  return (
    <div className={`my-6 rounded-xl border p-5 ${variants[variant]}`}>
      {title && (
        <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-300">
          {title}
        </h4>
      )}
      <div className="text-zinc-200">{children}</div>
    </div>
  );
}
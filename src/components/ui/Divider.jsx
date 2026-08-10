export function Divider({ className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-[#d8d0c4]" />
      <span className="text-[#a3835a] text-xs">✦</span>
      <div className="h-px flex-1 bg-[#d8d0c4]" />
    </div>
  );
}

export function ThinDivider({ className = "" }) {
  return <div className={`h-px w-full bg-[#d8d0c4] ${className}`} />;
}

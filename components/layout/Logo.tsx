export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Geometric E symbol */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 4h12v8H4V4z" fill="currentColor"/>
        <path d="M4 14h12v4H4v-4z" fill="currentColor"/>
        <path d="M4 20h12v8H4v-8z" fill="currentColor"/>
      </svg>
      {/* Text */}
      <span className="text-2xl font-bold tracking-tight">EFITO</span>
    </div>
  );
}
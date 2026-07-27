export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Main blue ambient glow */}
      <div className="absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

      {/* Secondary glow */}
      <div className="absolute right-[-12rem] top-[20%] h-[32rem] w-[32rem] rounded-full bg-blue-600/10 blur-[150px]" />

      {/* Subtle grid */}
      <div className="novaux-grid absolute inset-0 opacity-30" />

      {/* Edge vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050507_82%)]" />

      {/* Soft film grain */}
      <div className="novaux-noise absolute inset-0 opacity-[0.035]" />
    </div>
  );
}
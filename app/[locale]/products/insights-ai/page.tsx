export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white text-slate-900 px-4">
      <div className="flex flex-col items-center gap-5">
        {/* Modern Spinner Animation */}
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-slate-100 border-t-blue-600 animate-spin"></div>
        </div>

        {/* Brand & Status Text */}
        <div className="text-center space-y-1">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
            opening ...
          </h2>
          <p className="text-xs text-slate-400 tracking-wider animate-pulse">
            Initializing workspace...
          </p>
        </div>
      </div>
    </div>
  );
}
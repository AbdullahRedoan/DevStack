import type { ITechnology } from "../../types/technologyType";

export interface StackTechProps {
  technology: ITechnology;
}

export default function StackTech({ technology }: StackTechProps) {
  
  return (
    <div className="flex items-center justify-between my-2 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
      {/* Left: Icon, Name & Category */}
      <div className="flex items-center gap-3">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="w-10 h-10 object-contain"
        />
        <div className="flex flex-col">
          <span className="font-bold text-slate-900 text-base leading-tight">
            {technology.name}
          </span>
          <span className="text-slate-400 text-xs font-medium mt-0.5">
            {technology.category}
          </span>
        </div>
      </div>

      {/* Right: Close / Remove Button */}
      <button
        // onClick={() => onRemove?.(item.id)}
        className="text-slate-400 hover:text-slate-600 transition-colors p-1"
        aria-label="Remove item"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
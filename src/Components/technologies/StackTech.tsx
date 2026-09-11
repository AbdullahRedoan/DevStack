import type { ITechnology } from "../../types/technologyType";
import { RxCross2 } from "react-icons/rx";

export interface StackTechProps {
  technology: ITechnology;
  handleRemoveFromStack: (name:string ,id:string)=>void
}

export default function StackTech({ technology, handleRemoveFromStack }: StackTechProps) {
  
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
        onClick={() => handleRemoveFromStack(technology.name, technology.id)}
        className="text-slate-400 hover:text-slate-600 transition-colors p-1"
        aria-label="Remove item"
      >
        <RxCross2/>
      </button>
    </div>
  );
}
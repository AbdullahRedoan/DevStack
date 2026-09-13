import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../types/technologyType";
import { Bounce, toast } from "react-toastify";

export interface TechnologyCardProps {
  technology: ITechnology;
  selectedStack: ITechnology[];
  handleSetSelectedStack: Dispatch<SetStateAction<ITechnology>>;
}

export default function TechnologyCard({
  technology,
  selectedStack,
  handleSetSelectedStack,
}: TechnologyCardProps) {
  const isAdded = selectedStack.includes(technology);
  const handleDoubleClick = (name: string) => {
    if (isAdded) {
      toast.error(`${name} is already in Your Stack`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  return (
    <div className="card bg-base-100 border border-gray-200 hover:shadow-md transition-shadow p-5 flex flex-col justify-between rounded-xl">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <img
              src={technology.icon}
              alt={`${technology.name} icon`}
              className="w-10 h-10 object-contain"
            />
            <h3 className="font-bold text-lg text-base-content">
              {technology.name}
            </h3>
          </div>
          <span className="badge badge-sm badge-secondary bg-pink-100 text-pink-700 border-none font-medium px-2.5 py-1">
            {technology.badge}
          </span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {technology.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-3 border-t border-gray-100">
          <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md font-semibold">
            {technology.category}
          </span>

          <div className="flex items-center gap-3">
            <span>{technology.difficulty}</span>
            <span className="flex items-center gap-1 font-semibold text-gray-800">
              <span className="text-yellow-500">★</span> {technology.rating}
            </span>
          </div>
        </div>
        <div onClick={() => handleDoubleClick(technology.name)}>
          <button
            onClick={() => handleSetSelectedStack(technology)}
            className={`btn btn-block rounded-lg ${isAdded ? "bg-gray-300" : "bg-black"} text-sm text-white font-light`}
            disabled={isAdded}
          >
            {isAdded ? "✔Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
}

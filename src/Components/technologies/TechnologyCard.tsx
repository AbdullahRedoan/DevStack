import type { ITechnology } from "../../types/technologyType";

export interface TechnologyCardProps {
    technology: ITechnology;
}

export default function TechnologyCard({ technology }: TechnologyCardProps) {
    
    return (
    <div className="card bg-base-100 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col justify-between rounded-xl">
      {/* Top Row: Icon + Name & Badge */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <img
              src={technology.icon}
              alt={`${technology.name} icon`}
              className="w-10 h-10 object-contain"
            />
            <h3 className="font-bold text-lg text-base-content">{technology.name}</h3>
          </div>
          
          {/* Badge */}
          <span className="badge badge-sm badge-secondary bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300 border-none font-medium px-2.5 py-1">
            {technology.badge}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
          {technology.description}
        </p>
      </div>

      {/* Card Details & Footer */}
      <div>
        {/* Category, Difficulty & Rating */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4 pt-3 border-t border-gray-100 dark:border-gray-800">
          {/* Category Chip */}
          <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-md font-medium">
            {technology.category}
          </span>

          <div className="flex items-center gap-3">
            <span>{technology.difficulty}</span>
            <span className="flex items-center gap-1 font-semibold text-gray-700 dark:text-gray-300">
              <span className="text-yellow-500">★</span> {technology.rating}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          className={`btn btn-block text-sm font-semibold`}
        >
        </button>
      </div>
    </div>
  );
}
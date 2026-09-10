import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../types/technologyType";

export interface YourStackProps {
    technology: ITechnology[]
    selectedStack: ITechnology[];
    setSelectedStack: Dispatch<SetStateAction<ITechnology[]>>
}
export default function YourStack({ technology, selectedStack }: YourStackProps) {
    const isEmpty:ITechnology[] | [] = []
    console.log(technology);
    return(
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
      <h2 className="text-xl font-bold m-0">Your Stack</h2>
      <small className="m-0">{isEmpty ? "No technologies selected yet." : `${selectedStack.length} Technology Selected`}</small>

      {isEmpty ? (
        /* Render Empty State Box */
        <div className="border border-dashed border-gray-200 rounded-xl my-4 py-6 text-center text-gray-400">
            <small> Your stack is empty.</small>
        </div>
      ) : (
        /* Render Stack Items List & Remove All Button */
        <div>
          {/* List items */}
        </div>
      )}
    </div>
        
    )
}
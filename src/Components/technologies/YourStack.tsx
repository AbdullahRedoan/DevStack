import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../types/technologyType";
import type React from "react";
import StackTech from "./StackTech";
import { Bounce, toast } from "react-toastify";

export interface YourStackProps {
  selectedStack: ITechnology[];
  setSelectedStack: Dispatch<SetStateAction<ITechnology[]>>;
}
export default function YourStack({
  selectedStack,
  setSelectedStack,
}: YourStackProps) {
  const isEmpty = selectedStack.length === 0;
  const handleRemoveFromStack = (name:string, id:string): void => {
    const newStack = selectedStack.filter((tech) => tech.id !== id);
    setSelectedStack(newStack);
    toast.success(`Removed ${name} from Your Stack`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  const handleRemoveAll = () => {
     setSelectedStack([]);
     toast.success("Removed All Skills from Your Stack", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6">
      <h2 className="text-xl font-bold m-0">Your Stack</h2>
      <small className="m-0">
        {isEmpty
          ? "No technologies selected yet."
          : `${selectedStack.length} Technology Selected`}
      </small>

      {isEmpty ? (
        <div className="border border-dashed border-gray-200 rounded-xl my-4 py-6 text-center text-gray-400">
          <small> Your stack is empty.</small>
        </div>
      ) : (
        /* Render Stack Items List & Remove All Button */
        <div>
          {selectedStack.map((tech): React.ReactNode => {
            return (
              <StackTech
                handleRemoveFromStack={handleRemoveFromStack}
                technology={tech}
              ></StackTech>
            );
          })}
          <button
            onClick={handleRemoveAll}
            className="btn btn-error btn-outline w-full my-4 rounded-xl"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}

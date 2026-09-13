import { use, useState } from "react";
import type { ITechnology } from "../../types/technologyType";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import { Bounce, toast } from "react-toastify";

interface technologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiesPromise }: technologiesProps) => {
  const technologies = use(technologiesPromise);
  const [selectedStack, setSelectedStack] = useState<ITechnology[]>([]);

  const handleSetSelectedStack = (technology: ITechnology): void => {
    toast.success(`Successfully Added ${technology.name} to Your Stack`, {
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
    const newSelectedStack = [...selectedStack, technology];
    setSelectedStack(newSelectedStack);
  };

  return (
    <div className=" w-9/10 mx-auto">
      <div className="mb-8 text-center md:text-left lg:text-left">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Explore the <span className="text-theme-gradient">Technologies</span>
        </h2>
        <p className="mt-2 text-slate-500 text-xs">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:col-span-3 gap-5 my-10">
          {technologies.map((technology: ITechnology) => {
            return (
              <TechnologyCard key={technology.id}
                selectedStack={selectedStack}
                handleSetSelectedStack={() =>
                  handleSetSelectedStack(technology)
                }
                technology={technology}
              ></TechnologyCard>
            );
          })}
        </div>
        <div className="my-10">
          <YourStack
            setSelectedStack={setSelectedStack}
            selectedStack={selectedStack}
          ></YourStack>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

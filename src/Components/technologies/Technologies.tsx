import { use, useState } from "react";
import type { ITechnology } from "../../types/technologyType";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface technologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiesPromise }: technologiesProps) => {
  const technologies = use(technologiesPromise);
  const [selectedStack, setSelectedStack] = useState<ITechnology[]>([]);

    const handleSetSelectedStack = (technology:ITechnology):void =>{
        const newSelectedStack = [...selectedStack, technology];
        setSelectedStack(newSelectedStack)
    }

  return (
    <div className=" w-9/10 mx-auto">
      <div className="mb-8 text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span>
        </h2>
        <p className="mt-2 text-slate-500 text-xl">
          Pick one technology per category to build your ideal stack. 
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <div className=" grid grid-cols-3 col-span-3 gap-5 my-10">
          {technologies.map((technology: ITechnology) => {
            return (
              <TechnologyCard
                selectedStack={selectedStack}
                handleSetSelectedStack={()=> handleSetSelectedStack(technology)}
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

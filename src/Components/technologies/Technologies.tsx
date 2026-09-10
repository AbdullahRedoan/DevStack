import { use } from "react";
import type { ITechnology } from "../../types/technologyType";
import TechnologyCard from "./TechnologyCard";

interface technologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiesPromise }: technologiesProps) => {
  const technologies = use(technologiesPromise);
  return (
    <div className="flex">
        
      <div className=" grid grid-cols-3 gap-5 m-10">
        {technologies.map((technology: ITechnology) => {
          return <TechnologyCard technology={technology}></TechnologyCard>;
        })}
        <h2>Explore the Technologies</h2>
      </div>
    </div>
  );
};

export default Technologies;

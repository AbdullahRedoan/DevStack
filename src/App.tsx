import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Technologies from "./Components/technologies/Technologies";
import type { ITechnology } from "./types/technologyType";
import { Footer } from "./Components/Footer";

function App() {
  const technologiesFetch = async (): Promise<ITechnology[]> => {
    const res = await fetch("../public/technologies.json");
    const data = await res.json();
    return data;
  };
  const [technologiesPromise] = useState(() => technologiesFetch());
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Nav></Nav>
        <Banner></Banner>
        <Technologies technologiesPromise={technologiesPromise}></Technologies>
        <Footer></Footer>
      </Suspense>
    </>
  );
}

export default App;

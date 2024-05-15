import { useEffect, useState } from "react";
import { TheamContextProvider } from "./context/Theam";
import Cardbtn from "./components/Cardbtn";
import Card from "./components/Card";

function App() {
  const [TheamMode, setTheamMode] = useState("light");

  const DarkMode = (e) => {
    setTheamMode("dark");
  };

  const LightMode = (e) => {
    setTheamMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");

    document.querySelector("html").classList.add(TheamMode);
  }, [TheamMode]);

  return (
    <TheamContextProvider value={{ TheamMode, DarkMode, LightMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Cardbtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </TheamContextProvider>
  );
}

export default App;

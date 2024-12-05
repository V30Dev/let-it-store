import { useState } from "react";
import "./App.css";

type Option = "materials" | "weapons" | "armor";

const App = () => {  
  const [option, setOption] = useState<Option>("materials")

  return (
    <>
      <section className="">
        <h1>Let It Die Inventory</h1>
        <nav className="flex items-center justify-center gap-6 my-10">
          <button onClick={()=>setOption("materials")}>Materials</button>
          <button onClick={()=>setOption("weapons")}>Weapons</button>
          <button onClick={()=>setOption("armor")}>Armor</button>
        </nav>                
      </section>
      <section className="max-w-[1300px] bg-[#1a1a1a] w-full">
        <img src="Cotton.webp" alt="Cotton card" />
      </section>
    </>
  );
}

export default App;

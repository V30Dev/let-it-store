import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Home from "./pages/Home.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import Blueprints from "./pages/Blueprints.tsx";
import Materials from "./pages/Materials.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route index element={<Home/>} />
          <Route path="/blueprints" element={<Blueprints/>} />
          <Route path="/materials" element={<Materials/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

import NavComp from "./components/NavComp/NavComp";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "leaflet/dist/leaflet.css";
import "devices.css/dist/devices.min.css";

  const MainPage = lazy(() => import("./pages/MainPage/MainPage"));

export default function App() {

  return (
    <>
      <NavComp />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

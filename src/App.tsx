import NavComp from "./components/NavComp/NavComp";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "leaflet/dist/leaflet.css";
import "devices.css/dist/devices.min.css";
import BannerPage from "./pages/BannerPage/MainPage";

  const MainPage = lazy(() => import("./pages/MainPage/MainPage"));

export default function App() {

  return (
    <>
      <NavComp />
      <BannerPage />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

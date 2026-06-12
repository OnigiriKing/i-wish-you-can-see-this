import NavComp from "./components/NavComp/NavComp";
import BannerPage from "./pages/BannerPage/MainPage";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "leaflet/dist/leaflet.css";
import "devices.css/dist/devices.min.css";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const LegalPage = lazy(() => import("./pages/LegalPage/LegalPage"));
const GuidelinesPage = lazy(
  () => import("./pages/GuidelinesPage/GuidelinesPage"),
);
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));

export default function App() {

  return (
    <>
      <NavComp />
      <BannerPage />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/guidelines" element={<GuidelinesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeIndexPage from "./pages/HomeIndexPage.jsx";
import DefaultLayout from "./layouts/DefaultLayout";
import ShowMoviePage from "./pages/ShowMoviePage.jsx";
import AboutUs from "./pages/AboutUs.jsx";

// IMPORTS

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<AboutUs />} />

            <Route path="/movies" element={<HomeIndexPage />} />
            <Route path="/movies/:id" element={<ShowMoviePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

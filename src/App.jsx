import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import Header from "./components/header/Header";
import { Toaster } from "react-hot-toast";

// Pages
import HomePage from "./pages/home/HomePage";
import TrendingDetailedPage from "./pages/trending/TrendingDetailedPage";
import MovieDetailedPage from "./pages/movie/MovieDetailedPage";
import HorrorDetailedPage from "./pages/horror/HorrorDetailedPage";
import NotFoundPage from "./pages/notfound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="trending/:id" element={<TrendingDetailedPage />} />
        <Route path="movie/:id" element={<MovieDetailedPage />} />
        <Route path="horror/:id" element={<HorrorDetailedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

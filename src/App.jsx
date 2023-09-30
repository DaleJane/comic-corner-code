import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/home/Home";
import Editions from "./components/editions/Editions";
import AboutUs from "./components/aboutUs/AboutUs";
import BzzzzPage from "./components/bzzzz-page/BzzzzPage";
import ErrorPage from "./components/errorPage/ErrorPage";
import BzzzzArticle from "./components/bzzzz-page/bzzzz-article/BzzzzArticle";
import Impresum from "./components/impresum/Impresum";
import SingleComic from "./components/single comic/SingleComic";
import AppLayout from "./components/header/headerFooterHolder/AppLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="editions/:edition" element={<Editions />}></Route>
      <Route path="aboutus" element={<AboutUs />}></Route>
      <Route path="bzzz-page" element={<BzzzzPage />}></Route>
      <Route path="bzzz-page/article" element={<BzzzzArticle />} />
      <Route path="impresum" element={<Impresum />}></Route>
      <Route
        path="editions/:edition/single-comic/:comic"
        element={<SingleComic />}
      ></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Route>
  )
);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

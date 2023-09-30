import React from "react";
import Bzzzz from "../bzzzz/Bzzzz";
import GroupComics from "./Group_comics/GroupComics";
import "./home.scss";
import ImageSlider from "./image_slider/ImageSlider";
import LogoSlider from "./logo_slider/LogoSlider";

function Home() {
  return (
    <div id="home">
      <ImageSlider></ImageSlider>
      <LogoSlider></LogoSlider>
      <GroupComics></GroupComics>
      <Bzzzz></Bzzzz>
    </div>
  );
}

export default Home;

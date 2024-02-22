/* eslint-disable */
import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./logoSlider.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useDispatch } from "react-redux";
import {
  filterHero,
  resetAllComics,
} from "../../../app/features/slices/comicsSlice";

import logoslide1 from "../../../assets/logoslider/logomali1.png";
import logoslide2 from "../../../assets/logoslider/logomali2.png";
import logoslide3 from "../../../assets/logoslider/logomali3.png";
import logoslide4 from "../../../assets/logoslider/logomali4.png";
import logoslide5 from "../../../assets/logoslider/logomali5.png";
import logoslide6 from "../../../assets/logoslider/logomali6.png";
import logoslide7 from "../../../assets/logoslider/logomali7.png";
import logoslide8 from "../../../assets/logoslider/logomali8.png";
import logoslide9 from "../../../assets/logoslider/logomali9.png";
import logoslide10 from "../../../assets/logoslider/logomali10.png";
import logoslide11 from "../../../assets/logoslider/logomali11.png";
import logoslide12 from "../../../assets/logoslider/logomali12.png";
import logoslide13 from "../../../assets/logoslider/logomali13.png";
import logoslide14 from "../../../assets/logoslider/logomali14.png";
import logoslide15 from "../../../assets/logoslider/logomali15.png";

export default function LogoSlider() {
  const dispatch = useDispatch();

  return (
    <div id="second">
      <Swiper
        breakpoints={{
          200: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="logo-slider">
            <Link
              to="/editions/hero=Zagor"
              onClick={() => dispatch(filterHero("Zagor"))}
            >
              <img src={logoslide15} alt="logo1" />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="logo-slider">
            <Link
              to="/editions/hero=Ciko"
              onClick={() => dispatch(filterHero("Ciko"))}
            >
              <img src={logoslide3} alt="logo4" />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="logo-slider">
            <Link
              to="/editions/hero=Leo_Palp"
              onClick={() => dispatch(filterHero("Leo Palp"))}
            >
              <img src={logoslide8} alt="logo9" />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="logo-slider">
            <Link
              to="/editions/hero=Talicni"
              onClick={() => dispatch(filterHero("Talicni Tom"))}
            >
              <img src={logoslide13} alt="logo13" />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="logo-slider">
            <Link
              to="/editions/all-comics"
              onClick={() => dispatch(resetAllComics())}
            >
              <img src={logoslide2} alt="logo2" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logo-slider">
            <Link
              to="/editions/all-comics"
              onClick={() => dispatch(resetAllComics())}
            >
              <img src={logoslide4} alt="logo3" />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="logo-slider">
            <Link
              to="/editions/all-comics"
              onClick={() => dispatch(resetAllComics())}
            >
              <img src={logoslide5} alt="logo5" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logo-slider">
            <Link
              to="/editions/all-comics"
              onClick={() => dispatch(resetAllComics())}
            >
              <img src={logoslide6} alt="logo6" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="logo-slider">
            <Link
              to="/editions/all-comics"
              onClick={() => dispatch(resetAllComics())}
            >
              <img src={logoslide7} alt="logo7" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="logo-slider"
            onClick={() => dispatch(resetAllComics())}
          >
            <Link to="/editions/all-comics">
              <img src={logoslide9} alt="logo8" />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="logo-slider"
            onClick={() => dispatch(resetAllComics())}
          >
            <Link to="/editions/all-comics">
              <img src={logoslide11} alt="logo10" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="logo-slider"
            onClick={() => dispatch(resetAllComics())}
          >
            <Link to="/editions/all-comics">
              <img src={logoslide12} alt="logo11" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="logo-slider"
            onClick={() => dispatch(resetAllComics())}
          >
            <Link to="/editions/all-comics">
              <img src={logoslide14} alt="logo12" />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="logo-slider"
            onClick={() => dispatch(resetAllComics())}
          >
            <Link to="/editions/all-comics">
              <img src={logoslide1} alt="logo14" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="logo-slider"
            onClick={() => dispatch(resetAllComics())}
          >
            <Link to="/editions/all-comics">
              <img src={logoslide10} alt="logo15" />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

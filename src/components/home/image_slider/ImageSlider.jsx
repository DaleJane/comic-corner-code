/* eslint-disable */
import { React } from "react";
import { Link } from "react-router-dom";
import "./imageSlider.scss";
import img1 from "../../../assets/sliderimg/img1.jpg";
import img2 from "../../../assets/sliderimg/img2.jpg";
import img3 from "../../../assets/sliderimg/img3.jpg";
import img4 from "../../../assets/sliderimg/img4.jpg";
import img5 from "../../../assets/sliderimg/img5.jpg";
import img6 from "../../../assets/sliderimg/img6.jpg";
import img7 from "../../../assets/sliderimg/img7.jpg";
import img8 from "../../../assets/sliderimg/img8.jpg";
import img9 from "../../../assets/sliderimg/img9.jpg";
import img10 from "../../../assets/sliderimg/img10.jpg";
import {
  filterComics,
  filterHero,
} from "../../../app/features/slices/comicsSlice";
import { useDispatch } from "react-redux";

// import { allComics } from "../../../dataAll";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ImageSlider() {
  const dispatch = useDispatch();
  return (
    <div id="first">
      <Swiper
        className="mySwiper"
        // touchEventsTarget={container}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="omotac-slike">
            <img src={img9} alt="Zagor2" />
            <div className="text">
              <h4>Zagor #188</h4>
              <h1>Mutantova kci</h1>
              <div className="buttons">
                <div className="button-one-circle">
                  <Link to="/">DETALJNIJE</Link>
                </div>
                <div
                  className="button-two-circle"
                  onClick={() => dispatch(filterHero("Zagor"))}
                >
                  <Link to="editions/hero=Zagor">SVA IZDANJA U EDICIJI</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="omotac-slike">
            <img src={img10} alt="tex" />

            <div className="text">
              <h4>Tex #77</h4>
              <h1>Ponocni starac</h1>
              <div className="buttons">
                <div className="button-one-circle">
                  <Link to="/">DETALJNIJE</Link>
                </div>
                <div className="button-two-circle">
                  <Link to="/">SVA IZDANJA U EDICIJI</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="omotac-slike">
            <img src={img2} alt="2" />
            <div className="text">
              <h4>Bilblioteka Dampir, knjiga 4</h4>
              <h1>epizode 50-52</h1>
              <div className="buttons">
                <div className="button-one">
                  <Link to="/">DETALJNIJE</Link>
                </div>
                <div className="button-two">
                  <Link to="/">SVA IZDANJA U EDICIJI</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="omotac-slike">
            <img src={img3} alt="3" />
            <div className="text">
              <h4>Dilan Dog #188</h4>
              <h1>Bolest M</h1>
              <div className="buttons">
                <div className="button-one-circle">
                  <Link to="/">DETALJNIJE</Link>
                </div>
                <div className="button-two-circle">
                  <Link to="/">SVA IZDANJA U EDICIJI</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="omotac-slike">
            <img src={img4} alt="4" />
            <div className="text">
              <h4>Dilan Dog - Super book #62</h4>
              <h1>
                Likantropija /<br />
                Za jednu ruzu
              </h1>
              <div className="buttons">
                <div className="button-one">
                  <Link to="/">DETALJNIJE</Link>
                </div>
                <div className="button-two">
                  <Link to="/">SVA IZDANJA U EDICIJI</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="omotac-slike">
            <img src={img5} alt="5" />
            <div className="text">
              <h4>Bilblioteka Dragonero, knjiga 4</h4>
              <h1>epizode 13-16</h1>
              <div className="buttons">
                <div className="button-one">
                  <Link to="/">DETALJNIJE</Link>
                </div>
                <div className="button-two">
                  <Link to="/">SVA IZDANJA U EDICIJI</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="omotac-slike">
            <img src={img6} alt="6" />
            <div className="text">
              <h4>Marti Misterija #62</h4>
              <h1>Filozofsko drvo</h1>
              <div className="buttons">
                <div className="button-one">
                  <Link to="/">DETALJNIJE</Link>
                </div>
                <div className="button-two">
                  <Link to="/">SVA IZDANJA U EDICIJI</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="omotac-slike">
            <img src={img7} alt="7" />
            <div className="text">
              <h4>Mister No #85</h4>
              <h1>U potrazi za Kamanauom</h1>
              <div className="buttons">
                <div className="button-one">
                  <Link to="/">DETALJNIJE</Link>
                </div>
                <div className="button-two">
                  <Link to="/">SVA IZDANJA U EDICIJI</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="omotac-slike">
            <img src={img1} alt="2" />
            <div className="text-right">
              <h4>Veliki Teks u boji</h4>
              <h1>knjiga 3</h1>
              <div className="buttons">
                <div className="button-one">
                  <Link to="/">DETALJNIJE</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="omotac-slike">
            <img src={img8} alt="8" />
            <div className="text">
              <h4>Zagor - Specijal #34</h4>
              <h1>Lesinarev Vrh</h1>
              <div className="buttons">
                <div className="button-one">
                  <Link to="/">DETALJNIJE</Link>
                </div>
                <div
                  className="button-two"
                  onClick={() => dispatch(filterComics("Zagor specijal"))}
                >
                  <Link to="editions/hero=Zagor_Zagor_specijal">
                    SVA IZDANJA U EDICIJI
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageSlider;

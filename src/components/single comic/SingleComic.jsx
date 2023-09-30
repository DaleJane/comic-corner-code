import React, { useState, useEffect } from "react";
import "./singleComic.scss";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from "swiper/modules";
import "swiper/css/bundle";
import { useSelector } from "react-redux";
import { allComics } from "../../app/data/dataAll";

export default function SingleComic() {
  const arrayForSort = [...allComics];
  const dataSingle = useSelector((state) => state.comics.singleComic);
  const { comic } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [scrollSc, setScrollSc] = useState(false);
  const [closeOpis, setCloseOpis] = useState(false);
  // const [ran, setRan] = useState(arrayForSort.sort(() => Math.random() - 0.5));
  const [ran, setRan] = useState(arrayForSort);

  useEffect(() => {
    setRan(arrayForSort.sort(() => Math.random() - 0.5));
    // console.log(ran);
  }, []);

  const toggler = () => {
    setCloseOpis((prev) => !prev);
  };

  const moveText = () => {
    if (window.scrollY <= 300) {
      setScrollSc(false);
    }
    if (window.scrollY > 300) {
      setScrollSc(true);
    }
  };

  window.onscroll = () => {
    moveText();
  };

  return (
    <div className="single-comic-wrapper">
      <div className="sc-holder">
        <div className="single-comic-gallery">
          <Swiper
            id="mySwiper-comics"
            modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
          >
            {dataSingle.map((slide, index) => (
              <SwiperSlide id="main-pic" key={index}>
                <div className="sc-pic">
                  <img src={slide} alt={index} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            id="mySwiper-thumb"
            modules={[Thumbs]}
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            spaceBetween={3}
            slidesPerView={4}
          >
            {dataSingle.map((thumb, index) => (
              <SwiperSlide id="main-thumb" key={index}>
                <div className="sc-thumb">
                  <img src={thumb} alt={index} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="single-comic-text">
          <div
            className={scrollSc === true ? "sc-text-absolute" : "sc-text-fixed"}
          >
            <div></div>
            <h1>
              {dataSingle[6]} - {dataSingle[5]}
              <br />
              {dataSingle[4]}
            </h1>
            <div>
              <p>
                datum objavljivanja: <strong>13. 10. 2022.</strong>
              </p>
              <p>
                naslovna strana: <strong>Galijeno Feri</strong>
              </p>
              <p>
                tekst: <strong>Moreno Buratini</strong>
                <br />
                crtež: <strong>Marko Verni</strong>
              </p>
              <p>
                broj originala: <strong>Zagor Gigante 2</strong>
                <br />
                naslov originala: <strong>L'uomo che sconfisse la morte</strong>
              </p>
            </div>
            <div className="sc-text-description-holder">
              <div className="sc-text-description">
                <div className="sc-separator"></div>
                <div onClick={toggler} className="opis">
                  <div>
                    <span
                      className={
                        closeOpis === true
                          ? "sc-opis-span"
                          : "sc-opis-span-active"
                      }
                    >
                      OPIS
                    </span>
                  </div>
                  <div
                    className={
                      closeOpis === true
                        ? "sc-arrow-rotate-close"
                        : "sc-arrow-rotate-open"
                    }
                  >
                    <span className="sc-arrow">
                      <i className="fa-solid fa-angle-up"></i>
                    </span>
                  </div>
                </div>
                <div className="scroll-wrapper">
                  <div
                    id="scroll"
                    className={
                      closeOpis === true ? "sc-opis-closed" : "sc-opis"
                    }
                  >
                    <p>
                      Stari neprijatelj za koga se verovalo da je preminuo vraća
                      se iz sveta mrtvih sa tvrdnjom da ga je Veliki Duh odabrao
                      za novog vođu darkvudskih plemena i da je njegov povratak
                      u svet živih dokaz za to. U dramatičnom dvoboju naočigled
                      svih šumskih poglavica Zagor je poražen na
                      najneverovatniji način. Ali nešto što se odigralo u davnoj
                      prošlosti uticaće i na sadašnjost…
                    </p>
                    <p>
                      Crno na belo, pred vama je epizoda naizgled čudnog
                      naslova. Međutim, kao što iz prošlog broja već znate, a
                      kako će vam iz ovog tek biti jasno, reč je o večitoj temi
                      Divljeg zapada - odnosima ljudi različite boje kože. Ovde
                      se taj odnos dodatno komplikuje i onemogućava da se bele i
                      crne klavirske dirke uklope jedna uz drugu. Zvuči poznato?
                      Naravno! Ne tako davno, pre samo godinu dana, u okviru
                      naše{" "}
                    </p>
                    <p>
                      Stari neprijatelj za koga se verovalo da je preminuo vraća
                      se iz sveta mrtvih sa tvrdnjom da ga je Veliki Duh odabrao
                      za novog vođu darkvudskih plemena i da je njegov povratak
                      u svet živih dokaz za to. U dramatičnom dvoboju naočigled
                      svih šumskih poglavica Zagor je poražen na
                      najneverovatniji način. Ali nešto što se odigralo u davnoj
                      prošlosti uticaće i na sadašnjost…
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="related-products">
        <h3 className="related-products-title">POGLEDAJTE I OVA IZDANJA...</h3>
        <div className="related-products-preview container-fluid">
          <div className="row">
            {ran &&
              ran.slice(100, 104).map((previewComic, index) => (
                <div
                  className="related-center col-6 col-sm-4 col-md-3"
                  key={previewComic.id}
                >
                  <div className="related-products-comics">
                    <div className="related-pic-div">
                      <Link to="/">
                        <img src={previewComic.img[0]} alt={index} />
                      </Link>
                    </div>

                    <h3>
                      <Link to="/" className="related-comic-heading">
                        {previewComic.edition}
                        <br />
                        {previewComic.episode}
                      </Link>
                    </h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

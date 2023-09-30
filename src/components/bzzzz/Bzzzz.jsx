/* eslint-disable */
import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./bzzzz.scss";
import bzzzLogoLarge from "../../assets/bzzzsection/bzzzlogolarge.png";
import zsReview from "../../assets/bzzzsection/zszanaslovnuhires.jpg";
import zsLogo from "../../assets/bzzzsection/zslogo2.png";
import ddPlanetaMrtvih from "../../assets/bzzzsection/ddplanetamrtvihlogoinvert.png";
import ddComic from "../../assets/bzzzsection/ddcomicbzzz.jpg";
import treciDan from "../../assets/bzzzsection/trecidancomic.jpg";
import medjuvreme from "../../assets/bzzzsection/medjuvremelogo.png";
import odabraneLogo from "../../assets/bzzzsection/odabraneprice.png";
import odComic from "../../assets/bzzzsection/odabranecomic.jpg";
import obojeniComic from "../../assets/bzzzsection/obojenicomic.jpg";
import obojeniLogo from "../../assets/bzzzsection/obojeniprogramlogo.png";
import { filterComics } from "../../app/features/slices/comicsSlice";
import { useDispatch } from "react-redux";

export default function Bzzzz() {
  const dispatch = useDispatch();

  const toTopScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <div className="bzzz-wrapper">
      <div className="bzzz-div">
        <div className="bzzz-div-img-holder">
          <Link to="/bzzz-page" onClick={toTopScroll}>
            <img src={bzzzLogoLarge} alt="bzzz logo large" />
          </Link>
        </div>
      </div>
      <div className="zlatna-serija-div">
        <div className="zs-first">
          <img src={zsReview} alt="sz review" />
        </div>

        <div className="zs-second">
          <div className="zs-logo">
            <img src={zsLogo} alt="sz review logo" />
          </div>

          <div>
            <div className="zs-text">
              <div>
                <div className="zs-serial-number">
                  <h1>39. broj</h1>
                </div>
                <h4>Dilan Dog</h4>
                <h2>
                  Iz moje krvi / Bozja <br />
                  sahovska tabla
                </h2>
              </div>

              <p>
                Tekst: <strong>Alberto Ostini</strong> <br />
                crtez: <strong>Djulio Kamanji/Djordjo Pontreli</strong>
              </p>
              <p></p>
              <p>
                naslovna strana: <br />
                korica A: <strong>Bruno Brindizi</strong> <br />
                korica B: <strong>Jana Adamovic</strong>
              </p>
              <div className="zs-buttons">
                <div className="zs-gray">
                  <Link to="/">KORICA A</Link>
                </div>
                <div className="zs-gray">
                  <Link to="/">KORICA B</Link>
                </div>
                <div
                  className="zs-orange"
                  onClick={() => dispatch(filterComics("Zlatna serija"))}
                >
                  <Link to="/editions/edition=Zlatna_Serija">
                    SVA IZDANJA U EDICIJI
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dilan-dog-div">
        <div className="dilan-dog-first">
          <div className="dd-logo-div">
            <img src={ddPlanetaMrtvih} alt="dilan-logo" />
          </div>
          <div className="dilan-dog-info">
            <p>
              Da li ce i dalje postojati potreba za istrazivanjem nocnih mora u
              buducnosti u kojoj uzas postaje sastavni deo svakodnevnice?
            </p>
            <p>
              <strong>Mozda vise nego ikada.</strong>
            </p>
            <p>
              broj 7 | <strong> Smeh ce vas dici iz mrtvih</strong> <br />
              tekst: <strong>Aleksandro Bilota</strong> | crtez:{" "}
              <strong>Serdjo Djerazi</strong>
            </p>
            <div className="dd-buttons">
              <div className="dd-gray">
                <Link to="/">DETALJNIJE</Link>
              </div>
              <div className="dd-orange">
                <Link to="/">SVA IZDANJA U EDICIJI</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dilan-dog-second">
          <div className="dd-logo-wrapper">
            <img src={ddComic} alt="dd-comic" />
          </div>
        </div>
      </div>
      <div className="medjuvreme-div">
        <div className="medjuvreme-first">
          <img src={treciDan} alt="treci dan comic" />
        </div>
        <div className="medjuvreme-second">
          <div>
            <div>
              <p>
                <strong>Medjuvreme | knjiga 3</strong>
              </p>
            </div>
            <div>
              <h4>Treci dan</h4>
            </div>
          </div>
          <div className="medjuvreme-info">
            <div>
              {" "}
              <div className="medjuvreme-info-logo-wrapper">
                <div>
                  <p>
                    Troje kriminalaca beže glavom bez obzira tokom jednog kišnog
                    dana. Savršena postavka za gangsterski film, zajedno sa
                    jurnjavom kolima i sumanutom pucnjavom. Ili možda ovo ipak
                    nije takva priča? Duž tih blatnjavih cesta uz obalu
                    podmuklog mora, čak i najbeskrupulozniji bandit može se
                    suočiti s nečim što će se ispostaviti prevelikim zalogajem,
                    nečim drevnim i zlim, što vreba iz tmine…
                  </p>
                  <p>
                    tekst: <strong>Izak Fridl</strong> i{" "}
                    <strong>Marko Nuci</strong> | crtez:{" "}
                    <strong>Stevan Subic</strong>
                  </p>
                </div>
                <div className="medjuvreme-img-div d-none d-lg-block">
                  <img src={medjuvreme} alt="medjuvreme logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="medj-buttons">
            <div>
              <div className="medj-gray">
                <Link to="/">DETALJNIJE</Link>
              </div>

              <div
                className="medj-orange"
                onClick={() => dispatch(filterComics("Medjuvreme"))}
              >
                <Link to="/editions/edition=Medjuvreme">
                  SVA IZDANJA U EDICIJI
                </Link>
              </div>
            </div>

            <div className="medjuvreme-img-div d-block  d-md-none">
              <img src={medjuvreme} alt="medjuvreme logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="odabrane-price-div">
        <div className="od-first">
          <div className="od-logo">
            <img src={odabraneLogo} alt="odabrane price logo" />
          </div>
          <div className="od-info">
            <p>
              broj 61 | <strong>Tajna ostrva</strong>
              <br />
              tekst: <strong>Moreno Buratini</strong> | crtez:{" "}
              <strong>Alesandro Kjarola</strong>
            </p>
            <p></p>
            <p>
              Strahovita oluja bacila je Zagora, Čika i ostale brodolomnike na,
              reklo bi se, napušteno ostrvo. Ali šta se krije među gustim
              zelenilom unutrašnjosti ostrva? Ko ispušta jezive zvuke iz krošnji
              drveća? Toliko je nerazjašnjenih stvari i opasnosti koje vrebaju
              Duha sa Sekirom i njegove prijatelje… Kopno za koje su mislili da
              je njihov spas ispostavlja se kao užasavajuća pretnja!
            </p>

            <div className="od-buttons">
              <div className="od-gray">
                <Link to="/">DETALJNIJE</Link>
              </div>
              <div
                className="od-orange"
                onClick={() => dispatch(filterComics("Odabrane Price"))}
              >
                <Link to="editions/hero=Zagor_Odabrane_price">
                  SVA IZDANJA U EDICIJI
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="od-second">
          <div className="od-comic-wrapper">
            <img src={odComic} alt="odabrane price comic" />
          </div>
        </div>
      </div>
      <div className="obojeni-program-div">
        <div className="ob-first">
          <div className="obojeni-img-wrapper">
            <img src={obojeniComic} alt="obojeni program logo" />
          </div>
        </div>
        <div className="ob-second">
          <div className="ob-logo-holder">
            <img src={obojeniLogo} alt="obojeni program logo" />
          </div>
          <div className="ob-program-text">
            <p>
              broj 57 | <strong>Marti Misterija</strong>
              <br />
              <strong>Pad Agartija</strong>
              <br />
              tekst: <strong>Misterijanci</strong>
              <br />
              crtez:
              <strong>
                Djulio Djordano | Karlo Pju | Karlo Veraldi | Salvatore Kufari
              </strong>
              <br />
              boja: <strong>Danijele Rudoni</strong> |{" "}
              <strong>Eliza Zkvanci</strong>
              <br />
              broj originala: <strong>10</strong>
              <br />
              naslov originala: <strong>La caduta di Agarthi</strong>
            </p>
          </div>
          <div className="ob-buttons">
            <div className="ob-gray">
              <Link to="/">DETALJNIJE</Link>
            </div>

            <div
              className="ob-orange"
              onClick={() => dispatch(filterComics("Obojeni program"))}
            >
              <Link to="/editions/edition=Obojeni_Program">
                SVA IZDANJA U EDICIJI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

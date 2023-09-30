import React from "react";
import { Link } from "react-router-dom";
import "./aboutUs.scss";
import tajnasumera from "../../assets/onama/onama7.jpg";
import crnobela from "../../assets/onama/onama1.jpg";
import trafika from "../../assets/onama/onama6.png";
import alanford from "../../assets/onama/onama8.png";
import darkwood from "../../assets/onama/onama4.png";
import carobna from "../../assets/onama/onama2.png";
import nasilje from "../../assets/onama/onama3.jpg";

function AboutUs() {
  return (
    <div className="onama-holder">
      <div className="onama-naslovna-div">
        <div className="naslovna-div-content">
          <h5>Jos od 7.januara 2008. godine...</h5>
          <div>
            <h4>
              Svaki cetvrtak mora <br /> biti veseo!
            </h4>
          </div>
          <div>
            <h5>
              To je naša misija već četrnaest godina i nemamo nameru od <br />{" "}
              nje da odustanemo.
            </h5>
          </div>
        </div>
      </div>
      {/*MAIN CONTENT AREA*/}
      <div>
        <div className="onama-main">
          <div className="onama-main-central">
            <div>
              <h4>Prvi strip</h4>
            </div>

            <div className="em">
              <em>
                Sve je počelo „Tajnom Sumera”, prvim brojem redovne edicije{" "}
              </em>
              <span>Zagor. </span>
              <em>
                Mali broj čitalaca tada je mogao i sanjati da će novi izdavač,
                nakon bezuspešnih pokušaja drugih tokom minule decenije i po,
                opstati duže od zlokobnih sedam-osam brojeva, a kamoli da će
                šeststo i obilan kusur četvrtaka kasnije hrliti u susret svom
                hiljaditom izdanju.
              </em>
            </div>
            <div className="onama-text-pic">
              <div className="onama-text">
                <p>
                  Te davne 2008. godine, scenom je tiho vladala sumorna
                  atmosfera pesimističke pomirenosti sa slutnjom da se stripovi
                  nikada neće uistinu vratiti na kioske, da je to jednostavno
                  ideja iz nekog drugog, davno prošlog vremena iliti (
                  <em>nekog drugog kad</em>
                  ), relikt blistave prošlosti koje se sa setom sećamo.
                  Opšteprihvaćen je bio stav da dragi junaci kao što su Zagor,
                  Dilan Dog, Mister No, Marti Misterija i Teks u Srbiji nikada
                  više neće biti čitani, te da je budućnost stripa u
                  niskotiražnim, skupim i, samim tim, ne naročito lako dostupnim
                  izdanjima za knjižare. Godine su proletele, ali jedna stvar se
                  nije promenila - vratili smo trajno strip na kioske i
                  nastavili da dajemo sve od sebe kako bismo srušili mit o
                  stripovima kao prevaziđenom ili neozbiljnom obliku kulture i
                  umetnosti. Trudimo se da po najpopularnijim mogućim cenama na
                  kontinentu i uz pristup izdanjima koji ruši stereotip o stripu
                  kao niskokvalitetnoj zabavi ponudimo širok opseg naslova što
                  je moguće većem broju potencijalnih čitalaca. Dokazali smo:
                  stripovi nisu prevaziđeni. Naprotiv. Oni su danas svežiji,
                  snažniji i neophodniji nego ikada pre!
                </p>
              </div>
              <div className="onama-pic">
                <img src={tajnasumera} alt="Zagor#1" />
              </div>
            </div>

            <div className="separator"></div>
          </div>
        </div>
        <div className="black-and-white-div">
          <div className="black-and-white-pic">
            <img src={crnobela} alt="black and white" />
          </div>
        </div>
        <div className="staro-novo">
          <div className="staro-novo-naslov">
            <h4>Stare ili nove price?</h4>
          </div>
          <div className="staro-novo-text">
            <div className="staro-novo-paragraf">
              <p>
                Probranom društvu junaka pridružila su se i neka nova lica:
                Dampir, Bred Beron, Leo Palp, Dragonero, Napoleon, ali i neki iz
                stare garde, poput Komandanta Marka i Taličnog Toma. Noseći
                likovi proširili su horizont avanture i na svoje dopunske
                edicije (
                <em>
                  Zagor Odabrane priče, Dilan Dog Super book, Zagor Specijal,
                  Dilan Dog Planeta mrtvih
                </em>
                ), ali uporedo s kiosk izdanjima, koja su bila i ostala kičma
                našeg izdavačkog programa, počeli smo povremeno da objavljujemo
                i pristupačna specijalna izdanja namenjena čitaocima
                zainteresovanim za slavne početke. Kroz njih hronološki pratimo
                pustolovine naših omiljenih heroja, počev od onih najranijih, u
                kojima su se još tražili, ne ličeći baš sasvim na one verzije
                sebe koje pamtimo. Ne smemo zaboraviti ni posebna kolekcionarska
                izdanja: kultne stripove koji kvalitetom priče i crteža iskaču
                iz standardnih okvira, dela koja potpisuju velemajstori devete
                umetnosti - sve to u luksuznom ruhu.
              </p>
            </div>
          </div>

          <div className="vc-staro-video">
            <div className="container staro-video-first">
              <div className="ratio ratio-16x9">
                <iframe
                  // width="550"
                  // height="310"
                  src="https://www.youtube.com/embed/BrWB22JqV_I"
                  title="YouTube video player"
                  // frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="container">
              <div className="ratio ratio-16x9">
                <iframe
                  // width="550"
                  // height="310"
                  src="https://www.youtube.com/embed/GZndP3_eAUc"
                  title="YouTube video player"
                  // frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="najpopularnije">
          <div className="najpopularnije-naslov">
            <h4>Šta je najpopularnije?</h4>
          </div>
          <div className="najpopularnije-text">
            <div className="najpopularnije-paragraf">
              <p>
                Evolucijom izdavačkog iskustva i čitalačkih apetita stigli smo i
                do naših najpopularnijih edicija - kolekcionarske{" "}
                <em>Biblioteke Obojeni program, </em>
                koja donosi kolorne priče (ne naknadno bojene stare, već potpuno
                nove, moderno ispripovedane i često „eksperimentalne”), te do
                najdražeg dragulja naše produkcije - <em>Zlatne serije!</em> U
                čast istoimene legendarne edicije, na pedesetogodišnjicu njenog
                rođenja pokrenuli smo novu, <em>Zlatnu seriju</em> za XXI vek,
                koja ne beži od uticaja svoje starije sestre, ali kroz izdavačke
                vode svakako pliva nekim drugim, sopstvenim putem. U duhu
                tradicije koju je negovala stara <em>Zlatna serija</em>, od
                broja do broja pažljivo kombinujemo do sada neobjavljene
                avanture svima omiljenih junaka s reprizama njihovih
                najčuvenijih priča; to „presečemo” novim, zanimljivim i
                kvalitetnim serijalima kao što su{" "}
                <em>Dedvud Dik, Priče iz baze „Drugde”</em> ili{" "}
                <em>Nejtan Never</em> - i tako dobijemo recept koji nijednog
                čitaoca ne ostavlja ravnodušnim. Kuriozitet naše{" "}
                <em>Zlatne serije</em> takođe su i sada već čuvene (ponekad i
                kontroverzne) alternativne korice svakog broja: naslovne strane
                koje ekskluzivno ilustruju najbolji domaći autori.
              </p>
            </div>
          </div>

          <div className="vc-najpopularnije-video">
            <div className="container staro-video-first">
              <div className="ratio ratio-16x9">
                <iframe
                  // width="550"
                  // height="310"
                  src="https://www.youtube.com/embed/_ajemgfb3jM"
                  title="YouTube video player"
                  // frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="container">
              <div className="ratio ratio-16x9">
                <iframe
                  // width="550"
                  // height="310"
                  src="https://www.youtube.com/embed/-5pA7d1mW4I"
                  title="YouTube video player"
                  // frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="gde-naci">
          <div className="gde-naci-naslov">
            <h4>Gde naći stripove?</h4>
          </div>
          <div className="gde-naci-text">
            <div className="gde-naci-paragraf">
              <p>
                Sva naša izdanja za kioske možete naći upravo tamo - na
                kioscima, onim koji drže do sebe. Nažalost, situacija s
                generalnom distribucijom takva je da se često ispostavlja kako
                naših izdanja nema baš na svim kioscima ili da se broj primeraka
                koji je do njih stigao brzo rasproda. U tom slučaju, propuštene
                brojeve možete poručiti pozivom na broj telefona našeg{" "}
                <strong>Kluba čitalaca</strong> (<strong>0118956325</strong>)
                ili slanjem mejla na adresu{" "}
                <strong>readersclub@bmail.com</strong> - svaki naručeni naslov
                dobićete s popustom od 20%.
                <br />
                Isti popust važi i u maloprodajnim objektima Trafika, kao i
                ukoliko bilo koje naše izdanje naručite putem njihovog sajta.
                Ali to nije sve! Stripove sa logotipom naše kuće (izdanja za
                kioske i kolekcionarska izdanja) pronaći ćete i u sledećim
                specijalizovanim knjižarama…
              </p>
            </div>
          </div>
          <div className="container gde-naci-logo-holder">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="comic-store-img">
                  <Link to="/">
                    <img src={trafika} alt="trafika-logo" />
                  </Link>
                </div>
                <div className="comic-store-img-title">
                  <p>Srbija</p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="comic-store-img">
                  <Link to="/">
                    <img src={alanford} alt="alanford-logo" />
                  </Link>
                </div>
                <div className="comic-store-img-title">
                  <p>Beograd</p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="comic-store-img">
                  <Link to="/">
                    <img src={darkwood} alt="darkwood-logo" />{" "}
                  </Link>
                </div>
                <div className="comic-store-img-title">
                  <p>Beograd</p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="comic-store-img">
                  <Link to="/">
                    <img src={carobna} alt="carobna-logo" />{" "}
                  </Link>
                </div>
                <div className="comic-store-img-title">
                  <p>Beograd</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container comics-location">
            <div className="row">
              <div className="loc col-12 col-md">
                <div className="comics-shop">
                  <Link to="/">
                    {" "}
                    <strong>Svet stripa</strong>
                  </Link>
                </div>
                <div className="comics-place">
                  <p>Kragujevac</p>
                </div>
              </div>

              <div className="loc col-12 col-md">
                <div className="comics-shop">
                  <Link to="/">
                    <strong>Juzni Darkwood</strong>{" "}
                  </Link>
                </div>
                <div className="comics-place">
                  <p>Nis</p>
                </div>
              </div>

              <div className="loc col-12 col-md">
                <div className="comics-shop">
                  <Link to="/">
                    {" "}
                    <strong>Bulevar Books</strong>
                  </Link>
                </div>
                <div className="comics-place">
                  <p>Novi Sad</p>
                </div>
              </div>

              <div className="loc col-12 col-md">
                <div className="comics-shop">
                  <Link to="/">
                    {" "}
                    <strong>Mister No</strong>
                  </Link>
                </div>
                <div className="comics-place">
                  <p>Podgorica</p>
                </div>
              </div>

              <div className="loc col-12 col-md">
                <div className="comics-shop">
                  <Link to="/">
                    {" "}
                    <strong>Tarantula</strong>
                  </Link>
                </div>
                <div className="comics-place">
                  <p>Mostar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container comics-location2">
            <div className="row">
              <div className="loc col-12 col-md">
                <div className="comics-shop">
                  <Link to="/">
                    <strong>Colosseum</strong>{" "}
                  </Link>
                </div>
                <div className="comics-place">
                  <p>Banja Luka</p>
                </div>
              </div>

              <div className="loc col-12 col-md">
                <div className="comics-shop">
                  <Link to="/">
                    <strong>Babilon</strong>{" "}
                  </Link>
                </div>
                <div className="comics-place">
                  <p>Djakovo</p>
                </div>
              </div>

              <div className="loc col-12 col-md">
                <div className="comics-shop">
                  <Link to="/">
                    <strong>Skolska knjiga</strong>{" "}
                  </Link>
                </div>
                <div className="comics-place">
                  <p>Hrvatska</p>
                </div>
              </div>

              <div className="loc col-12 col-md">
                <div className="comics-shop">
                  <Link to={"/"}>
                    {" "}
                    <strong>Oblacek</strong>
                  </Link>
                </div>
                <div className="comics-place">
                  <p>Celje</p>
                </div>
              </div>

              <div className="loc col-12 col-md">
                <div className="comics-shop">
                  <Link to="/">
                    {" "}
                    <strong>Bunker</strong>
                  </Link>
                </div>
                <div className="comics-place">
                  <p>Skoplje</p>
                </div>
              </div>
            </div>
          </div>
          <div className="kuda-dalje">
            <div className="kuda-dalje-naslov">
              <h4>Kuda dalje?</h4>
            </div>
            <div className="kuda-dalje-text">
              <div className="kuda-dalje-paragraf">
                <p>
                  E, to je zanimljivo pitanje. Nažalost, nemamo ni vremeplov, ni
                  kristalnu kuglu, stoga je teško predvideti šta nas čeka u
                  budućnosti (osim u slučaju <em>Zlatne serije</em>, tu imamo
                  jasan plan sve do 2030. godine), ali jedna stvar je sigurna:
                  uzbudljivih avantura neće nam manjkati! Uživajte u čitanju!
                </p>
              </div>
            </div>
            <div className="kuda-dalje-pic-div">
              <div className="kuda-dalje-pic">
                <img src={nasilje} alt="nasilje-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

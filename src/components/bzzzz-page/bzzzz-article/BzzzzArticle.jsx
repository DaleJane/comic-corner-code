import React from "react";
import "./bzzzzArticle.scss";
import { Link } from "react-router-dom";
import articlePic1 from "../../../assets/bzzzarticle/vcarticlebig.jpg";
import articlePic2 from "../../../assets/bzzzarticle/vcarticlebig2.jpg";
import articlePic3 from "../../../assets/bzzzarticle/articlecomic1.jpg";
import bzzzLogoLarge from "../../../assets/bzzzsection/bzzzlogolarge.png";
import misterComic1 from "../../../assets/obojeniprogram/bop44.jpg";
import misterComic2 from "../../../assets/obojeniprogram/bop48.jpg";
import misterComic3 from "../../../assets/obojeniprogram/bop54.jpg";

export default function BzzzzArticle() {
  return (
    <div className="bz-article">
      <div className="bzzz-page-div">
        <div className="bzzz-div-img-holder">
          <img src={bzzzLogoLarge} alt="bzzz logo large" />
        </div>
      </div>
      <div className="bz-article-wrapper">
        <div className="bz-article-pic">
          <h1>This is the end, beautiful friend?</h1>
          <p>
            <span className="span-autor">autor:</span> Milos Jovanovic
          </p>
          <img src={articlePic1} alt="mister-NOno" />
        </div>
        <div className="article-text">
          <p>
            „Meet the new boss, same as the old boss”, pevao je pre sada ravno
            pedeset godina Rodžer Daltri u kultnom hitu grupe <em>The Who</em> -
            „Won"t Get Fooled Again”. Ovaj stih je poslednji u pesmi koja govori
            o revolucijama, i o tome kako se, kada se sve to odigra i smiri, na
            kraju situacija u neku ruku vrati na staro.
          </p>
          <p>
            Mister Noova revolucija ne razlikuje se previše po tom pitanju. I
            ona je, evo, stigla do svog finiša, a na kraju nas je sačekalo isto
            ono što smo ugledali i kada smo prvi put podigli neku od pilotovih
            svezaka. Visok momak, crne kose sa dosta sedih, uredno obrijan, u
            pilotskoj jakni, njegov verni drug „zlatokosi Švabo”, što bi rekao
            Saša Lošić, i njegova voljena Patriša, koja traži drevne izgubljene
            gradove po džunglama Amazonije.
          </p>
          <p>I Manaus. Konačno, Manaus. U svoj divoti modernog strip-kolora.</p>
        </div>
        <div className="article-mix">
          <div className="article-mix-pic">
            <img src={articlePic3} alt="MisterNo in color" />
          </div>
          <div className="article-mix-text">
            <p>
              Znate, u ostatku univerzuma, kad čovek kaže Brazil, na šta prvo
              pomisli? Na Rio, Sao Paulo, sambu, fudbal. Na Toma Žobima,
              Sepulturu, Ratos de porao, Kopakabanu, Ipanemu. Na Romarija,
              Ronalda, Pelea, Oskara Šmita. Asocijacija je trista hiljada. Ali
              za mene, Brazil će uvek isprva biti Manaus, Amazonija, Rio Negro,
              Pantanal i ovaj momak sa detelinom na rukavu.
            </p>
            <p>
              Pre mnogo godina, u nekom drugom životu, imao sam prijatelja
              Brazilca. Zvao se Alešandre, radili smo u istoj firmi, i svako
              jutro bismo se sretali u autobusu. Nakon ko zna koliko jutara,
              prišao je da se upoznamo. Ja iz Beograda, on iz Rija. On o Srbiji
              zna da postoji, ja o Brazilu znam sve. I pita on mene: „A ti bi
              sigurno voleo da posetiš Brazil nekada?” „O, svakako”, odgovaram
              ja.
            </p>
            <ul>
              <li>Pa gde bi voleo da odeš?</li>
              <li>Kako gde, pa u Manaus.</li>
              <li>U Manaus?</li>
              <li>Jašta, u Manaus.</li>
              <li>Šta ćeš, kog vraga, u Manausu?</li>
            </ul>
            <p>
              E moj Alešandre, kako to misliš, šta ću kog vraga u Manausu! Pa u
              Manausu živi Mister No. Želim da vidim aerodrom, želim da vidim
              zgradu opere, želim da vidim one krčme i pijem kašasu (iliti
              „kačaku” kako su je fonetizovali u starim izdanjima{" "}
              <em>Lunovog magnus stripa</em>
              ). Ali više od svega, želim da vidim tu džunglu kojoj sam uvek ja
              morao da osmislim boje, jer je jedina Amazonija koja je dopirala
              do mene tih godina bila crnobela.
            </p>
          </div>
        </div>
        <div className="sada">
          <p>
            Sada, zahvaljujući triju Emilijano Mamukari - Mateo Kremona - Alesio
            Avalone, Amazonija živi na stranicama jedne <em>Mister Noove</em>
            sveske (ili albuma, kako vam milije). Nakon zelene džungle
            Vijetnama, te betonske džungle Njujorka i San Franciska, ona nama
            najmilija džungla oživela je u punom koloritu. Mikele Mazijero
            vratio je Mister Noa u njegov spiritualni dom, i tako zaokružio
            jedan, kako se ipak ispostavilo, „meki” reset omiljenog junaka.
          </p>
          <p>
            Jer, šta se na kraju zapravo promenilo? Priča je otišla dvadeset
            godina unapred. Drugi svetski rat je zamenjen za Vijetnamski, dobili
            smo malo Kalifornije u srednjem aktu, ali završilo se tamo gde smo
            se baš svi nadali. Na dokovima Manausa, uz flašu pića i osmeh kao
            lek za modrice. I starog dobrog Džerija Drejka, koji je i dalje
            spreman da se pobije za ono u šta veruje.
          </p>
        </div>
        <div className="bz-article-pic">
          <img src={articlePic2} alt="Boom boom" />
        </div>
        <div className="sada">
          <p>
            Da, Mazijero jeste uzeo nešto malo sloboda koje pokojni čika Serđo
            ne bi. Vidi se to u oštrini scenarija, čiji je jezik prilagođeniji
            eri (uz izuzetan, <em>no-holds-barred</em> prevod, koji ste imali
            priliku da okusite u prethodnim <em>Revolucijama</em>- svaki put kad
            vidim kako neko nekoga tera u tri lepe, da prostite, zaigra mi brk).
            Vidi se to i u nešto eksplicitnijim crtačkim rešenjima kojima se
            opet pribeglo. Ali <em>srce u junaka</em> ostalo je isto, i ja sam -
            a verujem i vi - srećan zbog toga.
          </p>
          <p>
            Da li će se „revolucija” nastaviti, i da li će ovo biti novi temelj
            nekog budućeg serijala? Ne znamo. Nemojte se opterećivati time, to
            nije u našim rukama. Uživajte u čitanju, gledajući u nikad zeleniju
            Amazoniju, i u još jednoj avanturi čoveka koji je sebe jednom opisao
            kao „svetskog prvaka u sanjanju, kralja idealista i cara kretena”.
          </p>
        </div>
        <div className="container-fluid bz-article-comics">
          <div className="row">
            <div className="col-6 col-md-4 bz-related-holder">
              <div className="bz-related-comic">
                <Link to="/single-comic">
                  <img src={misterComic1} alt="mister1" />
                </Link>
              </div>
              <h3>
                {" "}
                <Link to="*">
                  Biblioteka Obojeni program 44 <br />
                  Mister No Revolucija <br />
                  Vijetnam
                </Link>
              </h3>
            </div>
            <div className="col-6 col-md-4 bz-related-holder">
              <div className="bz-related-comic">
                <Link to="*">
                  <img src={misterComic2} alt="mister2" />
                </Link>
              </div>
              <h3>
                <Link to="*">
                  {" "}
                  Biblioteka Obojeni program 48 <br />
                  Mister No Revolucija <br />
                  Kalifornija
                </Link>
              </h3>
            </div>
            <div className="col-6 col-md-4 bz-related-holder">
              <div className="bz-related-comic">
                <Link to="*">
                  <img src={misterComic3} alt="mister3" />
                </Link>
              </div>
              <h3>
                <Link to="*">
                  {" "}
                  Biblioteka Obojeni program 44 <br />
                  Mister No Revolucija <br />
                  Amazonija
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="bz-article-separator"></div>
      </div>
    </div>
  );
}

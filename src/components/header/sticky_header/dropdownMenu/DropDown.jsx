/* eslint-disable */
import React, { useState, useContext } from "react";
import "./dropdown.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import ZagorDeepMenu from "./deepList/zagorDeepMenu/ZagorDeepMenu";
import DilandogDeepList from "./deepList/dilandogDeepMenu/DilandogDeepList";
import TexDeepList from "./deepList/texDeepMenu/TexDeepList";
import MartimisterijaDeepList from "./deepList/martimisterijaDeepMenu/MartimisterijaDeepList";
import MisterNoDeepList from "./deepList/misternoDeepMenu/MisterNoDeepList";
import DampirDeepList from "./deepList/dampirDeepMenu/DampirDeepList";
import DragoneroDeepList from "./deepList/dragoneroDeepMenu/DragoneroDeepList";
import NapoleonDeepList from "./deepList/napoleonDeepMenu/NapoleonDeepList";
import BredberonDeepMenu from "./deepList/bredberonDeepMenu/BredberonDeepList";
import KomandantmarkDeepList from "./deepList/komandantmarkDeepMenu/KomandantmarkDeepList";

import {
  filterHero,
  filterComics,
} from "../../../../app/features/slices/comicsSlice";

function DropDown({ listMenu, setListMenu }) {
  const [zagorDeepList, setZagorDeepList] = useState(false);
  const [dilandogDeepList, setDilandogDeepList] = useState(false);
  const [texDeepList, setTexDeepList] = useState(false);
  const [martiDeepList, setMartiDeepList] = useState(false);
  const [misternoDeepList, setMisternoDeepList] = useState(false);
  const [dampirDeepList, setDampirDeepList] = useState(false);
  const [dragoneroDeepList, setDragoneroDeepList] = useState(false);
  const [napoleonDeepList, setNapoleonDeepList] = useState(false);
  const [bredberonDeepList, setBredberonDeepList] = useState(false);
  const [komandantmarkDeepList, setKomandantmarkList] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="menu-items">
      <ul className="main-ul">
        <li
          className="glavnalista"
          onMouseEnter={() => setZagorDeepList(true)}
          onMouseLeave={() => setZagorDeepList(false)}
        >
          <Link
            to="/editions/hero=Zagor"
            onClick={() => {
              dispatch(filterHero("Zagor"));
              setListMenu(false);
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }}
          >
            Zagor
            <i className="fa-solid fa-angle-right"></i>
          </Link>
          {zagorDeepList && <ZagorDeepMenu setListMenu={setListMenu} />}
          {/* <ZagorDeepMenu /> */}
        </li>
        <li
          className="glavnalista"
          onMouseEnter={() => setDilandogDeepList(true)}
          onMouseLeave={() => setDilandogDeepList(false)}
        >
          <Link to="*">
            Dilan Dog-------- <i className="fa-solid fa-angle-right"></i>
          </Link>
          {dilandogDeepList && <DilandogDeepList />}
          {/* <DilandogDeepList /> */}
        </li>
        <li
          className="glavnalista"
          onMouseEnter={() => setTexDeepList(true)}
          onMouseLeave={() => setTexDeepList(false)}
        >
          <Link to="*">
            Teks-------- <i className="fa-solid fa-angle-right"></i>
          </Link>
          {texDeepList && <TexDeepList />}
          {/* <TexDeepList /> */}
        </li>
        <li
          className="glavnalista"
          onMouseEnter={() => setMartiDeepList(true)}
          onMouseLeave={() => setMartiDeepList(false)}
        >
          <Link to="*">
            Marti Misterija-------- <i className="fa-solid fa-angle-right"></i>
          </Link>
          {martiDeepList && <MartimisterijaDeepList />}
          {/* <MartimisterijaDeepList /> */}
        </li>
        <li
          className="glavnalista"
          onMouseEnter={() => setMisternoDeepList(true)}
          onMouseLeave={() => setMisternoDeepList(false)}
        >
          <Link to="*">
            Mister No-------- <i className="fa-solid fa-angle-right"></i>
          </Link>
          {misternoDeepList && <MisterNoDeepList />}
          {/* <MisterNoDeepList /> */}
        </li>
        <li
          className="glavnalista"
          onMouseEnter={() => setDampirDeepList(true)}
          onMouseLeave={() => setDampirDeepList(false)}
        >
          <Link to="*">
            Dampir-------- <i className="fa-solid fa-angle-right"></i>
          </Link>
          {dampirDeepList && <DampirDeepList />}
          {/* <DampirDeepList /> */}
        </li>
        <li
          className="glavnalista"
          onMouseEnter={() => setDragoneroDeepList(true)}
          onMouseLeave={() => setDragoneroDeepList(false)}
        >
          <Link to="*">
            Dragonero-------- <i className="fa-solid fa-angle-right"></i>
          </Link>
          {dragoneroDeepList && <DragoneroDeepList />}
          {/* <DragoneroDeepList /> */}
        </li>
        <li
          className="glavnalista"
          onMouseEnter={() => setNapoleonDeepList(true)}
          onMouseLeave={() => setNapoleonDeepList(false)}
        >
          <Link to="*">
            Napoleon-------- <i className="fa-solid fa-angle-right"></i>
          </Link>
          {napoleonDeepList && <NapoleonDeepList />}
          {/* <NapoleonDeepList /> */}
        </li>
        <li
          className="glavnalista"
          onMouseEnter={() => setBredberonDeepList(true)}
          onMouseLeave={() => setBredberonDeepList(false)}
        >
          <Link to="*">
            Bred Beron-------- <i className="fa-solid fa-angle-right"></i>
          </Link>
          {bredberonDeepList && <BredberonDeepMenu />}
          {/* <BredberonDeepMenu /> */}
        </li>
        <li
          className="glavnalista"
          onMouseEnter={() => setKomandantmarkList(true)}
          onMouseLeave={() => setKomandantmarkList(false)}
        >
          <Link to="*">
            Komandant Mark-------- <i className="fa-solid fa-angle-right"></i>
          </Link>
          {komandantmarkDeepList && <KomandantmarkDeepList />}
          {/* <KomandantmarkDeepList /> */}
        </li>
        <li>
          <Link
            to="/editions/hero=Leo_Palp"
            onClick={() => {
              dispatch(filterHero("Leo Palp"));
              setListMenu(false);
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }}
          >
            Leo Palp
          </Link>
        </li>
        <li>
          <Link
            to="/editions/hero=Talicni"
            onClick={() => {
              dispatch(filterHero("Talicni Tom"));
              setListMenu(false);
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }}
          >
            Talicni Tom
          </Link>
        </li>
        <li>
          <Link
            to="/editions/edition=Albumi"
            onClick={() => {
              dispatch(filterComics("Albumi"));
              setListMenu(false);
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }}
          >
            Biblioteka Albumi
          </Link>
        </li>
        <li>
          <Link
            to="/editions/edition=Obojeni_Program"
            onClick={() => {
              dispatch(filterComics("Obojeni program"));
              setListMenu(false);
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }}
          >
            Biblioteka Obojeni program
          </Link>
        </li>
        <li>
          <Link
            to="/editions/edition=Medjuvreme"
            onClick={() => {
              dispatch(filterComics("Medjuvreme"));
              setListMenu(false);
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }}
          >
            Medjuvreme
          </Link>
        </li>
        <li>
          <Link
            to="/editions/edition=Posebna_Izdanja"
            onClick={() => {
              dispatch(filterComics("Posebna izdanja"));
              setListMenu(false);
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }}
          >
            Posebna izdanja
          </Link>
        </li>
        <li>
          <Link
            to="/editions/edition=Zlatna_Serija"
            onClick={() => {
              dispatch(filterComics("Zlatna serija"));
              setListMenu(false);
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }}
          >
            Zlatna serija
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;

/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import "./stickyHeader.scss";
import logo from "../../../assets/logoimg/veselicetvrtaklogo.png";
import logoNavbar from "../../../assets/logoimg/bzzzcrnilogo.png";
import Highlighter from "react-highlight-words";
import { Link, useParams, useLocation } from "react-router-dom";
import DropDown from "./dropdownMenu/DropDown";
import { allComics } from "../../../app/data/dataAll";
import { useDispatch } from "react-redux";
import {
  filterComics,
  filterHero,
  resetAllComics,
  singleComic,
} from "../../../app/features/slices/comicsSlice";

export default function StickyHeader() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { edition } = useParams();

  useEffect(() => {
    if (location.pathname === "/aboutus") {
      setActivePage("aboutusActive");
    } else if (location.pathname.includes("/editions")) {
      setActivePage("editionsActive");
    } else if (location.pathname.includes("/bzzz-page")) {
      setActivePage("bzzzActive");
    } else {
      setActivePage("");
    }
    // console.log(location.pathname);
  }, [location.pathname]);

  const [listMenu, setListMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activePage, setActivePage] = useState("");
  const [navbar, setNavbar] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [zagorSubMenu, setZagorSubMenu] = useState(false);
  const [dilanSubMenu, setDilanSubMenu] = useState(false);
  const [teksSubMenu, setTeksSubMenu] = useState(false);
  const [martiSubMenu, setMartiSubMenu] = useState(false);
  const [misterSubMenu, setMisterSubMenu] = useState(false);
  const [dampirSubMenu, setDampirSubMenu] = useState(false);
  const [dragoneroSubMenu, setDragoneroSubMenu] = useState(false);
  const [napoleonSubMenu, setNapoleonSubMenu] = useState(false);
  const [bredSubMenu, setBredSubMenu] = useState(false);
  const [komandantSubMenu, setKomandantSubMenu] = useState(false);

  const onama = () => {
    setMobileMenu(false);
    setSubMenu(false);
    setZagorSubMenu(false);
    setDilanSubMenu(false);
    setTeksSubMenu(false);
    setMartiSubMenu(false);
    setMisterSubMenu(false);
    setDampirSubMenu(false);
    setDragoneroSubMenu(false);
    setNapoleonSubMenu(false);
    setBredSubMenu(false);
    setKomandantSubMenu(false);
  };

  /*******************************SEARCH RESULTS LOGIC START*******************************/

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = allComics.filter((value) => {
      return value.episode
        .toString()
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData("");
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  /*******************************SEARCH RESULTS LOGIC END*********************************/

  const [showSearchDiv, setShowSearchDiv] = useState(false);

  const handleMobileMenu = () => setMobileMenu(!mobileMenu);
  const closeMobileMenu = () => setMobileMenu(false);

  const changeNavbar = () => {
    if (window.scrollY >= 45) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  /*********************************************FOCUS START*****************************************/

  const inputFocus = useRef();

  const focus = () => {
    setMobileMenu(true);
    inputFocus.current.focus();
  };
  /***********************************************FOCUS END*****************************************/

  return (
    <header className={navbar ? "white-header active" : "white-header"}>
      <div
        onClick={closeMobileMenu}
        className={
          mobileMenu ? "mobile-menu-wrapper active" : "mobile-menu-wrapper"
        }
      ></div>
      {/************************************************* MOBILE MENU DIV ******************************************************************************/}
      <div onClick={handleMobileMenu} className="bars d-sm-block d-lg-none">
        <i className="fa-solid fa-bars"></i>
      </div>

      <div className={mobileMenu ? "mobile-menu active" : "mobile-menu"}>
        <div className="search-div">
          <form className="search-form">
            <input
              spellCheck="false"
              type="text"
              placeholder="Pretrazi Izdanja"
              value={wordEntered}
              onChange={handleFilter}
              ref={inputFocus}
            />
            <div className="mobileSearchClearBtn">
              {wordEntered === "" ? (
                <div>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              ) : (
                <div>
                  <i className="fa-solid fa-xmark" onClick={clearInput}></i>
                </div>
              )}
            </div>
          </form>
        </div>

        <ul className="mobile-menu-ul">
          <div>
            {filteredData.length !== 0 && (
              <div className="mobileStickyDivSearchResults">
                {filteredData.slice(0, 15).map((value, key) => {
                  return (
                    <div className="mobileSearchDivHolder" key={key}>
                      <Link
                        onClick={() => {
                          closeMobileMenu();
                          setFilteredData("");
                          setWordEntered("");
                          dispatch(
                            singleComic([
                              value.img[0],
                              value.img[1],
                              value.img[2],
                              value.img[3],
                              value.episode,
                              value.edition,
                              value.hero,
                            ])
                          );
                        }}
                        className="mobileDataItem"
                        to={value.path}
                      >
                        <div className="mobileSearchDivHolderPic">
                          <img src={value.img[0]} alt={value.edition} />
                        </div>
                        <div className="searchDivHolderPic-comic-found-2">
                          <p>{value.edition}</p>
                          <Highlighter
                            highlightClassName="highlightClass2"
                            searchWords={[wordEntered]}
                            autoEscape={true}
                            textToHighlight={value.episode}
                          >
                            {value.episode}
                          </Highlighter>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <li className="mobile-menu-li">
            <div className="resi">
              <Link
                className={
                  subMenu === true ? "gray-bg" : "first-mobile-list-item"
                }
                to="/editions/all-comics"
                onClick={() => {
                  dispatch(resetAllComics()), onama();
                }}
              >
                <span>IZDANJA</span>
              </Link>
              <div
                onClick={() => setSubMenu((prev) => !prev)}
                className={subMenu === true ? "oranje active" : "oranje"}
              >
                <span
                  className={
                    subMenu === true ? "rotate-arrow" : "rotate-arrow-only"
                  }
                >
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </div>
            </div>
            <div className={subMenu === true ? "upaljen" : "ugasen"}>
              <ul className="mobile-sub-menu-ul">
                <li className="mobile-sub-menu-li">
                  <div className="resi">
                    <Link
                      className={
                        zagorSubMenu === true
                          ? "gray-sub-bg"
                          : "first-mobile-sub-list-item"
                      }
                      to="/editions/hero=Zagor"
                      onClick={() => {
                        dispatch(filterHero("Zagor"));
                        onama();
                        setListMenu(false);
                      }}
                    >
                      Zagor
                    </Link>{" "}
                    <div
                      className={
                        zagorSubMenu === true ? "oranje active" : "oranje"
                      }
                      onClick={() => setZagorSubMenu((prev) => !prev)}
                    >
                      <span
                        className={
                          zagorSubMenu === true
                            ? "rotate-arrow"
                            : "rotate-arrow-only"
                        }
                      >
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </div>
                  </div>

                  <div
                    className={
                      zagorSubMenu === true ? "sub-upaljen" : "sub-ugasen"
                    }
                  >
                    <ul className="mobile-sub-menu-ul">
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/editions/hero=Zagor_Redovna_sveska"
                            onClick={() => {
                              dispatch(filterComics("Redovna sveska")), onama();
                            }}
                          >
                            Zagor - regular series
                          </Link>{" "}
                        </div>
                      </li>
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/editions/hero=Zagor_Odabrane_price"
                            onClick={() => {
                              dispatch(filterComics("Odabrane Price")), onama();
                            }}
                          >
                            Zagor - selected stories
                          </Link>{" "}
                        </div>
                      </li>
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/editions/hero=Zagor_Zagor_specijal"
                            onClick={() => {
                              dispatch(filterComics("Zagor specijal")), onama();
                            }}
                          >
                            Zagor - special
                          </Link>{" "}
                        </div>
                      </li>
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/editions/hero=Zagor_Biblioteka_Zagor"
                            onClick={() => {
                              dispatch(filterComics("Biblioteka Zagor")),
                                onama();
                            }}
                          >
                            Zagor - library
                          </Link>{" "}
                        </div>
                      </li>
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/editions/hero=Ciko"
                            onClick={() => {
                              dispatch(filterHero("Ciko")), onama();
                            }}
                          >
                            Ciko
                          </Link>{" "}
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-sub-menu-li">
                  <div className="resi">
                    <Link
                      className={
                        dilanSubMenu === true
                          ? "gray-sub-bg"
                          : "first-mobile-sub-list-item"
                      }
                      to="/"
                    >
                      Dilan Dog ----------
                    </Link>{" "}
                    <div
                      onClick={() => setDilanSubMenu((prev) => !prev)}
                      className={
                        dilanSubMenu === true ? "oranje active" : "oranje"
                      }
                    >
                      <span
                        className={
                          dilanSubMenu === true
                            ? "rotate-arrow"
                            : "rotate-arrow-only"
                        }
                      >
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      dilanSubMenu === true ? "sub-upaljen" : "sub-ugasen"
                    }
                  >
                    <ul className="mobile-sub-menu-ul">
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Dilan Dog - regular series
                          </Link>{" "}
                        </div>
                      </li>
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Dilan Dog - Super book
                          </Link>{" "}
                        </div>
                      </li>
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Dilan Dog - Planet of the dead
                          </Link>{" "}
                        </div>
                      </li>
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Dilan Dog - Stories from another tomorow
                          </Link>{" "}
                        </div>
                      </li>
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Dilan Dog - library
                          </Link>{" "}
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-sub-menu-li">
                  <div className="resi">
                    <Link
                      className={
                        teksSubMenu === true
                          ? "gray-sub-bg"
                          : "first-mobile-sub-list-item"
                      }
                      to="/"
                    >
                      Teks ----------
                    </Link>{" "}
                    <div
                      onClick={() => setTeksSubMenu((prev) => !prev)}
                      className={
                        teksSubMenu === true ? "oranje active" : "oranje"
                      }
                    >
                      <span
                        className={
                          teksSubMenu === true
                            ? "rotate-arrow"
                            : "rotate-arrow-only"
                        }
                      >
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      teksSubMenu === true ? "sub-upaljen" : "sub-ugasen"
                    }
                  >
                    <ul className="mobile-sub-menu-ul">
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Teks - regular series
                          </Link>{" "}
                        </div>
                      </li>
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Big Tex
                          </Link>{" "}
                        </div>
                      </li>
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Big Tex in color
                          </Link>{" "}
                        </div>
                      </li>
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Tex library
                          </Link>{" "}
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-sub-menu-li">
                  <div className="resi">
                    <Link
                      className={
                        martiSubMenu === true
                          ? "gray-sub-bg"
                          : "first-mobile-sub-list-item"
                      }
                      to="/"
                    >
                      Marti Misterija ----------
                    </Link>{" "}
                    <div
                      onClick={() => setMartiSubMenu((prev) => !prev)}
                      className={
                        martiSubMenu === true ? "oranje active" : "oranje"
                      }
                    >
                      <span
                        className={
                          martiSubMenu === true
                            ? "rotate-arrow"
                            : "rotate-arrow-only"
                        }
                      >
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      martiSubMenu === true ? "sub-upaljen" : "sub-ugasen"
                    }
                  >
                    <ul className="mobile-sub-menu-ul">
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Marti Misterija - regular series
                          </Link>{" "}
                        </div>
                      </li>
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Marti Misterija library
                          </Link>{" "}
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-sub-menu-li">
                  <div className="resi">
                    <Link
                      className={
                        misterSubMenu === true
                          ? "gray-sub-bg"
                          : "first-mobile-sub-list-item"
                      }
                      to="/"
                    >
                      Mister No ----------
                    </Link>{" "}
                    <div
                      onClick={() => setMisterSubMenu((prev) => !prev)}
                      className={
                        misterSubMenu === true ? "oranje active" : "oranje"
                      }
                    >
                      <span
                        className={
                          misterSubMenu === true
                            ? "rotate-arrow"
                            : "rotate-arrow-only"
                        }
                      >
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      misterSubMenu === true ? "sub-upaljen" : "sub-ugasen"
                    }
                  >
                    <ul className="mobile-sub-menu-ul">
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Mister No - regular series
                          </Link>{" "}
                        </div>
                      </li>
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Mister No library
                          </Link>{" "}
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-sub-menu-li">
                  <div className="resi">
                    <Link
                      className={
                        dampirSubMenu === true
                          ? "gray-sub-bg"
                          : "first-mobile-sub-list-item"
                      }
                      to="/"
                    >
                      Dampir ----------
                    </Link>{" "}
                    <div
                      onClick={() => setDampirSubMenu((prev) => !prev)}
                      className={
                        dampirSubMenu === true ? "oranje active" : "oranje"
                      }
                    >
                      <span
                        className={
                          dampirSubMenu === true
                            ? "rotate-arrow"
                            : "rotate-arrow-only"
                        }
                      >
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      dampirSubMenu === true ? "sub-upaljen" : "sub-ugasen"
                    }
                  >
                    <ul className="mobile-sub-menu-ul">
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Dampir - regular series
                          </Link>{" "}
                        </div>
                      </li>
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Dampir library
                          </Link>{" "}
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-sub-menu-li">
                  <div className="resi">
                    <Link
                      className={
                        dragoneroSubMenu === true
                          ? "gray-sub-bg"
                          : "first-mobile-sub-list-item"
                      }
                      to="/"
                    >
                      Dragonero ----------
                    </Link>{" "}
                    <div
                      onClick={() => setDragoneroSubMenu((prev) => !prev)}
                      className={
                        dragoneroSubMenu === true ? "oranje active" : "oranje"
                      }
                    >
                      <span
                        className={
                          dragoneroSubMenu === true
                            ? "rotate-arrow"
                            : "rotate-arrow-only"
                        }
                      >
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      dragoneroSubMenu === true ? "sub-upaljen" : "sub-ugasen"
                    }
                  >
                    <ul className="mobile-sub-menu-ul">
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Dragonero library
                          </Link>{" "}
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-sub-menu-li">
                  <div className="resi">
                    <Link
                      className={
                        napoleonSubMenu === true
                          ? "gray-sub-bg"
                          : "first-mobile-sub-list-item"
                      }
                      to="/"
                    >
                      Napoleon ----------
                    </Link>{" "}
                    <div
                      onClick={() => setNapoleonSubMenu((prev) => !prev)}
                      className={
                        napoleonSubMenu === true ? "oranje active" : "oranje"
                      }
                    >
                      <span
                        className={
                          napoleonSubMenu === true
                            ? "rotate-arrow"
                            : "rotate-arrow-only"
                        }
                      >
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      napoleonSubMenu === true ? "sub-upaljen" : "sub-ugasen"
                    }
                  >
                    <ul className="mobile-sub-menu-ul">
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Napoleon - regular series
                          </Link>{" "}
                        </div>
                      </li>
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Napoleon library
                          </Link>{" "}
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-sub-menu-li">
                  <div className="resi">
                    <Link
                      className={
                        bredSubMenu === true
                          ? "gray-sub-bg"
                          : "first-mobile-sub-list-item"
                      }
                      to="/"
                    >
                      Bred Beron ----------
                    </Link>{" "}
                    <div
                      onClick={() => setBredSubMenu((prev) => !prev)}
                      className={
                        bredSubMenu === true ? "oranje active" : "oranje"
                      }
                    >
                      <span
                        className={
                          bredSubMenu === true
                            ? "rotate-arrow"
                            : "rotate-arrow-only"
                        }
                      >
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      bredSubMenu === true ? "sub-upaljen" : "sub-ugasen"
                    }
                  >
                    <ul className="mobile-sub-menu-ul">
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Bred Beron - regular series
                          </Link>{" "}
                        </div>
                      </li>
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Bred Beron library
                          </Link>{" "}
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-sub-menu-li">
                  <div className="resi">
                    <Link
                      className={
                        komandantSubMenu === true
                          ? "gray-sub-bg"
                          : "first-mobile-sub-list-item"
                      }
                      to="/"
                    >
                      Komandant Mark ----------
                    </Link>{" "}
                    <div
                      onClick={() => setKomandantSubMenu((prev) => !prev)}
                      className={
                        komandantSubMenu === true ? "oranje active" : "oranje"
                      }
                    >
                      <span
                        className={
                          komandantSubMenu === true
                            ? "rotate-arrow"
                            : "rotate-arrow-only"
                        }
                      >
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      komandantSubMenu === true ? "sub-upaljen" : "sub-ugasen"
                    }
                  >
                    <ul className="mobile-sub-menu-ul">
                      <li className="mobile-sub-menu-li">
                        <div className="resi">
                          <Link
                            className="first-mobile-sub-complete-list-item"
                            to="/"
                          >
                            Komandant Mark - special
                          </Link>{" "}
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-sub-menu-li">
                  <div className="resi">
                    <Link
                      className="first-mobile-sub-complete-list-item"
                      to="/editions/hero=Leo_Palp"
                      onClick={() => {
                        dispatch(filterHero("Leo Palp"));
                        onama();
                      }}
                    >
                      Leo Palp
                    </Link>{" "}
                  </div>
                </li>
                <li className="mobile-sub-menu-li">
                  <div className="resi">
                    <Link
                      className="first-mobile-sub-complete-list-item"
                      to="/editions/hero=Talicni"
                      onClick={() => {
                        dispatch(filterHero("Talicni Tom"));
                        onama();
                      }}
                    >
                      Talicni Tom
                    </Link>{" "}
                  </div>
                </li>
                <li className="mobile-sub-menu-li">
                  <div className="resi">
                    <Link
                      className="first-mobile-sub-complete-list-item"
                      // to="/editions"
                      // onClick={() => {
                      //   dispatch(filterComics("Albumi")), onama();
                      // }}
                      to="/editions/edition=Albumi"
                      onClick={() => {
                        dispatch(filterComics("Albumi"));
                        onama();
                      }}
                    >
                      Biblioteka Albumi
                    </Link>{" "}
                  </div>
                </li>
                <li className="mobile-sub-menu-li">
                  <div className="resi">
                    <Link
                      className="first-mobile-sub-complete-list-item"
                      to="/editions/edition=Obojeni_Program"
                      onClick={() => {
                        dispatch(filterComics("Obojeni program"));
                        onama();
                      }}
                    >
                      Biblioteka Obojeni program
                    </Link>{" "}
                  </div>
                </li>
                <li className="mobile-sub-menu-li">
                  <div className="resi">
                    <Link
                      className="first-mobile-sub-complete-list-item"
                      // to="/editions"
                      // onClick={() => {
                      //   dispatch(filterComics("Medjuvreme")), onama();
                      // }}
                      to="/editions/edition=Medjuvreme"
                      onClick={() => {
                        dispatch(filterComics("Medjuvreme"));
                        onama();
                      }}
                    >
                      Medjuvreme
                    </Link>{" "}
                  </div>
                </li>
                <li className="mobile-sub-menu-li">
                  <div className="resi">
                    <Link
                      className="first-mobile-sub-complete-list-item"
                      // to="/editions"
                      // onClick={() => {
                      //   dispatch(filterComics("Posebna izdanja")), onama();
                      // }}
                      to="/editions/edition=Posebna_Izdanja"
                      onClick={() => {
                        dispatch(filterComics("Posebna izdanja"));
                        onama();
                      }}
                    >
                      Posebna Izdanja
                    </Link>{" "}
                  </div>
                </li>
                <li className="mobile-sub-menu-li">
                  <div className="resi">
                    <Link
                      className="first-mobile-sub-complete-list-item"
                      to="/editions/edition=Zlatna_Serija"
                      onClick={() => {
                        dispatch(filterComics("Zlatna serija"));
                        onama();
                      }}
                    >
                      Zlatna Serija
                    </Link>{" "}
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="mobile-menu-li-no-arrow">
            <div className="resi">
              <Link
                className="first-mobile-complete-list-item"
                to="/aboutus"
                onClick={() => {
                  dispatch(resetAllComics()), onama();
                }}
              >
                <span>O NAMA</span>{" "}
              </Link>
            </div>
          </li>
          <li className="mobile-menu-li-no-arrow">
            <div className="resi">
              <Link
                className="first-mobile-complete-list-item"
                to="/bzzz-page"
                onClick={() => {
                  dispatch(resetAllComics()), onama();
                }}
              >
                <span>BZZZZ!</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>

      {/********************************************************************  MOBILE MENU DIV  END**************************************************************/}
      <Link
        to="/"
        onClick={() => {
          setActivePage("");
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          dispatch(resetAllComics());
        }}
      >
        <div className="logo-div">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </Link>
      <div className="navbar-list d-sm-none d-lg-flex">
        <ul className="list">
          <li
            className={
              activePage === "editionsActive"
                ? "li-first edition-underline-active"
                : "li-first edition-underline"
            }
            onMouseEnter={() => setListMenu(true)}
            onMouseLeave={() => setListMenu(false)}
            onClick={() => setActivePage("editionsActive")}
          >
            <Link
              to="/editions/all-comics"
              className="arrow"
              onClick={() => {
                dispatch(resetAllComics());
                setListMenu(false);
                window.scrollTo({ top: 0, left: 0, behavior: "instant" });
              }}
            >
              <span
                className={
                  listMenu || activePage === "editionsActive"
                    ? "gray-edition-active"
                    : "gray-edition"
                }
              >
                EDITIONS
              </span>
            </Link>

            {listMenu && (
              <DropDown listMenu={listMenu} setListMenu={setListMenu} />
            )}
            {/* <DropDown listMenu={listMenu} setListMenu={setListMenu} /> */}
          </li>

          <li
            className="li-first"
            onClick={() => {
              setActivePage("aboutusActive");
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
              dispatch(resetAllComics());
            }}
          >
            <Link
              className={
                activePage === "aboutusActive"
                  ? "underline-active"
                  : "underline"
              }
              to="/aboutus"
            >
              <span
                className={
                  activePage === "aboutusActive"
                    ? "gray-edition-active"
                    : "gray-edition"
                }
              >
                ABOUT US
              </span>
            </Link>
          </li>
          <li
            className="li-first"
            onClick={() => {
              setActivePage("bzzzActive");
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
              dispatch(resetAllComics());
            }}
          >
            <Link
              className={
                activePage === "bzzzActive" ? "underline-active" : "underline"
              }
              to="/bzzz-page"
            >
              <img id="logo-navbar" src={logoNavbar} alt="logo Navbar" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="sticky-magnifier-holder">
        <div
          className="magnifier"
          onMouseEnter={() => setShowSearchDiv(true)}
          onMouseLeave={() => setShowSearchDiv(false)}
        >
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <div
            className={
              showSearchDiv
                ? "stickyDivFormSearch active"
                : "stickyDivFormSearch"
            }
          >
            <form className="stickyHeaderForm">
              <input
                spellCheck="false"
                className="stickyDivFormSearchInput"
                type="text"
                placeholder="Pretrazi izdanja"
                value={wordEntered}
                onChange={handleFilter}
              />
              <div className="searchClearBtn">
                {wordEntered === "" ? (
                  <div>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                ) : (
                  <div className="clear-x">
                    <i className="fa-solid fa-xmark" onClick={clearInput}></i>
                  </div>
                )}
              </div>
            </form>
            {filteredData.length !== 0 && (
              <div className="stickyDivSearchResults">
                {filteredData.slice(0, 15).map((value, key) => {
                  return (
                    <div className="searchDivHolder" key={key}>
                      <Link
                        onClick={() => {
                          setShowSearchDiv(false);
                          setFilteredData("");
                          setWordEntered("");
                          dispatch(
                            singleComic([
                              value.img[0],
                              value.img[1],
                              value.img[2],
                              value.img[3],
                              value.episode,
                              value.edition,
                              value.hero,
                            ])
                          );
                        }}
                        className="dataItem"
                        to={value.path}
                        // target="_blank"
                        rel="noreferrer"
                      >
                        <div className="searchDivHolderPic">
                          <img src={value.img[0]} alt={value.edition} />
                        </div>
                        <div className="searchDivHolderPic-comic-found">
                          <p>{value.edition}</p>
                          <Highlighter
                            highlightClassName="highlightClass"
                            searchWords={[wordEntered]}
                            autoEscape={true}
                            textToHighlight={value.episode}
                          ></Highlighter>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="sticky-magnifier-holder-replacement" onClick={focus}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </header>
  );
}

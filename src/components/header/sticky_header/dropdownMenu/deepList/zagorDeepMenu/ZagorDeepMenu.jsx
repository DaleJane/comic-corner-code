/* eslint-disable */
import { React } from "react";
import { Link } from "react-router-dom";
import "./zagorDeepList.scss";
import { useDispatch } from "react-redux";
import { filterComics } from "../../../../../../app/features/slices/comicsSlice";

export default function ZagorDeepMenu({ setListMenu }) {
  const dispatch = useDispatch();

  /*****************************************************************************/
  return (
    <ul className="deep-list-zagor">
      <li>
        <Link
          to="editions/hero=Zagor_Redovna_sveska"
          onClick={() => {
            dispatch(filterComics("Redovna sveska"));
            setListMenu(false);
          }}
        >
          Zagor-regular series
        </Link>
      </li>
      <li>
        <Link
          to="editions/hero=Zagor_Odabrane_price"
          onClick={() => {
            dispatch(filterComics("Odabrane Price"));
            setListMenu(false);
          }}
        >
          Zagor-selected stories
        </Link>
      </li>
      <li>
        <Link
          to="editions/hero=Zagor_Zagor_specijal"
          onClick={() => {
            dispatch(filterComics("Zagor specijal"));
            setListMenu(false);
          }}
        >
          Zagor-special
        </Link>
      </li>
      <li>
        <Link
          to="editions/hero=Zagor_Biblioteka_Zagor"
          onClick={() => {
            dispatch(filterComics("Biblioteka Zagor"));
            setListMenu(false);
          }}
        >
          Zagor library
        </Link>
      </li>
      <li>
        <Link
          to="editions/hero=Ciko"
          onClick={() => {
            dispatch(filterComics("Ciko"));
            setListMenu(false);
          }}
        >
          Ciko
        </Link>
      </li>
    </ul>
  );
}

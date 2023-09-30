import React from "react";
import "./martimisterijaDeepList.scss";
import { Link } from "react-router-dom";

export default function MartimisterijaDeepList() {
  return (
    <ul className="deep-list-marti">
      <li>
        <Link to="/">Marti Misterija-regular series</Link>
      </li>
      <li>
        <Link to="/">Marti Misterija library</Link>
      </li>
    </ul>
  );
}

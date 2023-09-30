import React from "react";
import "./napoleonDeepList.scss";
import { Link } from "react-router-dom";

export default function NapoleonDeepList() {
  return (
    <ul className="deep-list-napoleon">
      <li>
        <Link to="/">Napoleon-regular series</Link>
      </li>
      <li>
        <Link to="/">Napoleon library</Link>
      </li>
    </ul>
  );
}

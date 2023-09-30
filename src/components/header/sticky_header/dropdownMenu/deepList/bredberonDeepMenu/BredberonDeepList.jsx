import React from "react";
import "./bredberonDeepList.scss";
import { Link } from "react-router-dom";

export default function BredberonDeepMenu() {
  return (
    <ul className="deep-list-bredberon">
      <li>
        <Link to="/">Bred Beron-regular series</Link>
      </li>
      <li>
        <Link to="/">Bred Beron-special</Link>
      </li>
    </ul>
  );
}

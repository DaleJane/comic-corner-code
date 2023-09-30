import React from "react";
import "./komandantmarkDeepList.scss";
import { Link } from "react-router-dom";

export default function KomandantmarkDeepList() {
  return (
    <ul className="deep-list-komandantmark">
      <li>
        <Link to="/">Komandant Mark-special</Link>
      </li>
    </ul>
  );
}

import React from "react";
import "./dilandogDeepList.scss";
import { Link } from "react-router-dom";

export default function DilandogDeepList() {
  return (
    <ul className="deep-list-dilan">
      <li>
        <Link to="/">Dilan Dog-regular series</Link>
      </li>
      <li>
        <Link to="/">Dilan Dog-Super book</Link>
      </li>
      <li>
        <Link to="/">Dilan Dog-Planet of the dead</Link>
      </li>
      <li>
        <Link to="/">Dilan Dog-Stories from another tomorrow</Link>
      </li>
      <li>
        <Link to="/">Dilan Dog library</Link>
      </li>
    </ul>
  );
}

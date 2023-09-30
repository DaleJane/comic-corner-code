import React from "react";
import { Link } from "react-router-dom";
import "./texDeepList.scss";

export default function TexDeepList() {
  return (
    <ul className="deep-list-tex">
      <li>
        <Link to="/">Tex-regular series</Link>
      </li>
      <li>
        <Link to="/">Big Tex</Link>
      </li>
      <li>
        <Link to="/">Big Tex in color</Link>
      </li>
      <li>
        <Link to="/">Tex library</Link>
      </li>
    </ul>
  );
}

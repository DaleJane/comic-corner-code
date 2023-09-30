import React from "react";
import "./misternoDeepList.scss";
import { Link } from "react-router-dom";

export default function MisterNoDeepList() {
  return (
    <ul className="deep-list-misterno">
      <li>
        <Link to="/">Mister No-regular series</Link>
      </li>
      <li>
        <Link to="/">Mister No library</Link>
      </li>
    </ul>
  );
}

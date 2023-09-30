import React from "react";
import "./dragoneroDeepList.scss";
import { Link } from "react-router-dom";

export default function DragoneroDeepList() {
  return (
    <ul className="deep-list-dragonero">
      <li>
        <Link to="/">Dragonero library</Link>
      </li>
    </ul>
  );
}

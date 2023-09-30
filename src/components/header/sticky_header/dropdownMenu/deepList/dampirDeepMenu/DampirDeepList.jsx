import React from "react";
import "./dampirDeepList.scss";
import { Link } from "react-router-dom";

export default function DampirDeepList() {
  return (
    <ul className="deep-list-dampir">
      <li>
        <Link to="/">Dampir-regular series</Link>
      </li>
      <li>
        <Link to="/">Dampir library</Link>
      </li>
    </ul>
  );
}

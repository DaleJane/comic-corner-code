import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../footer/Footer";
import SmallHeader from "../small_header/SmallHeader";
import StickyHeader from "../sticky_header/StickyHeader";

export default function HeaderFooterHolder() {
  return (
    <>
      <SmallHeader />
      <StickyHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

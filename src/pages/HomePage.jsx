import React from "react";
import NavEvent from "../components/NavEvent";
import HeaderEvent from "../components/HeaderEvent";
import PreloaderEvent from "../components/PreloaderEvent";

function HomePage() {
  return (
    <>
      <PreloaderEvent />
      <NavEvent />
      <HeaderEvent />
    </>
  );
}

export default HomePage;

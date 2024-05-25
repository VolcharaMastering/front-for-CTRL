// import { useState } from 'react'
import TheHeader from "./components/TheHeader/TheHeader";
import MapBlock from "./components/MapBlock/MapBlock";
import MenuPanel from "./components/MenuPanel/MenuPanel";
import TheFooter from "./components/TheFooter/TheFooter";
import "@fontsource/fira-sans";
import "@fontsource/pt-serif";
import "@fontsource/eb-garamond";
import "./App.scss";

function App() {
  return (
    <>
      <TheHeader />
      <MenuPanel />
      <MapBlock />
      <TheFooter />
    </>
  );
}

export default App;

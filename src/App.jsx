// import { useState } from 'react'
import MenuState from "./stores/MenuState";
import { observer } from "mobx-react-lite";
import { useResize } from "./utils/hooks/useResize";
import TheHeader from "./components/TheHeader/TheHeader";
import MapBlock from "./components/MapBlock/MapBlock";
import MenuPanel from "./components/MenuPanel/MenuPanel";
import TheFooter from "./components/TheFooter/TheFooter";
import "@fontsource/fira-sans";
import "@fontsource/pt-serif";
import "@fontsource/eb-garamond";
import "./App.scss";

const App = observer(() => {
  const screenSize = useResize();
  return (
    <>
      <TheHeader />
      {MenuState.isOpened && <MenuPanel screenSize={screenSize} />}
      <MapBlock />
      <TheFooter />
    </>
  );
});

export default App;

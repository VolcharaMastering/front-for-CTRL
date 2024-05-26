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
import PopupState from "./stores/PopupState";
import Popup from "./components/Popup/Popup";
import { checkUserAuth } from "./utils/usersScripts/user";
import { useEffect } from "react";

const App = observer(() => {
  const screenSize = useResize();
  
  useEffect(() => {
    checkUserAuth();
  }, [])
  return (
    <>
    {PopupState.popups.isOpened && (
      <Popup
        size={screenSize.trakResolutionValue}
      />
    )}
      <TheHeader />
      {MenuState.isOpened && <MenuPanel screenSize={screenSize.trakResolutionValue} />}
      <MapBlock />
      <TheFooter />
    </>
  );
});

export default App;

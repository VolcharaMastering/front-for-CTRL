import { useEffect } from "react";
import MenuState from "./stores/MenuState";
import { observer } from "mobx-react-lite";
import { useResize } from "./utils/hooks/useResize";
import TheHeader from "./components/TheHeader/TheHeader";
import MapBlock from "./components/MapBlock/MapBlock";
import MenuPanel from "./components/MenuPanel/MenuPanel";
import TheFooter from "./components/TheFooter/TheFooter";
import PopupState from "./stores/PopupState";
import Popup from "./components/Popup/Popup";
import { checkUserAuth } from "./utils/usersScripts/user";
import { getPlaces } from "./api/places";
import "@fontsource/fira-sans";
import "@fontsource/pt-serif";
import "@fontsource/eb-garamond";
import "@smastrom/react-rating/style.css"; //styling for rating stars
import "./App.scss";

const App = observer(() => {
  const screenSize = useResize();
  
  useEffect(() => {
    getPlaces();
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

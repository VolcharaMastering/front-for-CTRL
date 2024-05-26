import { observer } from "mobx-react-lite";
import UserState from "../../stores/UserState";
import "./MenuForm.scss";
import PopupState from "../../stores/PopupState";
import MenuTabs from "../../UI/MenuTabs/MenuTabs";
import PlacesStore from "../../stores/PlacesStore";
import { useEffect } from "react";
import MenuCheckedState from "../../stores/MenuCheckedState";
import { useState } from "react";

const MenuForm = observer(() => {
    const [places, setPlaces] = useState(PlacesStore.places);
    
  const handleOpenPopup = () => {
    PopupState.setOpened({
      isOpened: true,
      popupType: "login",
      popupData: {
        title: "Login",
        button: "Enter",
      },
      size: "middle",
    });
  };
  useEffect(() => {
    setPlaces(PlacesStore.places);
  }, [PlacesStore.places])
  return UserState.userData.logedIn ? (
    <>
      <MenuTabs />
      {MenuCheckedState.checked === "places" && (
        <ul className="menu-form__places-list">
          {places.map((place) => (
            <li className="menu-form__places-item" key={place.id}>
              {place.placeName}
            </li>
          ))}
        </ul>
      )}
      <form></form>
    </>
  ) : (
    <>
      <h2 className="subtitle"> You need to </h2>
      <button className="subtitle" type="button" onClick={handleOpenPopup}>
        Log In
      </button>
    </>
  );
});
export default MenuForm;

import { observer } from "mobx-react-lite";
import UserState from "../../stores/UserState";
import PopupState from "../../stores/PopupState";
import MenuTabs from "../../UI/MenuTabs/MenuTabs";
import PlacesStore from "../../stores/PlacesStore";
import MenuCheckedState from "../../stores/MenuCheckedState";
import "./MenuForm.scss";
import SearchBar from "../../UI/SearchBar/SearchBar";
import ButtonElement from "../../UI/ButtonElement/ButtonElement";
import ChecketPlaceState from "../../stores/ChecketPlaceState";
import CheckedPlace from "../CheckedPlace/CheckedPlace";
import ReviewsList from "../ReviewsList/ReviewsList";

const MenuForm = observer(() => {
  const CheckDetails = (place) => {
    ChecketPlaceState.setCheckedPlase(place);
    MenuCheckedState.setDetails();
  };

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
  return UserState.userData.logedIn ? (
    <menu className="menu-form">
      <MenuTabs />
      <SearchBar />
      {MenuCheckedState.checked === "places" && (
        <ul className="menu-form__places-list">
          {PlacesStore.places.length > 0 &&
            PlacesStore.places.map(
              (place) =>
                place.placeName &&
                place.lat &&
                place.lng && (
                  <li className="menu-form__places-item" key={place.id}>
                    <p className="menu-form__places-item__text">
                      {place.placeName}
                    </p>
                    <ButtonElement
                      name="Details"
                      action={CheckDetails}
                      data={place}
                      size="micro"
                    />
                  </li>
                )
            )}
        </ul>
      )}
      {MenuCheckedState.checked === "details" && (
        <section className="menu-form__places-list">
          <CheckedPlace />
          <ReviewsList />
        </section>
      )}
    </menu>
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

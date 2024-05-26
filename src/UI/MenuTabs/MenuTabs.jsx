import { observer } from "mobx-react-lite";
import MenuCheckedState from "../../stores/MenuCheckedState";
import "./MenuTabs.scss";

const MenuTabs = observer(() => {
  const handleCheckPlace = () => {
    MenuCheckedState.setPlaces();
  };
  const handleCheckDetails = () => {
    MenuCheckedState.setDetails();
  };
  return (
    <div className="menu-tabs">
      <button
        className={`menu-tabs__button ${MenuCheckedState.checked === "places" && "menu-tabs__button_active-place"}`}
        type="button"
        onClick={handleCheckPlace}
      >
        Places
      </button>
      <button
        className={`menu-tabs__button ${MenuCheckedState.checked === "details" && "menu-tabs__button_active-details"}`}
        type="button"
        onClick={handleCheckDetails}
      >
        Place details
      </button>
    </div>
  );
});
export default MenuTabs;

import { useState } from "react";
import { observer } from "mobx-react-lite";
import { addPlace } from "../../api/places";
import ButtonElement from "../../UI/ButtonElement/ButtonElement";
import UserState from "../../stores/UserState";
import "./AddPopup.scss";

const AddPopup = observer(({ lat, lng }) => {
  const [placeName, setPlaceName] = useState("");
  const handleAdd = () => {
    addPlace({
      placeName: placeName,
      lat: lat,
      lng: lng,
    });
  };
  return UserState.userData.logedIn ? (
    <div className="add-popup">
      <input
        id="place-name"
        name="placeName"
        value={placeName}
        className="add-popup__input"
        placeholder="Enter place name"
        onChange={(e) => setPlaceName(e.target.value)}
        required
        type="text"
      />
      <p className="add-popup__label">lat {lat}</p>
      <p className="add-popup__label">lng {lng}</p>
      <div className="add-popup__add-button">
        <ButtonElement name="Add place" action={handleAdd} size="small" />
      </div>
    </div>
  ) : (
    <div className="add-popup">
      <p className="add-popup__label">lat {lat}</p>
      <p className="add-popup__label">lng {lng}</p>
      <p className="add-popup__auth-message">Log in and add place</p>
    </div>
  );
});
export default AddPopup;

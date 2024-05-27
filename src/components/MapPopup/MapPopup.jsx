import { useState } from "react";
import { addPlace } from "../../api/places";
import "./MapPopup.scss";
import ButtonElement from "../../UI/ButtonElement/ButtonElement";
import UserState from "../../stores/UserState";
import { observer } from "mobx-react-lite";

const MapPopup = observer(({ lat, lng }) => {
  const [placeName, setPlaceName] = useState("");
  const handleAdd = () => {
    console.log("placeName", placeName);
    addPlace({
      placeName: placeName,
      lat: lat,
      lng: lng,
    });
  };
  return UserState.userData.logedIn ? (
    <div className="map-popup">
      <input
        id="place-name"
        name="placeName"
        value={placeName}
        className="map-popup__input"
        placeholder="Enter place name"
        onChange={(e) => setPlaceName(e.target.value)}
        required
        type="text"
      />
      <p className="map-popup__label">lat {lat}</p>
      <p className="map-popup__label">lng {lng}</p>
      <div className="map-popup__add-button">
      <ButtonElement name="Add place" action={handleAdd} size="small" />
      </div>
    </div>
  ) : (
    <div className="map-popup">
      <p className="map-popup__label">lat {lat}</p>
      <p className="map-popup__label">lng {lng}</p>
      <p className="map-popup__auth-message">Log in and add place</p>
    </div>
  );
});
export default MapPopup;

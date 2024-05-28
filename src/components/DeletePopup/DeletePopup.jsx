import { observer } from "mobx-react-lite";
import "./DeletePopup.scss";
import { deletePlace } from "../../api/places";
import ButtonElement from "../../UI/ButtonElement/ButtonElement";
import UserState from "../../stores/UserState";

const DeletePopup = observer(({ placeId, placeName, lat, lng }) => {
  console.log("placeId", placeId, placeName, lat, lng);
  const handleDelete = () => {
    console.log("placeid", placeId);
    deletePlace(placeId);
  };
  return UserState.userData.logedIn ? (
    <div className="del-popup">
      <h2 className="subtitle">{placeName}</h2>
      <p className="del-popup__label">lat {lat}</p>
      <p className="del-popup__label">lng {lng}</p>
      <div className="del-popup__add-button">
        {!(placeName === "DefaultCenter") && (
          <ButtonElement
            name="Delete place"
            action={handleDelete}
            size="small"
          />
        )}
      </div>
    </div>
  ) : (
    <div className="del-popup">
      <p className="del-popup__label">lat {lat}</p>
      <p className="del-popup__label">lng {lng}</p>
      <p className="del-popup__auth-message">Log in to delete place</p>
    </div>
  );
});
export default DeletePopup;

import { observer } from "mobx-react-lite";
import ChecketPlaceState from "../../stores/ChecketPlaceState";
import ButtonElement from "../../UI/ButtonElement/ButtonElement";
import { deletePlace } from "../../api/places";
import UserState from "../../stores/UserState";
import { getReviews } from "../../api/reviews";
import { useEffect } from "react";
import "./CheckedPlace.scss";
import PopupState from "../../stores/PopupState";

const CheckedPlace = observer(() => {
  const placeId = ChecketPlaceState.checked._id;
  const handleAddReview = () => {
    PopupState.setOpened({
      isOpened: true,
      popupType: "addReview",
      popupData: {
        title: "Add review",
        placeId: placeId,
      },
      size: "middle",
    });
  };
  const handleDeletePlace = () => {
    deletePlace(placeId, ChecketPlaceState.checked._id);
  };

  useEffect(() => {
    getReviews(ChecketPlaceState.checked._id);
  }, [ChecketPlaceState.checked._id]);
  return (
    <section className="checked-place">
      <h2 className="subtitle">Chosen place:</h2>
      <p className="checked-place__text">
        Name: {ChecketPlaceState.checked.placeName}
      </p>
      <label className="checked-place__label">Coordinates on map:</label>
      <p className="checked-place__text">
        Latitude: {ChecketPlaceState.checked.lat}
      </p>
      <p className="checked-place__text">
        Longitude: {ChecketPlaceState.checked.lng}
      </p>
      {UserState.userData.logedIn && (
        <div className="checked-place__service-buttons">
          <ButtonElement
            name="Add review"
            size="small"
            action={handleAddReview}
          />
          <ButtonElement
            name="Delete place"
            size="small"
            action={handleDeletePlace}
          />
        </div>
      )}
    </section>
  );
});
export default CheckedPlace;

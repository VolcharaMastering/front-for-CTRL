import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Rating } from "@smastrom/react-rating";
import ChecketPlaceState from "../../stores/ChecketPlaceState";
import ButtonElement from "../../UI/ButtonElement/ButtonElement";
import { deletePlace } from "../../api/places";
import "@smastrom/react-rating/style.css";
import "./CheckedPlace.scss";
import UserState from "../../stores/UserState";

const CheckedPlace = observer(() => {
  const [rating, setRating] = useState(3);
  const handleAddReview = () => {};
  const handleDeletePlace = () => {
    deletePlace(ChecketPlaceState.checked._id);
  };
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
          <Rating
            style={{ maxWidth: 100 }}
            value={rating}
            onChange={setRating}
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

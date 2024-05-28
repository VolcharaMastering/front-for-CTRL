import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import ButtonElement from "../../UI/ButtonElement/ButtonElement";
import ApiLogsStore from "../../stores/ApiLogsStore";
import { addReview, updateReviews } from "../../api/reviews";
import { Rating } from "@smastrom/react-rating";
import PopupState from "../../stores/PopupState";
import "./AddReviewForm.scss";

const AddReviewForm = observer(() => {
  const [rating, setRating] = useState(3);
  const [reviewText, setReviewText] = useState("");
  const placeId = PopupState.popups.popupData.placeId;
  const handleCreateReview = () => {
    ApiLogsStore.setClean();
    addReview(placeId, { comment: reviewText, rating: rating });
  };

  const handleUpdateReview = () => {
    ApiLogsStore.setClean();
    updateReviews(placeId, PopupState.popups.popupData.reviewId, { comment: reviewText, rating: rating });
  }
  useEffect(() => {
    if(PopupState.popups.popupData.reviewOldText){
      setReviewText(PopupState.popups.popupData.reviewOldText);
    }
    ApiLogsStore.setClean();
  }, []);
  return (
    <form className="review-form" onSubmit={handleCreateReview}>
      <div className="review-form__input-block">
        <textarea
          id="review"
          className="review-form__text"
          name="review"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          type="text"
          minLength={2}
          maxLength={1000}
          required
          placeholder="Enter your review here. Minimum 2 characters, maximum 1000 characters"
        />
      </div>

      <Rating style={{ maxWidth: 200 }} value={rating} onChange={setRating} />
      <div className="review-form__button">
       {PopupState.popups.popupData.title==="Update review" ?
        (<ButtonElement
          name={"Update"}
          action={handleUpdateReview}
          size="middle"
        />) :
        (<ButtonElement
          name={"Set review"}
          action={handleCreateReview}
          size="middle"
        />)
      
      }
      </div>
      <span
        className={`review-form__auth-message 
                      ${ApiLogsStore.logs && "form__auth-message"}`}
      >
        {ApiLogsStore.logs}
      </span>
    </form>
  );
});
export default AddReviewForm;

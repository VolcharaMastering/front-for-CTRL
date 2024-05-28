import { observer } from "mobx-react-lite";
import "./ReviewsList.scss";
import ReviewsStore from "../../stores/ReviewsStore";
import { Rating } from "@smastrom/react-rating";
import ButtonElement from "../../UI/ButtonElement/ButtonElement";
import { deleteReview } from "../../api/reviews";
import ChecketPlaceState from "../../stores/ChecketPlaceState";
import PopupState from "../../stores/PopupState";

const ReviewsList = observer(() => {
  const placeId = ChecketPlaceState.checked._id;
    const handleDeleteReview = (reviewId) => {
        deleteReview(placeId, reviewId);
    }
    const handleUpdateReview = (reviewId) => {
      const reviewOldText = ReviewsStore.reviews.find((review) => review._id === reviewId).comment;
      PopupState.setOpened({
        isOpened: true,
        popupType: "addReview",
        popupData: {
          title: "Update review",
          placeId: placeId,
          reviewId: reviewId,
          reviewOldText: reviewOldText,

        },
        size: "middle",
      });
    }
  return (
    <ul className="reviews-list">
      {ReviewsStore.reviews.length > 0 ? (
        ReviewsStore.reviews.map(
          (review) =>
              <li className="reviews-list__item" key={review._id}>
                <label className="reviews-list__item-label">Review:</label>
                  <p className="reviews-list__item-text">{review.comment}</p>

                <div className="reviews-list__item-rating">
                  <p className="reviews-list__item-text">
                    Rating: {review.rating}
                  </p>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={review.rating}
                    readOnly
                  />
                  <ButtonElement name="Update" action={handleUpdateReview} data={review._id} size="micro" />
                  <ButtonElement name="Delete" action={handleDeleteReview} data={review._id} size="micro" />
                </div>
              </li>
            // )
        )
      ) : (
        <h2 className="subtitle">Yet no reviews!</h2>
      )}
    </ul>
  );
});
export default ReviewsList;

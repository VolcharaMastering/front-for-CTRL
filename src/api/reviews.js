import api from "../plugins/axios";
import Cookies from 'js-cookie';
import ReviewsStore from "../stores/ReviewsStore";

const token = Cookies.get('token');
const getReviews = async (placeId) => {
    try {
      const reviews = await api.get(`${placeId}/reviews`);
      ReviewsStore.setReviews(reviews.data);
      return reviews.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const addReview = async (placeId, reviewData) => {
    try {
      await api.post(`${placeId}/reviews/`, reviewData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getReviews();
      return;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const deleteReview = async (reviewId) => {
    try {
      await api.delete(`reviews/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getReviews();
      return;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const findReviews = async (placeId, searchString) => {
    try {
      const reviews = await api.get(`${placeId}/reviews/search?keyword=${searchString}`);
      ReviewsStore.setReviews(reviews.data);
      return reviews.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const updateReviews = async (reviewId, reviewData) => {
    try {
      const reviews = await api.put(`reviews/${reviewId}`, reviewData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getReviews();
      return reviews.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const sortReviews = async (placeId, sortValue, sortDirection) => {
    try {
      const reviews = await api.get(`${placeId}/reviews?sortBy=${sortValue}&${sortDirection}`);
      ReviewsStore.setReviews(reviews.data);
      return reviews.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export { getReviews, addReview, deleteReview, findReviews, updateReviews, sortReviews };
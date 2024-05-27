import api from "../plugins/axios";
import Cookies from 'js-cookie';
import PlacesStore from "../stores/PlacesStore";

const token = Cookies.get('token');
const getPlaces = async () => {
    try {
      const places = await api.get("places/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      PlacesStore.setPlaces(places.data);
      return places.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const addPlace = async (placeData) => {
    try {
      await api.post("places/", placeData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getPlaces();
      return;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const deletePlace = async (placeId) => {
    try {
      await api.delete(`places/${placeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getPlaces();
      return;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export { getPlaces, addPlace, deletePlace };
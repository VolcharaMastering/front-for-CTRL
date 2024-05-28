import { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import { observer } from "mobx-react-lite";
import PlacesStore from "../../stores/PlacesStore.jsx";
import AddPopup from "../AddPopup/AddPopup.jsx";
import tileLayer from "../../utils/titleLayer.js";
import DeletePopup from "../DeletePopup/DeletePopup.jsx";
import ChecketPlaceState from "../../stores/ChecketPlaceState.jsx";
import "leaflet/dist/leaflet.css";
import "./MapBlock.scss";
import markerImage from "../../assets/centralMarker.png";

const chosenIcon = L.icon({
  iconUrl: markerImage,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
const MapBlock = observer(() => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const markerRef = useRef(null);

  const MapClickHandler = () => {
    //set default position if no geolocation
    const map = useMap();

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            map.flyTo([latitude, longitude], 13);
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      }
    }, [map]);
    useMapEvents({
      click: (e) => {
        setMarkerPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [markerPosition]);
  return (
    <main className="map-block">
      <MapContainer
        center={[ChecketPlaceState.checked.lat, ChecketPlaceState.checked.lng]}
        zoom={13}
        scrollWheelZoom={true}
        ZoomControl={false}
      >
        <ZoomControl position={"topright"} />
        <TileLayer {...tileLayer} />
        <MapClickHandler />
        <Marker
          position={[
            ChecketPlaceState.checked.lat,
            ChecketPlaceState.checked.lng,
          ]}
          icon={chosenIcon}
        >
          <Popup>
            <DeletePopup
              placeId={
                ChecketPlaceState.checked._id
                  ? ChecketPlaceState.checked._id
                  : 1
              }
              placeName={
                ChecketPlaceState.checked.placeName
                  ? ChecketPlaceState.checked.placeName
                  : "DefaultCenter"
              }
              lat={ChecketPlaceState.checked.lat}
              lng={ChecketPlaceState.checked.lng}
            />
          </Popup>
        </Marker>

        {markerPosition && (
          <Marker position={markerPosition} ref={markerRef}>
            <Popup>
              <AddPopup lat={markerPosition[0]} lng={markerPosition[1]} />
            </Popup>
          </Marker>
        )}
        {PlacesStore.places.length > 0 &&
          PlacesStore.places.map((place) => {
            const { _id: placeId, placeName, lat, lng } = place;
            if (lat && lng) {
              return (
                <Marker key={placeId} position={[lat, lng]}>
                  <Popup>
                    <DeletePopup
                      placeId={placeId}
                      placeName={placeName}
                      lat={lat}
                      lng={lng}
                    />
                  </Popup>
                </Marker>
              );
            }
          })}
      </MapContainer>
    </main>
  );
});

export default MapBlock;

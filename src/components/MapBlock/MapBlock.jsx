import { useEffect, useRef } from "react";

// import {
//   MapContainer,
//   Marker,
//   useMapEvents,
//   TileLayer,
//   Popup,
// } from "react-leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
  useMap,
  useMapEvents,
} from "react-leaflet";
import PlacesStore from "../../stores/PlacesStore.jsx";
import { observer } from "mobx-react-lite";
import "./MapBlock.scss";
import MapPopup from "../MapPopup/MapPopup.jsx";
import { useState } from "react";
import tileLayer from "../../utils/titleLayer.js";
import "leaflet/dist/leaflet.css";
import DeletePopup from "../DeletePopup/DeletePopup.jsx";

const MapBlock = observer(() => {
  const center = [55.75017078646975, 37.60995090007783];
  const [markerPosition, setMarkerPosition] = useState(null);
  const markerRef = useRef(null);

  const MapClickHandler = () => {
    const map = useMap();

    //set default position if no geolocation
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { lat, lng } = position.coords;
            map.flyTo([lat, lng], 13);
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      }
    }, []);
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
      <MapContainer center={center} zoom={13} scrollWheelZoom={true} ZoomControl={false}>
        <ZoomControl position={"topright"} />
        <TileLayer {...tileLayer} />
        <MapClickHandler />
        {markerPosition && (
          <Marker position={markerPosition} ref={markerRef}>
            <Popup>
              <MapPopup lat={markerPosition[0]} lng={markerPosition[1]} />
            </Popup>
          </Marker>
        )}
        {PlacesStore.places.length > 0 &&
          PlacesStore.places.map((place) => {
            const { _id: placeId, placeName, lat, lng } = place;
            if (lat && lng) {
            return (
              <Marker
                key={placeId}
                position={[lat, lng]}
              >
                <Popup>
                  <DeletePopup placeId={placeId} placeName={placeName} lat={lat} lng={lng} />
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

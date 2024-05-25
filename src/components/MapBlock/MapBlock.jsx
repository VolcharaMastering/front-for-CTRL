import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapBlock.scss";

const MapBlock = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (mapContainer.current && !map.current) {
      //set default position if no geolocation
      map.current = L.map(mapContainer.current).setView(
        [55.75017078646975, 37.60995090007783],
        13
      );
      //set map layer. Using OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map.current);
      //adding functionality of clicks on map
      map.current.on("click", (e) => {
        const { lat, lng } = e.latlng;
        console.log(`Clicked at: ${lat}, ${lng}`);
      });

      //sending request to get user location
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            map.current.setView([lat, lng], 13);
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.log("Geolocation is not available");
      }
    }
  }, []);

  return <main id="map" ref={mapContainer} className="map-block" />;
};

export default MapBlock;

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapBlock.scss";

const MapBlock = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const myPoints = [
    {
      name: "some place name",
      latitude: 44.762566353036185,
      longitude: 20.42839050292969,
    },
    {
      name: "some other",
      latitude: 44.76963939259086,
      longitude: 20.46684265136719,
    },
    {
      name: "some another",
      latitude: 44.75646821003823,
      longitude: 20.453453063964847,
    },
  ];
  useEffect(() => {
    if (mapContainer.current && !map.current) {
      //set default position if no geolocation
      map.current = L.map(mapContainer.current, {
        center: [55.75017078646975, 37.60995090007783],
        zoom: 13,
        zoomControl: false,
      });
      //reposition of zoom buttons to right corner
      L.control.zoom({ position: "topright" }).addTo(map.current);
      let currentPopup = null;
      //set map layer. Using OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map.current);
      //adding functionality of clicks on map
      map.current.on("click", (e) => {
        if (currentPopup) {
          currentPopup.remove();
        }
        const { lat, lng } = e.latlng;
        //Here is popup with coordinates and button to add it to DB
        currentPopup = L.marker([lat, lng])
          .addTo(map.current)
          .bindPopup(
            `This is a cool place. Coordinates:<br>latitude: ${lat},<br>longitude: ${lng}`
          )
          .openPopup();
      });
      //Adding my points yo the map
      myPoints.forEach((location) => {
        const { name, latitude, longitude } = location;
        L.marker([latitude, longitude]).addTo(map.current).bindPopup(name);
      });
      //sending request to get user location
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            map.current.flyTo([lat, lng], 13);
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

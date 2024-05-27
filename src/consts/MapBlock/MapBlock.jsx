import { useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import L from "leaflet";
import PlacesStore from "../../stores/PlacesStore";
import { observer } from "mobx-react-lite";
import "leaflet/dist/leaflet.css";
import "./MapBlock.scss";
import MapPopup from "../MapPopup/MapPopup";

const MapBlock = observer(() => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  //Adding my points yo the map
  if (Object.keys(PlacesStore.places).length > 0) {
    PlacesStore.places.forEach((location) => {
      const { name, latitude, longitude } = location;
      L.marker([latitude, longitude]).addTo(map.current).bindPopup(name);
    });
  }
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
       
        const popupContent =
          ReactDOMServer.renderToString(<MapPopup lat={lat} lng={lng} handleAdd={handleAdd}/>);
        //Here is popup with coordinates and button to add it to DB
        currentPopup = L.marker([lat, lng])
          .addTo(map.current)
          .bindPopup(popupContent)
          .openPopup();      
          
          const handleAdd = () => {
            console.log("lat", lat, "lng", lng);
          }
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
});

export default MapBlock;

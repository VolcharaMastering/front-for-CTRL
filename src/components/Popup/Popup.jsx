import { useEffect } from "react";
import PopupState from "../../stores/PopupState";
import "./Popup.scss";

function Popup({ popupType, popupContent, size }) {
  /////close functioality///////
  const { setClosed } = PopupState;
  const handleClosePopup = () => {
    setClosed();
  };
  useEffect(() => {
    function onKeyDown(evt) {
      if (evt.key === "Escape") {
        handleClosePopup();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  ///////
  return (
    <div className="popup__shadow" onClick={handleClosePopup}>
      <section className="popup">
        <button
          type="button"
          className="popup__close"
          aria-label="Close popup"
          onClick={handleClosePopup}
        />
        {popupContent.title && <h2 className="popup__title">{popupContent.title}</h2>}
        {popupType === "photo" ? (
          <img
            src={popupContent.photoLink}
            alt={popupContent.description}
            className={`popup__image ${size}`}
          />
        ) : (
          <div className={`popup__content ${size}`}>no_content</div>
        )}
      </section>
    </div>
  );
}

export default Popup;

import { useEffect } from "react";
import PopupState from "../../stores/PopupState";
import "./Popup.scss";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import AuthForm from "../AuthForm/AuthForm";

const Popup = observer(() => { 
  const [popup, setPopup] = useState(PopupState.popups);
  
  useEffect(() => {
    setPopup(PopupState.popups);
  }, [PopupState.popups]);

  /////close functioality///////
  const { setClosed } = PopupState;
  const handleClosePopup = () => {
    setClosed();
  };
  const handleCloseByShadowClick = (evt) => {
    if (evt.target.classList.contains("popup__shadow")) {
      handleClosePopup();
    }
  }
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
    <div className="popup__shadow" onClick={handleCloseByShadowClick}>
      <section className="popup">
        <button
          type="button"
          className="popup__close"
          aria-label="Close popup"
          onClick={handleClosePopup}
        />
        {popup.popupData.title && <h2 className="popup__title">{popup.popupData.title}</h2>}
        {popup.popupType === "login" && (
          <AuthForm formType={popup.popupType}/>
        ) }
        {popup.popupType === "register" && (
          <AuthForm formType={popup.popupType} />
        )}
      </section>
    </div>
  );
}
)
export default Popup;

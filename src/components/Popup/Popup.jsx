import { useEffect } from "react";
import PopupState from "../../stores/PopupState";
import "./Popup.scss";
import ButtonElement from "../../UI/ButtonElement/ButtonElement";
import { login } from "../../api/users";
import FormStore from "../../stores/FormStore";
import { observer } from "mobx-react-lite";
import { useState } from "react";

const Popup = observer(() => { 
  const [popup, setPopup] = useState(PopupState.popups);
  
  useEffect(() => {
    setPopup(PopupState.popups);
  }, [PopupState.popups]);
  const handleLogIn = () => {
    login(FormStore.form);
    FormStore.setClean();
  }
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
        {popup.popupData.title && <h2 className="popup__title">{popup.popupData.title}</h2>}
        {popup.popupType === "loIin" && (
          
          <ButtonElement name={popup.popupData.button} action={handleLogIn}/>
        ) }
        {popup.popupType === "Register" && (

          <ButtonElement name={popup.popupData.button} action={handleLogIn}/>
        )}
      </section>
    </div>
  );
}
)
export default Popup;

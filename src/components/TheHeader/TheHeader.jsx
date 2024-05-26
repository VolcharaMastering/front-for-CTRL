import ButtonElement from "../../UI/ButtonElement/ButtonElement";
import HideButton from "../../UI/HideButton/HideButton";
import UserState from "../../stores/UserState";
import PopupState from "../../stores/PopupState";
import "./TheHeader.scss";

function TheHeader() {
  const handleRegister = () => {
    PopupState.setOpened({isOpened: true,
      popupType: "Register",
      popupData: {
        title: "Register",
        button: "Register and Enter",
      },
      size: "middle",
    });
  }
  const handleClick = () => {
    if (UserState.userData.logedIn) {
      UserState.setLogOut();
    } else {
      PopupState.setOpened({
        isOpened: true,
        popupType: "logIn",
        popupData: {
          title: "Login",
          button: "Enter",
        },
        size: "middle",
      });
    }
  };
  return (
    <header className="header">
      <HideButton />
      <h1 className="header__title">Test Map</h1>
      <div className="header__user">
        {UserState.userData.logedIn ? (
          <div className={`header__avatar ${UserState.userData.logedIn}`} />
        ) : (
          <ButtonElement name="Register" action={handleRegister} size="small" />
        )}
        <ButtonElement
          name={`${UserState.userData.logedIn ? "Exit" : "Enter"}`}
          action={handleClick}
          size="small"
        />
      </div>
    </header>
  );
}
export default TheHeader;

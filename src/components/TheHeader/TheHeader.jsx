import { observer } from "mobx-react-lite";
import ButtonElement from "../../UI/ButtonElement/ButtonElement";
import HideButton from "../../UI/HideButton/HideButton";
import UserState from "../../stores/UserState";
import PopupState from "../../stores/PopupState";
import { logOut } from "../../utils/usersScripts/user";
import { useResize } from "../../utils/hooks/useResize";
import "./TheHeader.scss";

const TheHeader = observer(() => {
  const screenSize = useResize();
  const handleRegister = () => {
    PopupState.setOpened({
      isOpened: true,
      popupType: "register",
      popupData: {
        title: "Register",
        button: "Register and Enter",
      },
      size: "middle",
    });
  };
  const handleClick = () => {
    if (UserState.userData.logedIn) {
      logOut();
    } else {
      PopupState.setOpened({
        isOpened: true,
        popupType: "login",
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
      <h1 className={`header__title ${screenSize.trakResolutionValue}`}>Test Map</h1>
      <div className={`header__user  ${screenSize.trakResolutionValue}`}>
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
});
export default TheHeader;

import { observer } from "mobx-react-lite";
import UserState from "../../stores/UserState";
import "./MenuForm.scss";
import PopupState from "../../stores/PopupState";
import MenuTabs from "../../UI/MenuTabs/MenuTabs";

const MenuForm = observer(() => {
  const handleOpenPopup = () => {
    PopupState.setOpened({
      isOpened: true,
      popupType: "login",
      popupData: {
        title: "Login",
        button: "Enter",
      },
      size: "middle",
    });
  };
  return UserState.userData.logedIn ? (
    <>
      <MenuTabs />
      <form></form>
    </>
  ) : (
    <>
      <h2 className="subtitle"> You need to </h2>
      <button className="subtitle" type="button" onClick={handleOpenPopup}>
        Log In
      </button>
    </>
  );
});
export default MenuForm;

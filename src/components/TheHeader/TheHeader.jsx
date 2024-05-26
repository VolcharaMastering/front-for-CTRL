import ButtonElement from "../../UI/ButtonElement/ButtonElement";
import HideButton from "../../UI/HideButton/HideButton";
import "./TheHeader.scss";

function TheHeader() {
  return (
    <header className="header">
      <HideButton />
      <h1 className="header__title">Test Map</h1>
      <div className="header__user">
        <div className="header__avatar" />
        <ButtonElement name="Enter" action={() => {}} size="small" />
      </div>
    </header>
  );
}
export default TheHeader;

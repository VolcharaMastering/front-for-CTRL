import MenuState from "../../stores/MenuState";
import "./HideButton.scss";

function HideButton() {
  return (
    <button
      className={`hide-button ${MenuState.isOpened}`}
      onClick={MenuState.isOpened ? MenuState.setClosed : MenuState.setOpened} />
  );
}
export default HideButton;

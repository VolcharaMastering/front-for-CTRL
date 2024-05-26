import { observer } from "mobx-react-lite";
import MenuState from "../../stores/MenuState";
import "./HideButton.scss";

const HideButton = observer(() => {
  return (
    <button
      className={`hide-button ${MenuState.isOpened}`}
      onClick={MenuState.isOpened ? MenuState.setClosed : MenuState.setOpened}
    />
  );
});
export default HideButton;

import SortingState from "../../stores/SortingState";
import "./SortOrderButton.scss";

function SortOrderButton({ order }) {
    const handleClick = () => {
          SortingState.setOrder({ sortDirection: order });
      };
      return (
        <button className={`sort-button ${order}`} onClick={handleClick} type="button" />
      );
}
export default SortOrderButton;
import { observer } from "mobx-react-lite";
import ButtonElement from "../../UI/ButtonElement/ButtonElement";
import SortOrderButton from "../../UI/SortOrderButton/SortOrderButton";
import SortingState from "../../stores/SortingState";
import "./SortingPannel.scss";

const SortingPannel = observer(() => {
  const handleSort = (sortValue) => {
    SortingState.setOrder({ sortBy: sortValue });
  };
  return (
    <section className="sorting-pannel">
      <label className="sorting-pannel__label">Reviews order</label>
      <div className="sorting-pannel__sorters">
        <ButtonElement
          name="Date"
          action={handleSort}
          data="date"
          size={"micro"}
        />
        <ButtonElement
          name="Rating"
          action={handleSort}
          data="rating"
          size={"micro"}
        />
        <SortOrderButton
          order={SortingState.sortBy.sortDirection === "asc" ? "desc" : "asc"}
        />
      </div>
    </section>
  );
});
export default SortingPannel;

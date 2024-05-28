import { useResize } from "../../utils/hooks/useResize";
import "./ButtonElement.scss";

function ButtonElement({ name, action, data, size }) {
  const screenSize = useResize();
    const handleClick = () => {
      if(data){
        action(data);
      }else{
        action();
      }
    };
    return (
      <button className={`button ${size} ${screenSize.trakResolutionValue}`} onClick={handleClick} type="button">
        {name}
      </button>
    );
}
export default ButtonElement;
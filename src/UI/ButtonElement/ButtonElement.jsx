import "./ButtonElement.scss";

function ButtonElement({ name, action, data, size }) {
    const handleClick = () => {
      if(data){
        action(data);
      }else{
        action();
      }
    };
    return (
      <button className={`button ${size}`} onClick={handleClick} type="button">
        {name}
      </button>
    );
}
export default ButtonElement;
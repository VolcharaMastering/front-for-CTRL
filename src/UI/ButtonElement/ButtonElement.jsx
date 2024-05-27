import "./ButtonElement.scss";

function ButtonElement({ name, action, size }) {
    const handleClick = () => {
      console.log("clicked");
        action();
    };
    return (
      <button className={`button ${size}`} onClick={handleClick} type="button">
        {name}
      </button>
    );
}
export default ButtonElement;
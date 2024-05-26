import MenuForm from "../MenuForm/MenuForm";
import "./MenuPanel.scss";

function MenuPanel({screenSize}) {

    return (
        <section className={`menu-panel ${screenSize}`}>
            <MenuForm />
        </section>
    )
}
export default MenuPanel;
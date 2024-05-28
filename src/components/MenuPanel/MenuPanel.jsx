import { useResize } from "../../utils/hooks/useResize";
import MenuForm from "../MenuForm/MenuForm";
import "./MenuPanel.scss";

function MenuPanel() {
    const screenSize = useResize();

    return (
        <section className={`menu-panel ${screenSize.trakResolutionValue}`}>
            <MenuForm />
        </section>
    )
}
export default MenuPanel;
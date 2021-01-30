import { NavLink } from "react-router-dom";
const Sidebar = ({ buttons, active }) => {
    return (
        <div className="sidebar" id="sidebar">
            {buttons.map((el) => (
                <NavLink
                    key={"menuKey-" + el.name}
                    className={
                        el.value == active
                            ? "sidebar--button sidebar--active"
                            : "sidebar--button"
                    }
                    to={el.ref}
                >
                    {el.name}
                </NavLink>
            ))}
        </div>
    );
};

export default Sidebar;

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

            <img
                src="https://res.cloudinary.com/gregor1494/image/upload/v1612044664/portfolio/full-stack-developer_1_drqtgk.svg"
                alt="developer"
            />
        </div>
    );
};

export default Sidebar;

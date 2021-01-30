import { NavLink } from "react-router-dom";

const Navigation = ({ text, path }) => {
    return (
        <>
            {/* <img
                src={arrow}
                style={{
                    maxWidth: "200px",
                    position: "absolute",
                    bottom: "100px",
                    left: "100px",
                    opacity: "0.3",
                    transform: "rotate(10deg)",
                }}
            /> */}
            <div
                className="navigation hi"
                data-aos="fade-up"
                data-aos-offset="-50"
            >
                <NavLink className="navigation--button" to={path}>
                    <span>
                        <span>
                            <span>{text.toUpperCase()}</span>
                        </span>
                    </span>
                </NavLink>
            </div>
        </>
    );
};

export default Navigation;

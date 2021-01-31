import React, { useEffect, useRef, useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Sidebar from "./sidebar";
import logo from "../media/svg/logo.svg";

const Header = ({ isMenu, setIsMenu }) => {
    const [active, setActive] = useState(null);

    const buttons = [
        {
            ref: "/",
            name: "HOME",
            value: "",
        },
        {
            ref: "/projects",
            name: "PROJECTS",
            value: "projects",
        },
        {
            ref: "/contact",
            name: "CONTACT",
            value: "contact",
        },
    ];

    const history = useHistory();

    useEffect(() => {
        setActive(history.location.pathname.slice(1));
    }, [history.location.pathname]);

    const isInitialMount = useRef(true);

    useEffect(() => {
        const sidebar = document.getElementById("sidebar");
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            if (isMenu) sidebar.classList.add("sidebar--open");
            else sidebar.classList.remove("sidebar--open");
        }
    }, [isMenu]);

    history.listen(() => {
        window.scrollTo(0, 0);
        setActive(history.location.pathname.slice(1));
        setIsMenu(false);
    });

    window.onscroll = function () {
        setIsMenu(false);
        const header = document.getElementById("header");
        var currentScrollPos = window.pageYOffset;
        if (50 > currentScrollPos) {
            header.style.top = "0";
        } else {
            header.style.top = "-100px";
        }
    };

    return (
        <>
            <header id="header" className="header">
                <div className="header__hamburger">
                    <HamburgerMenu
                        isOpen={isMenu}
                        menuClicked={() => setIsMenu(!isMenu)}
                        width={60}
                        height={30}
                        strokeWidth={5}
                        rotate={0}
                        color="var(--text-special)"
                        borderRadius={50}
                        animationDuration={0.5}
                    />
                </div>

                <NavLink to="/" className="header__logo">
                    <img alt="Logo" src={logo} />
                </NavLink>

                <div className="header__full">
                    <div className="header__full__buttons">
                        {buttons.map((el) => (
                            <NavLink
                                key={"menuKey-" + el.name}
                                className={
                                    el.value === active
                                        ? "header__full__buttons--button header__full__buttons--active"
                                        : "header__full__buttons--button"
                                }
                                to={el.ref}
                            >
                                {el.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </header>
            <Sidebar buttons={buttons} active={active} isOpen={isMenu} />
        </>
    );
};

export default Header;

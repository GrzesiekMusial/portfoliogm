import { useHistory } from "react-router-dom";
import { createRipples } from "react-ripples";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    const history = useHistory();

    const navigate = () => window.open("https://github.com/GrzesiekMusial");
    const navigateTwo = () => history.push("/contact");

    const Ripples = createRipples({
        color: "var(--base)",
        during: 1500,
    });

    return (
        <div className="footer">
            <Ripples>
                <AiFillGithub
                    className="footer--icon"
                    onClick={() => navigate()}
                />
            </Ripples>
            <span>
                <Ripples>
                    <AiOutlineMail
                        className="footer--icon"
                        onClick={() => navigateTwo()}
                    />
                </Ripples>
            </span>
        </div>
    );
};

export default Footer;

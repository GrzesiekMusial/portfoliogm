import { useHistory } from "react-router-dom";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    const history = useHistory();

    const navigate = () => window.open("https://github.com/GrzesiekMusial");
    const navigateTwo = () => history.push("/contact");

    return (
        <div className="footer">
            <AiFillGithub className="footer--icon" onClick={() => navigate()} />
            <AiOutlineMail
                className="footer--icon"
                onClick={() => navigateTwo()}
            />
        </div>
    );
};

export default Footer;

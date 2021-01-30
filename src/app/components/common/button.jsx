const Button = ({ text }) => {
    return (
        <button className="navigation hi">
            <span className="navigation--button">
                <span>
                    <span>
                        <span>{text.toUpperCase()}</span>
                    </span>
                </span>
            </span>
        </button>
    );
};

export default Button;

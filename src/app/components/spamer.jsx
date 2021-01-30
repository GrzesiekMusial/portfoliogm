import { blinking, indexMaker } from "../method/blink";

const Spamer = ({ errCode }) => {
    return (
        <span className="spammer">
            {errCode.name.split("").map((e, index) => (
                <span
                    key={errCode + index}
                    className="errCode"
                    id={indexMaker(index, errCode.id, errCode.list)}
                    onMouseEnter={() => blinking(index, errCode.list)}
                >
                    {e}
                </span>
            ))}
        </span>
    );
};

export default Spamer;

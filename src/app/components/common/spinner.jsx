import Loader from "react-loader-spinner";
const Spinner = () => {
    return (
        <Loader
            type="Rings"
            color="var(--base-special)"
            height={100}
            width={100}
        />
    );
};

export default Spinner;

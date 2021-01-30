import Navigation from "./common/navigation";
import Spamer from "./spamer";

const Home = () => {
    const text = [
        { id: "textOne", name: "I'm Grzesiek.", list: [] },
        {
            id: "textTwo",
            name: "I'm coding websites & apps.",
            list: [],
        },
    ];

    return (
        <div className="home">
            <div className="home__header">
                <div
                    data-aos="flip-right"
                    data-aos-delay="500"
                    data-aos-offset="-150"
                    data-aos-duration="1000"
                >
                    <span className="home__header--title ">
                        FRONTEND DEVELOPER
                    </span>
                </div>
                <h1 data-aos="fade-down-right" data-aos-offset="-150">
                    <span className="hi">Hi,</span> &nbsp;
                    {text.map((el) => (
                        <span key={el.id}>
                            <Spamer errCode={el} />
                            <br />
                        </span>
                    ))}
                </h1>
            </div>

            <div className="home__block">
                <div className="home__block--animation">
                    <div></div>
                </div>
                <div
                    className="home__block--info"
                    data-aos="zoom-out-left"
                    data-aos-delay="800"
                    data-aos-offset="-150"
                    data-aos-duration="500"
                >
                    <p>
                        I am a self-taught programmer from Cracow,
                        <br />
                        constantly expanding my knowledge, not only in the
                        frontend.
                        <br />I love automating things and processes, building
                        applications and solving bugs.
                    </p>
                </div>
            </div>

            <div className="navigationPanel">
                <Navigation text="my journey" path="/about" />
            </div>
        </div>
    );
};

export default Home;

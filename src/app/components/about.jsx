import Navigation from "./common/navigation";

import { projects } from "../config/journey.json";
import Button from "./common/button";

const About = () => {
    const showMore = (id) => {
        try {
            var offsetHeight = document.getElementById(`${id}-content`)
                .offsetHeight;

            document.getElementById(
                `${id}-text`
            ).style.cssText = `min-height: ${offsetHeight}px; max-height: ${offsetHeight}px`;

            document.getElementById(id).classList.add("project--info");
        } catch (ex) {}
    };

    return (
        <div className="home">
            <h1 className="hi" data-aos="fade-down">
                My journey . . .
            </h1>

            {projects.map((element) => (
                <section key={element.title}>
                    <div className="block" id={element.title}>
                        <div
                            className="block__text"
                            id={element.title + "-text"}
                        >
                            <div
                                className="block__text__header"
                                data-aos="fade-up-right"
                            >
                                <h2>{element.title}</h2>
                                <ul>
                                    {element.marks.map((mark, index) => (
                                        <li key={"mark" + index}>{mark}</li>
                                    ))}
                                </ul>
                                <div
                                    className="block__text__header--button"
                                    onClick={() => showMore(element.title)}
                                >
                                    <Button text="more info" />
                                </div>
                            </div>
                            <div
                                id={element.title + "-content"}
                                className="block__text__content"
                                data-aos="fade-up-right"
                                data-aos-offset="-150"
                            >
                                <p>{element.content}</p>
                            </div>
                        </div>
                        <div
                            className="block--image"
                            data-aos="fade-up-left"
                            data-aos-offset="0"
                        >
                            <img
                                src={element.image}
                                alt={element.title + " image"}
                            />
                        </div>
                    </div>
                    <br />
                    <br />
                </section>
            ))}

            <section data-aos="fade-up">
                <p>
                    <span className="hi">This experience path,</span> step by
                    step pushed me into scripting passion,
                </p>
                <p>and i decided to completely devote into that world.</p>
                <p>
                    I continue to build web apps, keep learning new features and
                    looking for my first job as a developer.
                </p>
            </section>
            <div className="navigationPanel">
                <Navigation path="/projects" text="projects" />
            </div>
        </div>
    );
};

export default About;

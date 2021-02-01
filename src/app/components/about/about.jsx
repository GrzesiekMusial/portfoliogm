import { projects } from "../../config/journey.json";
import Navigation from "../common/navigation";
import Block from "./block";

const About = () => {
    return (
        <div className="about">
            <h1 className="hi" data-aos="fade-down">
                My journey . . .
            </h1>

            {projects.map((element) => (
                <Block element={element} />
            ))}

            <section data-aos="fade-up">
                <p>
                    <span className="hi">And</span> step by step, that pushed me
                    into scripting passion,
                </p>
                <p>I decided to completely devote into that world.</p>
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

import React, { Component } from "react";
import { projects } from "../../config/projects.json";
import Block from "./block";

class Projects extends Component {
    render() {
        window.scrollTo(0, 0);

        return (
            <main className="main">
                <div className="project">
                    {projects.map((project, index) => (
                        <Block key={project + index} project={project} />
                    ))}
                </div>
            </main>
        );
    }
}

export default Projects;

import React, { Component } from "react";
import { projects } from "../../config/projects.json";
import Block from "./block";

class Projects extends Component {
    render() {
        return (
            <main className="main">
                <div className="projects">
                    {projects.map((project, index) => (
                        <Block key={project + index} project={project} />
                    ))}
                </div>
            </main>
        );
    }
}

export default Projects;

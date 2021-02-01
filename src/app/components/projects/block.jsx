const Block = ({ project }) => {
    return (
        <div className="project" data-aos="fade-up">
            <div className="project__header">
                <h3 className="project__header--title">{project.title}</h3>

                <div className="project__header--tech">
                    {project.tech.map((t) => (
                        <span key={t}>{t.toUpperCase()}</span>
                    ))}
                </div>
            </div>

            <div className="project__content">
                <p className="project__content--transcript">
                    {project.content}
                </p>
            </div>

            <div className="project__footer">
                {project.live && <a href={project.live}>LIVE</a>}

                {project.code && <a href={project.code}>CODE</a>}
            </div>
        </div>
    );
};

export default Block;

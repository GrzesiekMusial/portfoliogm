const Block = ({ project }) => {
    return (
        <div className="project__block" data-aos="fade-up">
            <div className="project__block__header">
                <h3 className="project__block__header--title">
                    {project.title}
                </h3>

                <div className="project__block__header--tech">
                    {project.tech.map((t) => (
                        <span key={t}>{t.toUpperCase()}</span>
                    ))}
                </div>
            </div>

            <div className="project__block__content">
                <p className="project__block__content--transcript">
                    {project.content}
                </p>
            </div>

            <div className="project__block__footer">
                {project.live && <a href={project.live}>LIVE</a>}

                {project.code && <a href={project.code}>CODE</a>}
            </div>
        </div>
    );
};

export default Block;

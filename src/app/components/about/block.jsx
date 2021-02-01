import Button from "../common/button";

const Block = ({ element }) => {
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
        <article key={element.title}>
            <div className="journey" id={element.title}>
                <div className="journey__text" id={element.title + "-text"}>
                    <div
                        className="journey__text__header"
                        data-aos="fade-up-right"
                    >
                        <h2>{element.title}</h2>
                        <ul>
                            {element.marks.map((mark, index) => (
                                <li key={"mark" + index}>{mark}</li>
                            ))}
                        </ul>
                        <div
                            className="journey__text__header--button"
                            onClick={() => showMore(element.title)}
                        >
                            <Button text="more info" />
                        </div>
                    </div>
                    <div
                        id={element.title + "-content"}
                        className="journey__text__content"
                        data-aos="fade-up-right"
                        data-aos-offset="-150"
                    >
                        <p>{element.content}</p>
                    </div>
                </div>
                <div
                    className="journey--image"
                    data-aos="fade-up-left"
                    data-aos-offset="0"
                >
                    <img src={element.image} alt={element.title + " image"} />
                </div>
            </div>
            <br />
            <br />
        </article>
    );
};

export default Block;

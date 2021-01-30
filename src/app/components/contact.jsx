import MyForm from "./form/Contact";

const Contact = () => {
    return (
        <div className="contact">
            <h1 data-aos="fade-up" data-aos-offset="-150">
                Let`s talk! <span className="hi">:)</span>
            </h1>
            <div data-aos="zoom-in" data-aos-delay="300" data-aos-offset="-150">
                <MyForm />
            </div>
        </div>
    );
};

export default Contact;

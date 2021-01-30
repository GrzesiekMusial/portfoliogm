import React from "react";
import Button from "./../common/button";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: "",
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form
                name="myForm"
                className="contactForm"
                onSubmit={this.submitForm}
                action="https://formspree.io/f/xwkwrjov"
                method="POST"
            >
                <label htmlFor="email">Email:</label>
                <input
                    placeholder="your email"
                    type="email"
                    name="email"
                    id="email"
                />
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    placeholder="leave me a message!"
                    type="text"
                    name="message"
                />
                {status === "SUCCESS" ? (
                    <p className="hi">THANKS! :)</p>
                ) : (
                    <Button text="submit" />
                )}
                {status === "ERROR" && (
                    <p className="hi">Ooops! There was an error.</p>
                )}
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}

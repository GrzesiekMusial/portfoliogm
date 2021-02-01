import { Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import NotFound from "./components/notFound";
import Projects from "./components/projects/projects";
import Home from "./components/home";
import About from "./components/about/about";
import Contact from "./components/contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/footer";
import { useState } from "react";

function App(props) {
    const [isMenu, setIsMenu] = useState(false);

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
        initClassName: "aos-init", // class applied after initialization
        animatedClassName: "aos-animate", // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        offset: 100, // offset (in px) from the original trigger point
        delay: 50, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: "ease", // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });

    return (
        <div id="App">
            <Header setIsMenu={setIsMenu} isMenu={isMenu} />

            <div className={isMenu ? "container container--blur" : "container"}>
                <img
                    alt="technologies"
                    src="https://res.cloudinary.com/gregor1494/image/upload/v1611775521/portfolio/tech_hkzydl.svg"
                    className="svg-tech"
                />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                    <Route path="/not-found" component={NotFound} />
                    <Redirect to="/not-found" />
                </Switch>
            </div>
            <img
                alt="footer"
                src="https://res.cloudinary.com/gregor1494/image/upload/v1611775793/portfolio/footer_txq26d.svg"
                className="svg-footer"
            />
            <Footer />
        </div>
    );
}

export default App;

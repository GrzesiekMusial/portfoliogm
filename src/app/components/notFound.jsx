import React from "react";
import Navigation from "./common/navigation";
import Spamer from "./spamer";

const NotFound = () => {
    const text = [
        { id: "textOne", name: "404", list: [] },
        {
            id: "textTwo",
            name: "NOT FOUND",
            list: [],
        },
    ];

    return (
        <>
            <div className="notFound">
                <div className="notFound--info">
                    <h1>
                        {text.map((el) => (
                            <div key={el.id}>
                                <Spamer errCode={el} />
                            </div>
                        ))}
                    </h1>
                </div>
                <div className="navigationPanel">
                    <Navigation path="/home" text="home" />
                </div>
            </div>
        </>
    );
};

export default NotFound;

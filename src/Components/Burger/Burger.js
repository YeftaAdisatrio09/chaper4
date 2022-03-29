//ga wajib
import React from "react";

import Bun from "./Bun";
import Cheese from "./Cheese";
import Lettuce from "./Lettuce";
import Patty from "./Patty";
import Tomato from "./Tomato";

const Burger = () => {
    const ingredients = ["patty", "lettuce", "patty", "bun", "patty", "chese", "patty", "tomato"];

    return (
        <React.Fragment>
            <Bun type="top" />
            {ingredients.map((item, index) => {
                switch (item) {
                    case "patty":
                        return <Patty key={index} />;

                    case "lettuce":
                        return <Lettuce key={index} />;

                    case "bun":
                        return <Bun type="insert" key={index} />;

                    case "chese":
                        return <Cheese key={index} />;

                    case "tomato":
                        return <Tomato key={index} />;

                    default:
                        return null;
                }
            })}
            {/* <Patty />
            <Lettuce />
            <Bun type="insert" />
            <Cheese />
            <Tomato /> */}
            <Bun />
        </React.Fragment>
    );
};

export default Burger;

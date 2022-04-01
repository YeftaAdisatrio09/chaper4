//ga wajib
import React, { useState } from "react";

import Bun from "./Bun";
import Cheese from "./Cheese";
import Lettuce from "./Lettuce";
import Patty from "./Patty";
import Tomato from "./Tomato";

import style from "./burger.module.css";

const Burger = (props) => {
    //const [ingredients, setIngredients] = useState(["patty", "lettuce", "patty", "bun", "patty", "chese", "patty", "tomato"]);
    //const ingredients = ["patty", "lettuce", "patty", "bun", "patty", "chese", "patty", "tomato"];

    // const [ingredients, setIngredients] = useState([]);
    // const addIngredients = (ingredients) => {
    //     setIngredients((prevState) => {
    //         const newIngridients = [ingredients, ...prevState];
    //         console.log(newIngridients);

    //         return newIngridients;
    //     });
    // };

    return (
        <div className={style.burger}>
            <Bun type="top" />
            {props.ingredients.map((item, index) => {
                switch (item) {
                    case "patty":
                        return <Patty key={index} />;

                    case "lettuce":
                        return <Lettuce key={index} />;

                    case "bun":
                        return <Bun type="insert" key={index} />;

                    case "cheese":
                        return <Cheese key={index} />;

                    case "tomato":
                        return <Tomato key={index} />;

                    default:
                        return null;
                }
            })}

            <Bun />
            {/* <button onClick={() => addIngredients("patty")}>patty</button>
            <button onClick={() => addIngredients("lettuce")}>lettuce</button>
            <button onClick={() => addIngredients("bun")}>bun</button>
            <button onClick={() => addIngredients("chese")}>chese</button>
            <button onClick={() => addIngredients("tomato")}>tomato</button> */}
        </div>
    );
};

export default Burger;

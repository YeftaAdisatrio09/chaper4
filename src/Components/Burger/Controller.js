import React from "react";

import AddButton from "./AddButton";
import MapItem from "./MapItem";
import style from "./controller.module.css";

const Controller = (props) => {
    return (
        <>
            <div className={style.ingredients_selector}>
                <h5>Add Ingridients</h5>
                <div>
                    <AddButton lable="Patty" clickHandler={() => props.addIngredientsHandler("patty")} />
                    <AddButton lable="Lettuce" clickHandler={() => props.addIngredientsHandler("lettuce")} />
                    <AddButton lable="Tomato" clickHandler={() => props.addIngredientsHandler("tomato")} />
                    <AddButton lable="Cheese" clickHandler={() => props.addIngredientsHandler("cheese")} />
                    <AddButton lable="Bun" clickHandler={() => props.addIngredientsHandler("bun")} />
                </div>
            </div>
            <div className={style.ingredients_map}>
                {props.ingredients.map((item, index) => {
                    return (
                        <>
                            <MapItem
                                lable={item}
                                key={index}
                                removeHandler={() => props.removeIngredientsHandler(index)}
                                upHandler={() => props.moveUpIngredientsHandler(index)}
                                downHandler={() => props.moveDownIngredientsHandler(index)}
                                firstItem={index === 0}
                                lastItem={index === props.ingredients.length - 1}
                            >
                                {" "}
                            </MapItem>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default Controller;

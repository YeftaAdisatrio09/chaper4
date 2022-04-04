import React, { useContext } from "react";
import BurgerContext from "../../Contex/BurgerContext";

import AddButton from "./AddButton";
import MapItem from "./MapItem";
import style from "./controller.module.css";

const Controller = () => {
    const ctx = useContext(BurgerContext);
    return (
        <>
            <div className={style.ingredients_selector}>
                <h5>Add Ingridients</h5>
                <div>
                    <AddButton lable="Patty" clickHandler={() => ctx.addIngredientsHandler("patty")} />
                    <AddButton lable="Lettuce" clickHandler={() => ctx.addIngredientsHandler("lettuce")} />
                    <AddButton lable="Tomato" clickHandler={() => ctx.addIngredientsHandler("tomato")} />
                    <AddButton lable="Cheese" clickHandler={() => ctx.addIngredientsHandler("cheese")} />
                    <AddButton lable="Bun" clickHandler={() => ctx.addIngredientsHandler("bun")} />
                </div>
            </div>
            <div className={style.ingredients_map}>
                {ctx.ingredients.map((item, index) => {
                    return (
                        <>
                            <MapItem
                                lable={item}
                                key={index}
                                removeHandler={() => ctx.removeIngredientsHandler(index)}
                                upHandler={() => ctx.MoveUpIngredientsHandler(index)}
                                downHandler={() => ctx.MoveDownIngredientsHandler(index)}
                                firstItem={index === 0}
                                lastItem={index === ctx.ingredients.length - 1}
                            />
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default Controller;

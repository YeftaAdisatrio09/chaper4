// import namefile from "namemodule"
import React, { useState } from "react";
import { Routes, Route } from "react-router";
import BurgerContext from "./Contex/BurgerContext";
//import Burger from "./Components/Burger/Burger";

// npm install react-router react-router-dom
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home";
import BurgerMaker from "./Pages/BurgerMaker";

function App() {
    const [ingredients, setIngredients] = useState([]);

    const addIngredientsHandler = (ingredient) => {
        setIngredients((prevState) => {
            const newState = [ingredient, ...prevState];
            return newState;
        });
    };

    const removeIngredientsHandler = (index) => {
        setIngredients((prevState) => {
            const newState = [...prevState];
            newState.splice(index, 1);
            return newState;
        });
    };

    const MoveUpIngredientsHandler = (index) => {
        setIngredients((prevState) => {
            const newState = [...prevState];
            const temp = newState[index - 1];
            newState[index - 1] = newState[index];
            newState[index] = temp;
            return newState;
        });
    };

    const MoveDownIngredientsHandler = (index) => {
        setIngredients((prevState) => {
            const newState = [...prevState];
            const temp = newState[index + 1];
            newState[(index = 1)] = newState[index];
            newState[index] = temp;
            return newState;
        });
    };
    return (
        <BurgerContext.Provider value={{ ingredients, setIngredients, addIngredientsHandler, removeIngredientsHandler, MoveUpIngredientsHandler, MoveDownIngredientsHandler }}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/burger-maker" element={<BurgerMaker />} />
                </Routes>
            </Layout>
        </BurgerContext.Provider>
    );
}

export default App;

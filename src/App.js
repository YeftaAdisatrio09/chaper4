// import namefile from "namemodule"
import React from "react";
import { Routes, Route } from "react-router";
import Burger from "./Components/Burger/Burger";

// npm install react-router react-router-dom

import Home from "./Pages/Home";
import BurgerMaker from "./Pages/BurgerMaker";

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/burger-maker" element={<BurgerMaker />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;

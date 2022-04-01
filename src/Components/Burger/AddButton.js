import React from "react";

import style from "./controller.module.css";

const AddButton = (props) => {
    return (
        <button className={style.add_buton} onClick={props.clickHandler}>
            {props.lable}
        </button>
    );
};

export default AddButton;

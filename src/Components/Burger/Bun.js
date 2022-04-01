import React from "react";
import style from "./burger.module.css";
//import styled from "styled-components";

// const StyledButton = styled.button`
//     margin: 100px;
//     color: Red;
// `;

const Bun = (props) => {
    // return <div className={`${style.bun}`}>{props.type}</div>;

    let bunClass;
    switch (props.type) {
        case "top":
            bunClass = style.bun_top;
            break;
        case "insert":
            bunClass = style.bun_insert;
            break;
        default:
            bunClass = "";
    }
    return <div className={`${style.bun} ${bunClass}`}></div>;
    // return (
    //     <div className={`${style.bun} ${bunClass}`}>
    //         <StyledButton>Button</StyledButton>
    //     </div>
    // );
};

export default Bun;

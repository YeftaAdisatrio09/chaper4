import React from "react";
//import Layout from "../Layouts/Layout";

import styled from "styled-components";

const Home = () => {
    return (
        <>
            <div>Welcome to burger Maker</div>
            <Button>Prest mee</Button>
        </>
    );
};

const Button = styled.button`
    background: blue;
`;

export default Home;

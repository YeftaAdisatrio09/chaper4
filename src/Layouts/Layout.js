import React from "react";
import Navigation from "./Navigation";
import MainContent from "./MainContent";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Navigation />
            <MainContent>{props.children}</MainContent>
        </React.Fragment>
    );
};

export default Layout;

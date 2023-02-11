import React from "react";
import ReactDOM from 'react-dom'
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";

const AppLayout = () => {
    return (
        <div className="app">
            {/* <Header/> */}
            <Body/>
            {/* <Footer/> */}
        </div>
    )
} 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
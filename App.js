import React from "react";
import ReactDOM from "react-dom";
import Body from "./src/components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

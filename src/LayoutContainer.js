import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

function LayoutContainer() {
  return (
    <div className="layout__container">
      <Sidebar />
      <Main />
    </div>
  );
}

export default LayoutContainer;
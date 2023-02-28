import React from "react";
import Form from "./Form";
import Image from "./Image";
import Text from "./Text";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <Form />
        <Image />
        <Text />
      </div>
    </div>
  );
}

export default Sidebar;
import React from 'react';

function ToggleButton(props) {
  return (
    <button onClick={props.onClick} className={props.isActive ? "btn__degrees active" : "btn__degrees"}>
      <a href="/" className={props.isActive ? "cel" : "fah"}>{props.isActive ? "°C" : "°F"}</a>
    </button>
  );
}

export default ToggleButton;
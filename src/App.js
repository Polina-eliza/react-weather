import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Rome" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://thunderous-custard-314647.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
           Polina Eliza Lipse
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Polina-eliza/react-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://effervescent-kangaroo-09ac13.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
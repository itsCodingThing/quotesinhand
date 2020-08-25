import React from "react";
import QuoteGen from "./QuoteGen";

function App() {
  return (
    <div className="main">
      <header>
        <h1 className="hero">Quotes in Hand</h1>
        <div id="emoji-container">
          <div id="emoji"></div>
        </div>
      </header>

      <QuoteGen />
      <footer>
        <div className="innerbox">
          created by{" "}
          <a href="https://itsCodingThing.vercel.app/" target="__blank">
            itsCodingThing
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
export default App;

import React from "react";
import QuoteGen from "./QuoteGen";

function App() {
  return (
    <div className="container d-flex flex-column main">
      <header>
        <h1 className="hero text-center">
          Quotes in Hand <span className="emoji">🙌</span>
        </h1>
      </header>

      <QuoteGen />
      <footer className="mt-auto text-center">
        <div className="innerbox">
          <p>
            created by{" "}
            <a href="https://itsCodingThing.now.sh/" target="__blank">
              itsCodingThing
            </a>{" "}
            powered by{" "}
            <a href="https://quotesondesign.com/" target="__blank">
              QuotesOnDesign
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
export default App;

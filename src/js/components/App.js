import React from "react";
import QuoteGen from "./Quote";
export default class App extends React.Component {
  render() {
    return (
      <div className="container d-flex flex-column main">
        <header>
          <h1 className="hero text-center">Quotes in Hands</h1>
        </header>

        <QuoteGen />
        <footer className="mt-auto text-center">
          <div className="innerbox">
            <p>
              created by
              <a href="https://itsCodingThing.now.sh/" target="__blank">
                itsCodingThing
              </a>
              powered by
              <a href="https://quotesondesign.com/" target="__blank">
                QuotesOnDesign
              </a>
              .
            </p>
          </div>
        </footer>
        <style jsx>{`
          .hero {
            font-family: "Playfair Display", serif;
          }

          header {
            margin-bottom: 2rem;
          }

          .main {
            height: 100vh;
          }
        `}</style>
      </div>
    );
  }
}

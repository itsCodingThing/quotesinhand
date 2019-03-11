import React from "react";
import Container from "react-bootstrap/Container";
import QuoteGen from "./Quote";
export default class App extends React.Component {
  render() {
    return (
      <Container className="d-flex flex-column">
        <h1 className="header text-center">Quotes in Hands</h1>
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
        <style jsx>{`
          .header {
            font-family: "Playfair Display", serif;
          }
        `}</style>
      </Container>
    );
  }
}

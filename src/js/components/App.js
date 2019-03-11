import React from "react";
import Container from "react-bootstrap/Container";
import QuoteGen from "./Quote";
export default class App extends React.Component {
  render() {
    return (
      <Container className="d-flex flex-column">
        <h1 className="header text-center">Quotes in Hands</h1>
        <QuoteGen />
        <style jsx>{`
          .header {
            font-family: "Playfair Display", serif;
          }
        `}</style>
      </Container>
    );
  }
}

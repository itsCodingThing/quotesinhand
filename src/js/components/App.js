import React from "react";
import Quote from "./Render";
import Container from "react-bootstrap/Container";
import { getQuotes } from "../utils/fetchQuotes";

export default class App extends React.Component {
  state = {
    quote: {},
    showLoader: true,
    disableBtn: true
  };

  componentDidMount() {
    getQuotes().then(res => {
      this.setState(() => ({ quote: res }));
      this.toggleLoader();
    });
  }

  toggleLoader = () => {
    this.setState(({ showLoader, disableBtn }) => ({
      showLoader: !showLoader,
      disableBtn: !disableBtn
    }));
  };

  changeQuote = () => {
    this.toggleLoader();

    getQuotes().then(res => {
      this.setState(() => ({ quote: res }));
      this.toggleLoader();
    });
  };

  render() {
    let { quote, showLoader, disableBtn } = this.state;
    return (
      <Container className="d-flex flex-column">
        <h1 className="header text-center">Quotes in Hands</h1>
        <div className="wrapper text-center">
          <blockquote className="blockquote text-center">
            <Quote content={quote} showLoader={showLoader} />
          </blockquote>
          <button
            className="btn btn-primary btn-sm"
            disabled={disableBtn}
            onClick={this.changeQuote}
          >
            Next Quote
          </button>
        </div>

        <style jsx>{`
          .wrapper {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }

          .header {
            font-family: "Playfair Display", serif;
          }
        `}</style>
      </Container>
    );
  }
}

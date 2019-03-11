import React, { Component } from "react";
import Quote from "./Render";
import { getQuotes } from "../utils/fetchQuotes";

let BlockQuote = ({ quote, showLoader }) => (
  <blockquote className="blockquote text-center">
    <Quote content={quote} showLoader={showLoader} />
  </blockquote>
);

export default class QuoteGen extends Component {
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
      <div className="wrapper text-center">
        <BlockQuote quote={quote} showLoader={showLoader} />
        <button className="btn btn-primary btn-sm">Prev Quote</button>
        <button
          className="btn btn-primary btn-sm"
          disabled={disableBtn}
          onClick={this.changeQuote}
        >
          Next Quote
        </button>
        <style jsx>{`
          .wrapper {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }

          button {
            margin-right: 2rem;
            margin-left: 2rem;
          }
        `}</style>
      </div>
    );
  }
}

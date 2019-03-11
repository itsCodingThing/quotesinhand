import React, { Component } from "react";
import Quote from "./Render";
import { getQuotes } from "../utils/utils";

let BlockQuote = ({ quote, showLoader }) => (
  <blockquote className="blockquote text-center">
    <Quote content={quote} showLoader={showLoader} />
  </blockquote>
);

export default class QuoteGen extends Component {
  state = {
    quote: [{}],
    nextQ: {},
    showLoader: true,
    disableBtn: true
  };

  componentDidMount() {
    getQuotes().then(res => {
      this.setState(prevState => ({
        quote: [...prevState.quote, res],
        nextQ: res,
        showLoader: !prevState.showLoader,
        disableBtn: !prevState.disableBtn
      }));
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
      this.setState(({ quote, showLoader, disableBtn }) => ({
        quote: [...quote, res],
        nextQ: res,
        showLoader: !showLoader,
        disableBtn: !disableBtn
      }));
    });
  };

  render() {
    let { quote, showLoader, disableBtn, nextQ } = this.state;
    console.log(quote);
    return (
      <div className="wrapper text-center">
        <BlockQuote quote={nextQ} showLoader={showLoader} />
        <div className="buttonBox d-flex justify-content-around">
          <button className="btn btn-primary btn-sm" disabled={disableBtn}>
            Prev
          </button>
          <button
            className="btn btn-primary btn-sm"
            disabled={disableBtn}
            onClick={this.changeQuote}
          >
            Next
          </button>
        </div>
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

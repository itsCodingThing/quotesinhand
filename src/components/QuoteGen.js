import React, { useEffect, useState } from "react";

import { getQuotes } from "../utils/utils";

function Quote({ quote, showLoader }) {
  if (showLoader) {
    return (
      <div className="loader">
        <h3>Loading...</h3>
      </div>
    );
  } else {
    return (
      <blockquote className="blockquote">
        <div className="quote">
          <p>{quote.content}</p>
        </div>
        <footer className="blockquote-footer" id="qoute-title">
          <small>-{quote.title}</small>
        </footer>
      </blockquote>
    );
  }
}

function QuoteGen() {
  const [state, setState] = useState({
    quote: {},
    showLoader: true,
    disableBtn: true,
  });
  const { quote, showLoader, disableBtn } = state;

  useEffect(() => {
    getQuotes().then((res) => {
      setState({ quote: { ...res }, showLoader: false, disableBtn: false });
    });
  }, []);

  const changeQuote = () => {
    setState({ showLoader: true, disableBtn: true });
    getQuotes().then((res) => {
      setState({ quote: { ...res }, showLoader: false, disableBtn: false });
    });
  };

  return (
    <div className="wrapper">
      <Quote quote={quote} showLoader={showLoader} />
      <button className="btn" disabled={disableBtn} onClick={changeQuote}>
        Change
      </button>
    </div>
  );
}

export default QuoteGen;

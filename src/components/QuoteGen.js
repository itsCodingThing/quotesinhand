import React, { useEffect, useState } from "react";

import { getQuotes } from "../utils/utils";

function Quote({ content: quote, showLoader }) {
  if (showLoader) {
    return <h5>Loading...</h5>;
  } else {
    return (
      <div className="box">
        <div className="quote">{quote.content}</div>
        <footer className="blockquote-footer text-right" id="qoute-title">
          {quote.title}
        </footer>
      </div>
    );
  }
}

function BlockQuote({ quote, showLoader }) {
  return (
    <blockquote className="blockquote text-center">
      <Quote content={quote} showLoader={showLoader} />
    </blockquote>
  );
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
    <div className="wrapper text-center">
      <BlockQuote quote={quote} showLoader={showLoader} />
      <div className="buttonBox d-flex justify-content-around">
        <button
          className="btn btn-success btn-md"
          disabled={disableBtn}
          onClick={changeQuote}
        >
          Change Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteGen;

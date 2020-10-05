import React, { useState } from "react";

import { getQuotes } from "../utils/utils";

function Quote({ quote, loading }) {
  if (loading) {
    return (
      <blockquote className="blockquote">
        <div className="quote">
          <p>{quote.content}</p>
        </div>
        <footer className="blockquote-footer" id="qoute-title">
          <small> -{quote.title}</small>
        </footer>
      </blockquote>
    );
  } else {
    return (
      <blockquote className="blockquote fadeInRight">
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
    quote: {
      title: "Albert Einstein",
      content: "Try not to become a man of success, but rather try to become a man of value.",
    },
    loading: false,
    disableBtn: false,
  });
  const { quote, loading, disableBtn } = state;

  const changeQuote = () => {
    setState({ loading: true, disableBtn: true, quote });
    getQuotes().then(({ title, content }) => {
      setState({ quote: { title, content }, loading: false, disableBtn: false });
    });
  };

  return (
    <div className="wrapper">
      <Quote quote={quote} loading={loading} />

      <div className="btn-group">
        <div
          className={loading ? "btn-circle rotate" : "btn-circle btn-hover"}
          disabled={disableBtn}
          onClick={changeQuote}
        ></div>
        <button className="btn btn-hover">Copy</button>
      </div>
    </div>
  );
}

export default QuoteGen;

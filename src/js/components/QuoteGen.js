import React from "react";
import Loader from "react-loader-spinner";

import { getQuotes } from "../utils/utils";

function getMarkUp(markup) {
  return {
    __html: markup,
  };
}

function RenderFooter(quote) {
  return (
    <footer
      className="blockquote-footer text-right"
      id="qoute-title"
      dangerouslySetInnerHTML={getMarkUp(quote.title)}
    />
  );
}

function RenderQuotes(quote) {
  return (
    <React.Fragment>
      <div className="quote" dangerouslySetInnerHTML={getMarkUp(quote.content)} />
      <style jsx>{`
        .quote {
          animation: fadeInRight 1s ease-out;
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </React.Fragment>
  );
}

function Quote({ content, showLoader }) {
  if (showLoader) {
    return <Loader type="Bars" color="#6927ff" height="100" width="100" />;
  } else {
    return (
      <div className="box">
        <RenderQuotes {...content} />
        <RenderFooter {...content} />
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
  const [state, setState] = React.useState({
    quote: {},
    showLoader: true,
    disableBtn: true,
  });
  const { quote, showLoader, disableBtn } = state;

  React.useEffect(() => {
    getQuotes().then((res) => {
      setState({ quote: { ...res }, showLoader: false, disableBtn: false });
    });
  }, []);

  function changeQuote() {
    setState({ showLoader: true, disableBtn: true });
    getQuotes().then((res) => {
      setState({ quote: { ...res }, showLoader: false, disableBtn: false });
    });
  }

  return (
    <div className="wrapper text-center">
      <BlockQuote quote={quote} showLoader={showLoader} />
      <div className="buttonBox d-flex justify-content-around">
        <button className="btn btn-primary btn-sm" onClick={() => console.log("prev btn")} disabled={disableBtn}>
          Prev
        </button>
        <button className="btn btn-primary btn-sm" disabled={disableBtn} onClick={changeQuote}>
          Next
        </button>
      </div>
      <style jsx>{`
        .wrapper {
          padding-top: 2rem;
          padding-bottom: 2rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }

        button {
          margin-right: 2rem;
          margin-left: 2rem;
        }

        @media (min-width: 992px) {
          .wrapper {
            padding-right: 5rem;
            padding-left: 5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default QuoteGen;

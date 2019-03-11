import React from "react";
import Loader from "react-loader-spinner";

function getMarkUp(markup) {
  return {
    __html: markup
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
      <div
        className="quote"
        dangerouslySetInnerHTML={getMarkUp(quote.content)}
      />
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

export default function Quote({ content, showLoader }) {
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

import React from "react";

function getMarkUp(markup) {
  return {
    __html: markup
  };
}

let RenderFooter = quote => {
  return (
    <footer className="blockquote-footer text-right" id="qoute-title">
      {quote.title}
    </footer>
  );
};

let RenderQuotes = quote => {
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
};

export { RenderFooter, RenderQuotes };

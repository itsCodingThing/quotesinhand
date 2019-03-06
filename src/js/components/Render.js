import React from "react";

function getMarkUp(markup) {
  return {
    __html: markup
  };
}

let RenderFooter = quote => {
  return (
    <footer
      className="blockquote-footer text-right"
      id="qoute-title"
      dangerouslySetInnerHTML={getMarkUp(quote.title)}
    />
  );
};

let RenderQuotes = quote => {
  return <div dangerouslySetInnerHTML={getMarkUp(quote.content)} />;
};

export { RenderFooter, RenderQuotes };

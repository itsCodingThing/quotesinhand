import React from "react";

export default () => {
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="wrapper text-center">
        <h1 className="text-center">Quotes in hands</h1>
        <blockquote className="blockquote text-right">
          <p className="mb-0" id="qoute-content">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante."
          </p>
          <footer className="blockquote-footer" id="qoute-title">
            Source Title
          </footer>
        </blockquote>
        <button className="btn btn-primary">Generate</button>
      </div>
    </div>
  );
};

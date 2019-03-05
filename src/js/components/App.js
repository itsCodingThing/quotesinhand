import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
// url: `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=${n}`

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

async function getQuotes(num) {
  let qoute;
  let n = getRandomInt(num);

  qoute = await axios
    .get(
      `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=${n}`
    )
    .then(res => {
      let { data } = res;
      if (data.length > 1) {
        let randomQuote = getRandomInt(data.length);
        return {
          title: data[randomQuote].title,
          content: data[randomQuote].content
        };
      } else {
        return {
          title: data[0].title,
          content: data[0].content
        };
      }
    });

  return qoute;
}

let RenderQuotes = qoute => {
  console.log(qoute.content);
  console.log(qoute.title);

  return (
    <Fragment>
      {qoute.content}
      <footer className="blockquote-footer" id="qoute-title">
        {qoute.title}
      </footer>
    </Fragment>
  );
};

export default class App extends React.Component {
  state = {
    quote: {}
  };

  componentDidMount() {
    getQuotes(10).then(res => {
      this.setState(() => ({ quote: res }));
    });
  }

  changeQoute = () => {
    getQuotes(10).then(res => {
      this.setState(() => ({ quote: res }));
    });
  };

  render() {
    return (
      <div className="container d-flex align-items-center justify-content-center">
        <div className="wrapper text-center">
          <h1 className="text-center">Quotes in hands</h1>
          <blockquote className="blockquote text-right">
            <RenderQuotes {...this.state.quote} />
          </blockquote>
          <button className="btn btn-primary" onClick={this.changeQoute}>
            Generate
          </button>
        </div>
      </div>
    );
  }
}

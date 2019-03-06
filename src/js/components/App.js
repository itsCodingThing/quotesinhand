import React from "react";
import axios from "axios";
import { RenderFooter, RenderQuotes } from "./Render";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

async function getQuotes(num) {
  let quote;
  let n = getRandomInt(num);

  quote = await axios
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

  return quote;
}

export default class App extends React.Component {
  state = {
    quote: {}
  };

  componentDidMount() {
    getQuotes(10).then(res => {
      this.setState(() => ({ quote: res }));
    });
  }

  changeQuote = () => {
    getQuotes(10).then(res => {
      this.setState(() => ({ quote: res }));
    });
  };

  render() {
    return (
      <div className="container d-flex align-items-center justify-content-center">
        <div className="wrapper text-center">
          <h1 className="text-center">Quotes in Hands</h1>
          <blockquote className="blockquote text-center">
            <RenderQuotes {...this.state.quote} />
            <RenderFooter {...this.state.quote} />
          </blockquote>
          <button className="btn btn-primary" onClick={this.changeQuote}>
            Next Quote
          </button>
        </div>
      </div>
    );
  }
}

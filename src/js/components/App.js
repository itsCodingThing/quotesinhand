import React from "react";
import axios from "axios";
import { RenderFooter, RenderQuotes } from "./Render";

async function getQuotes() {
  let quote;

  quote = await axios.get("https://node-quote.herokuapp.com/").then(res => {
    console.log(res);
    let { data } = res;
    return data;
  });

  return quote;
}

export default class App extends React.Component {
  state = {
    quote: {}
  };

  componentDidMount() {
    getQuotes().then(res => {
      this.setState(() => ({ quote: res }));
    });
  }

  changeQuote = () => {
    getQuotes().then(res => {
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

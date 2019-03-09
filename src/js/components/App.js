import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { RenderFooter, RenderQuotes } from "./Render";

async function getQuotes() {
  let quote;

  quote = await axios
    .get("https://node-quote.herokuapp.com/quote/")
    .then(res => {
      let { data } = res;
      return data;
    });

  return quote;
}

let Quote = ({ content, showLoader }) => {
  console.log(content);

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
};

export default class App extends React.Component {
  state = {
    quote: {},
    showLoader: true,
    disableBtn: true
  };

  componentDidMount() {
    getQuotes().then(res => {
      this.setState(() => ({ quote: res }));
      this.toggleLoader();
    });
  }

  toggleLoader = () => {
    this.setState(({ showLoader, disableBtn }) => ({
      showLoader: !showLoader,
      disableBtn: !disableBtn
    }));
  };

  changeQuote = () => {
    this.toggleLoader();

    getQuotes().then(res => {
      this.setState(() => ({ quote: res }));
      this.toggleLoader();
    });
  };

  render() {
    return (
      <div className="container d-flex flex-column">
        <h1 className="header text-center">Quotes in Hands</h1>
        <div className="wrapper text-center">
          <blockquote className="blockquote text-center">
            <Quote
              content={this.state.quote}
              showLoader={this.state.showLoader}
            />
          </blockquote>
          <button
            className="btn btn-primary btn-sm"
            disabled={this.state.disableBtn}
            onClick={this.changeQuote}
          >
            Next Quote
          </button>
        </div>

        <style jsx>{`
          .container {
            padding-top: 5rem;
          }
          .wrapper {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }

          .header {
            font-family: "Playfair Display", serif;
          }
        `}</style>
      </div>
    );
  }
}

import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { RenderFooter, RenderQuotes } from "./Render";

async function getQuotes() {
  let quote;

  quote = await axios.get("https://node-quote.herokuapp.com/").then(res => {
    let { data } = res;
    return data;
  });

  return quote;
}

let Quote = ({ content, showLoader }) => {
  console.log(content);

  if (showLoader) {
    return <Loader type="Bars" color="#008000" height="100" width="100" />;
  } else {
    return (
      <React.Fragment>
        <RenderQuotes {...content} />
        <RenderFooter {...content} />
      </React.Fragment>
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
      <div className="container d-flex flex-column justify-content-center">
        <h1 className="text-center">Quotes in Hands</h1>
        <div className="wrapper text-center">
          <blockquote className="blockquote text-center">
            <Quote
              content={this.state.quote}
              showLoader={this.state.showLoader}
            />
          </blockquote>
          <button
            className="btn btn-primary"
            disabled={this.state.disableBtn}
            onClick={this.changeQuote}
          >
            Next Quote
          </button>
        </div>

        <style jsx>{`
          .wrapper {
            height: 50vh;
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
        `}</style>
      </div>
    );
  }
}

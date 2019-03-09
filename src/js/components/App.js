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
          <span
            className="next"
            disabled={this.state.disableBtn}
            onClick={this.changeQuote}
          >
            Next Quote >
          </span>
        </div>
        <footer className="mt-auto text-center">
          <div className="innerbox">
            <p>
              created by{" "}
              <a href="https://itsCodingThing.now.sh/" target="__blank">
                itsCodingThing
              </a>{" "}
              powered by{" "}
              <a href="https://quotesondesign.com/" target="__blank">
                QuotesOnDesign
              </a>
              .
            </p>
          </div>
        </footer>

        <style jsx>{`
          .container {
            padding-top: 5rem;
            height: 100vh;
          }

          .next {
            background-color: transparent;
            border-radius: none;
            cursor: pointer;
            font-weight: bold;
            font-size: 1.2rem;
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

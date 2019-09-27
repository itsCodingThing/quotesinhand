import axios from "axios";

async function getQuotes() {
  let quote = await axios.get("https://node-quote.herokuapp.com/quote/").then((res) => {
    let { data } = res;
    return data;
  });

  return quote;
}

export { getQuotes };

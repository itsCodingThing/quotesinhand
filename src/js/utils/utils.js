import axios from "axios";

async function getQuotes() {
  try {
    let quote = await axios.get("https://node-quote.herokuapp.com/quote/");
    return quote.data;
  } catch (error) {
    return {
      title: "Ooopss!!!",
      content: "no quotes available at this moment 🙏",
    };
  }
}

export { getQuotes };

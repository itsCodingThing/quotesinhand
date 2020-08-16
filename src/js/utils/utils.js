import axios from "axios";

async function getQuotes() {
  try {
    const { data } = await axios.get("https://node-quote.herokuapp.com/quote/");
    return data;
  } catch (error) {
    return {
      title: "Ooopss!!!",
      content: "no quotes available at this moment 🙏",
    };
  }
}

export { getQuotes };

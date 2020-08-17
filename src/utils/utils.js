export function getQuotes() {
  return fetch("https://node-quote.herokuapp.com/quote/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch(() => {
      return {
        title: "Ooopss!!!",
        content: "no quotes available at this moment 🙏",
      };
    });
}

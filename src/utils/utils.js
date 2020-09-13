export function getQuotes() {
  return fetch("https://node-quote.herokuapp.com/quote/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { ok, response } = data;

      if (ok) {
        return { title: response.title, content: response.content };
      } else {
        return { title: "-", content: "There is problem please try again" };
      }
    });
}

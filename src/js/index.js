$("window").ready(function() {
  $(".btn").click(function() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
    let n = getRandomInt(1, 10);
    console.log(n);
    $.ajax({
      url: `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=${n}`,
      success: function(data) {
        console.log(data);
        let ran = getRandomInt(1, n);
        let title = data[ran].title;
        let content = data[ran].content;
        $("#qoute-title").text(title);
        $("#qoute-content").html(content);
      }
    });
  });
});

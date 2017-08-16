getQuote();

$("button").click(function() {
  getQuote();
});

function getQuote() {
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/?",
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(response) {
      $("#get-quote").html(
        "''" + response.quoteText + "''" +
          "<br/>"
      );
      $("#tweet-quote").attr(
        "href",
        "https://twitter.com/intent/tweet?hashtags=RandomQuotes " +
          response.quoteText
      );
    }
  });
}
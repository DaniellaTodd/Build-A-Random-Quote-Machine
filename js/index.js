$(document).ready(function() {
  
  function quoteMachine() {
    $.ajax({
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
      type: "post",
      headers: {
        "X-Mashape-Key": "1Xuhcdh7NsmshWXJ9mNNa3ChMDpvp1fIoBNjsnLnPJiwUxrMGO"
      },
      dataType: "json",
      success: function(quoteRecieved) {
        $("#get-quote").text('~' + quoteRecieved.quote + '~');
        $("#tweet-quote").attr(
          "href",
          "https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&text= " +
            quoteRecieved.quote
        );
      }
    });
    
  }
  //when button is clicked, quote should change
  $("button").click(function() {
    quoteMachine();
  });
  quoteMachine();
});

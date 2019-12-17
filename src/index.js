const fetch = require("node-fetch")
import $ from 'jquery'

$(document).ready(() => {
  // have fun!
  $.get("https://wordwatch-api.herokuapp.com/api/v1/top_word", function(data){
    $('.top-word').append(Object.keys(data.word))
    $('.word-count').append(Object.values(data.word))
}); //end get

  $('#breaker').click(function() {
    var textStack = $('textArea').val();
    console.log(textStack)
  });


}); //end doc .ready

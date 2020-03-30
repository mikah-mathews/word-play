$(document).ready(function() {

  $("form#sentenceInput").submit(function(event) {
    var sentence = $("#sentence").val();
    var words = sentence.split(" ");

    var longWords = [];

    words.forEach(function(word) {
      if(word.length >= 3) {
        longWords.push(word);
      }
    });
    
    // reverse the sentence
    longWords.reverse();
    // join the sentence back together
     var finalSentence = longWords.join(" ");
    // this will print sentence to page
     $("#output").append(finalSentence);
     $("#output").append("</br>");
    
    event.preventDefault();
  });
});
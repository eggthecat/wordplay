$(document).ready(function() {
  $("#questions").submit(function(event){
    var str = $("#sent1").val();

    event.preventDefault();

var words = str.split(' ');
var combine = words.join();
var newList = words.forEach(function(things) {
  // console.log(things);
});
var newNewList = words.forEach(function(words) {
  console.log(words.length);
});

$("#answerArea").show();
$('#display').text(words);
// $('#display').text((words).split(" "));
// console.log(words);
// console.log(combine);
});
});

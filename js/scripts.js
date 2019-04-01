$(document).ready(function() {
  $("#questions").submit(function(event){
    var str = $("#sent1").val();

    event.preventDefault();

var words = str.split(' ');
var combine = words.join();
$("#answerArea").show();
$('#display').text(words);
// $('#display').text((words).split(" "));
console.log(words);
console.log(combine);
});
});

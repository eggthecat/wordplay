$(document).ready(function() {
  $("#questions").submit(function(event){
    var str = $("#sent1").val();

    event.preventDefault();

var words = str.split(' ');
// $('#display').text((words).split(" "));
console.log(words);
});
});

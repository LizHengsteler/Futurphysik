$(document).ready(function(){
$( "#weltganz" ).click(function() {
    $( "#welt1" ).css("display", "block");
    $( "#welt2" ).css("display", "block");
    $( "#welt3" ).css("display", "block");
    $( "#welt4" ).css("display", "block");
  });
  $( "#welt1" ).click(function() {
    $( "#info1" ).fadeIn();

  });
});
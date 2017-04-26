////////////////////// Business Interface Logic ///////////////////////


////////////////////// User Interface Logic ////////////////////
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var beverageInput = $("#beverage").val();
    var musicInput = $("#music").val();
    var icecreamInput = $("input:radio[name=flavor]:checked").val();

    $(".beverage").text(beverageInput);
    $(".music").text(musicInput);
    $(".icecream").text(icecreamInput);
    event.preventDefault();
  });


});

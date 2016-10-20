$(document).ready(function() {
  $("form").submit(function(event) {
    var animals = $("#animals").val();

    if (animals === "1") {
    alert("You selected turtles!");
    $(".turtles").show();
  }  else if (animals === "2") {
    alert("You selected snakes!");
    $(".snakes").show();
  }  else if (animals === "3") {
    $(".ants").show();
    alert("You selected ants!");
  } else if (animals === "4") {
    $(".crickets").show();
    alert("You selected crickets!");
  } else {
    alert("You didn't select anything!");
  }

    event.preventDefault();
  });
});

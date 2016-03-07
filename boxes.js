$(document).ready(function() {

  // Exercise 2
  // $('#secretBox').css("background-color", "white").append("<h1>secret box!</h1>");
  // $('#row1').children().removeAttr('class').addClass("box boxType3");
  // $('#row4').children().last().css("display", "none");
  // $('.boxType1').css("background-color", "white");
  // $('#row2 div:lt(2)').removeClass().width("2px");
  // $('.box').not("#secretBox").width("2px");

  // Exercise 3
  var offset;
  $('#container').on('click', function where(e) {
    console.log("X coord: " + e.pageX);
    console.log("Y coord: " +e.pageY);
  });
  $('.boxType1').append("<a href='galvanize.com'>Escape Here</a>");
  $('a').click(function(e){
    event.preventDefault();
    alert("JK THERE IS NO ESCAPE");
  });
  $('.box').click(function(e) {
    $(e.target).toggleClass("puppy");
  });

// Write a click handler on the container div. 
// The click handler should turn the container background to black and the 
// background of the original div that was clicked to white. If the user original 
// div that was clicked happened to be the container div, change the background 
// of the container div to lime green. You should not use any selectors for 
// this exercise. You can do it completely with what is given to you in the event callback.

// If I click ANYWHERE in the container
  $('#container').click(function(e) {
    // Check if you clicked on nothing but the container
    if (e.target === this) {
      $(e.target).css("background-color", "lime");
    } else {
    // If you clicked on an item INSIDE the container
    // Container will turn black and item turns white
      $('#container').css("background-color", "black");
      $(e.target).css("background-color", "white");
    }
  });

});
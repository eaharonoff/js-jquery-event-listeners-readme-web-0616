//define functions here
function getIt() {
  $('p').click(function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').load(function() {
    $( this ).addClass( "tasty"); 
  });
}

function pressIt() {
  $( '#typing' ).bind("keydown",function(key) {
    if (key.which === 71) {
      alert("You pressed 'g'!");
    }
 })
}
// Define a function submitIt that does not accept a parameter. 
//The function should bind a submit event to the form that alerts "Your form is going to be submitted now.".
function submitIt() {
  $('form').submit(function() {
    alert("Your form is going to be submitted now.");
  });
}


$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()

});

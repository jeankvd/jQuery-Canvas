//P-Can't input change to canvas
//A-When user clicks, we should paint on canvas
var $canvas = $('canvas');
var color = $(".selected").css('background-color');
var context = $canvas[0].getContext('2d');
var mouseDown = false;
var lastEvent;
//When clicking on control items
$('.controls').on('click', 'li', function(){
  //Deselect element
 
  $(this).siblings().removeClass('selected');
  
   //Select new element
  $(this).addClass('selected');
  
  color = $(".selected").css('background-color');
});

  

//When new color is pressed
  //show or hide color select

$('#revealColorSelect').click(function(){
  changeColor();
  $('#colorSelect').toggle();
});

function changeColor () {
  //When color sliders change
  //Update new color span
  var $red = $('#red').val();
  var $blue = $('#blue').val();
  var $green = $('#green').val();
  $('#newColor').css('background-color', 'rgb(' + $red + ',' + $green + ',' + $blue + ')' );
  
};

$('input[type=range]').change(changeColor);

//When add color is pressed


$('#addNewColor').on('click', function() {
  //Append the color to the controls ul
  var $newColor = $('<li></li>');
  $newColor.css('background-color', $('#newColor').css('background-color'))
  $('.controls ul').append($newColor);
  
  //Select new color
  $newColor.click();
  
});


//On mouse events on canvas

$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  
  if (mouseDown) {
  context.beginPath();
  context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
  context.lineTo(e.offsetX, e.offsetY);
  context.strokeStyle = color;
  context.stroke();
  lastEvent = e;
    }
}).mouseup(function(){
           
           mouseDown = false;
           
           }).mouseleave(function(){
           
           mouseDown = false;
           
           });

//Draw lines














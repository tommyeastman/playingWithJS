//loads the document, all jQuery code goes inside that wrapper
$(function(){

  //hide all links when click on object with ID myButton
  $("#myButton").click(function(){
    $("li").hide();
  });

  //turn text blue and big once clicked on
  $("p").click(function(){
    $(this).css({"color": "blue","font-size": "200%"});
  });

  //turn text blue and bold once hovered on, and back to normal after
  $("p").mouseenter(function(){
    $(this).css({"color": "blue","font-weight": "bold"});
  });
  $("p").mouseleave(function(){
    $(this).css({"color": "black","font-weight": "normal"});
  });

});

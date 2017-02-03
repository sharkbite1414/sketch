$(document).ready(function(){
  for (i=0; i<16; i++) {
    $("#area").append("<div class='box'></div>");
  };
  $(".box").hover(function(){
    $(this).addClass("selected");
  });
  $("#reset").click(function(){
    $(".box").removeClass("selected");
  });
});

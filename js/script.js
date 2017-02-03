$(document).ready(function(){
  // initilise grid
  var gridSize=16;
  makeGrid(gridSize);

  // hover effect
  $(".box").hover(function(){
    $(this).addClass("selected");
  });

  // reset grid color
  $("#reset").click(function(){
    resetCol();
  });

  // Change grid size button
  $("#size").click(function(){
    gridSize = Number(prompt("Enter grid size","16"));
    makeGrid(gridSize)
  });
});

// Functions
// Set grid size
function makeGrid(gridSize) {
  resetCol();
  for (i=0; i<gridSize; i++) {
    $("#area").append("<div class='row" + i +"''></div>")
    for (j=0; j<gridSize; j++) {
      $(".row" +i).append("<div class='box'></div>");
    };
  };
};

// Reset grid color
function resetCol() {
  $(".selected").removeClass("selected");
}

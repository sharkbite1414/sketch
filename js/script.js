$(document).ready(function(){
  // initilise grid
  var gridSize=16;
  makeGrid(gridSize);

  // hover effect
  hovCol();

  // reset grid color
  $("#reset").click(function(){
    resetCol();
  });

  // Change grid size button
  $("#size").click(function(){
    gridSize = Number(prompt("Enter grid size","16"));
    makeGrid(gridSize)
  });

  // Delete grid
  $("#del").click(function () {
    delGrid();
  });

  // Functions
  // Set grid size
  function makeGrid(gridSize) {
    delGrid();
    for (i=0; i<(gridSize*gridSize); i++) {
      $("#area").append("<div class='box " + i +"'></div>")
      // Changed the top line from making row divs to just make all the boxes, removing the need for the second for loop.
      //for (j=0; j<gridSize; j++) {
        //$("."+i+"").append("<div class='box'></div>");
      //};
    };
    hovCol();
  };

  // Reset grid color
  function resetCol() {
    $(".selected").removeClass("selected");
  }

  // Hover effect (change color)
  function hovCol() {
    $(".box").hover(function(){
      $(this).addClass("selected");
    });
  }

  // Remove the grid
  function delGrid() {
    $(".box").remove();
    $(".row").remove();
  }



}); // End document read function

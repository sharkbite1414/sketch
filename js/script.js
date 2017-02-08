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
    makeGrid(gridSize);
  });

  // Toggle grid lines
  $("#gridLines").click(function(){
    $(".box").toggleClass("boxGridline");
    $("#area").toggleClass("outerGridline");
  });

  // Random Colors
  // BUG: random colors don't reset on reset button click due to no class being added for reset function to remove.
  $("#RandColBut").click(function () {
    $(".box").hover(function () {
      $(this).css("background-color", function () {
        return "rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+")";
      });
    });
  });

  // Functions
  // Set grid size
  function makeGrid(gridSize) {
    // Delete previous grid
    delGrid();
    // Get width of container div and set box width accordingly
    var areaWidth = $("#area").width();
    var test = 0;
    var boxWidth = areaWidth / gridSize;
    // Get height of container div and set box height
    var areaHeight = $("#area").height();
    var boxHeight = areaHeight / gridSize;
    //debugging
    console.log("areaWidth",areaWidth,"boxWidth",boxWidth,"areaHeight",areaHeight,"boxHeight",boxHeight );

    // Make box divs
    for (i=0; i<(gridSize*gridSize); i++) {
      $("#area").append("<div class='box " + i +"'></div>");
    }

    //debugging
    console.log("Number of box divs",$(".box").length);
    // Set box width and height
    $(".box").width(boxWidth);
    $(".box").height(boxHeight);
    // Run hover function
    hovCol();
  }

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
    $("#area").removeClass("outerGridline");
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

}); // End document read function

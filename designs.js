// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var origColor;
function makeGrid() {
  var inputHeight = $("#inputHeight").val();
  var inputWidth = $("#inputWeight").val();
  origColor = $("#pixelCanvas").val();

  //just in case if the users create the grid again reset that
  resetGridToDefault();

  for (let it = 0; it < inputHeight; it++) {
    $("#pixelCanvas").append(
      "<tr class='row'>" + "<td class='col'></td>".repeat(inputWidth) + "</tr>"
    );
  }
  toastr.success("A Grid is created successfully!");
}

$("#sizePicker").on("click", function(e) {
  e.preventDefault();
});

function resetGridToDefault() {
  Array.from($("tr")).forEach(element => {
    element.remove();
  });
}

function resetDom() {
  var con = confirm(
    "Are you sure you want to rebuild the grid? All drawings and the canvas will be reset"
  );
  if (!con) {
    return;
  }
  var col = $("tr,td");
  Array.from(col).forEach(element => {
    $(element).remove();
  });
  $("#inputHeight").prop("value", 1);
  $("#inputWeight").prop("value", 1);
  toastr.warning("The Grid is reset successfully!");
}

function resetGrid() {
  var con = confirm(
    "Are you sure you want to reset the grid? All drawings will be reset"
  );

  if (con) {
    var col = $("#pixelCanvas,tr,td");
    if (col != "undefined") {
      Array.from(col).forEach(element => {
        $(element).removeAttr("style");
      });
    }
  }
  toastr.warning("The Grid is cleared successfully!");
}

$("#pixelCanvas").click(function(e) {
  var color = $("#colorPicker").val();
  $(e.target).css("background-color", color);
});

$("#pixelCanvas").dblclick(function(e) {
  $(e.target).removeAttr("style");
});

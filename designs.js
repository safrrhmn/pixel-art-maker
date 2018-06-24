var PixelArtMaker = {};
const GRID_HEIGHT = "inputHeight";
const GRID_WIDTH = "inputWidth";
const SUBMIT = "submit";
const CANVAS = "pixelCanvas";
let vCANVAS;
let vELEM_SUBMIT;
let vHEIGHT;
let vWIDTH;

PixelArtMaker.Events = {
  onClickSubmit: function(onElemnet, element) {}
};

PixelArtMaker.Grid = {
  createProperteis: function() {
    PixelArtMaker.vELEM_SUBMIT = document.getElementById(SUBMIT);
    PixelArtMaker.vHEIGHT = document.getElementById(GRID_HEIGHT).value;
    PixelArtMaker.vWIDTH = document.getElementById(GRID_WIDTH).value;
    PixelArtMaker.vCANVAS = document.getElementById(CANVAS);
  },
  createGrid: function() {
    console.log(
      `Grid vHEIGHT is ${PixelArtMaker.vHEIGHT} and vWIDTH is ${
        PixelArtMaker.vWIDTH
      }`
    );
    for (let i = 0; i < PixelArtMaker.vHEIGHT; i++) {
      PixelArtMaker.vCANVAS.append(
        "<tr class='row'>" +
          "<td class='col'></td>".repeat(PixelArtMaker.vWIDTH) +
          "</tr>"
      );
    }
  }
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("submit").addEventListener("click", function(ev) {
    ev.preventDefault();
    PixelArtMaker.Grid.createProperteis();
    PixelArtMaker.Grid.createGrid();
  });
});

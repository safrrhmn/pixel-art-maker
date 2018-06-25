var PixelArtMaker = {};
const GRID_HEIGHT = "inputHeight";
const GRID_WIDTH = "inputWidth";
const SUBMIT = "submit";
const CANVAS = "pixelCanvas";
const COLOR = "colorPicker";
let vCanvas;
let vElemSubmit;
let vHeight;
let vWidth;
let vCurrentBackgroundColor;
let vDefaultColor;

PixelArtMaker.Events = {
  paint: function() {
    document.getElementById(CANVAS).addEventListener("click", function(ev) {
      let selectedColor = document.getElementById(COLOR).value;
      ev.target.style.backgroundColor = selectedColor;
    });
  },
  clear: function() {
    document.getElementById(CANVAS).addEventListener("dblclick", function(ev) {
      ev.target.style.backgroundColor = PixelArtMaker.vDefaultColor;
    });
  }
};

PixelArtMaker.Grid = {
  createProperteis: function() {
    PixelArtMaker.vElemSubmit = document.getElementById(SUBMIT);
    PixelArtMaker.vHeight = document.getElementById(GRID_HEIGHT).value;
    PixelArtMaker.vWidth = document.getElementById(GRID_WIDTH).value;
    PixelArtMaker.vCanvas = document.getElementById(CANVAS);
    PixelArtMaker.vDefaultColor = document.getElementById(
      CANVAS
    ).style.backgroundColor;
  },
  createGrid: function() {
    console.log(
      `Grid vHeight is ${PixelArtMaker.vHeight} and vWidth is ${
        PixelArtMaker.vWidth
      }`
    );
    for (let i = 0; i < PixelArtMaker.vHeight; i++) {
      let tr = document.createElement("tr");
      for (let width = 0; width < PixelArtMaker.vWidth; width++) {
        let td = document.createElement("td");
        tr.append(td);
      }
      document.getElementById(CANVAS).append(tr);
    }
  }
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("submit").addEventListener("click", function(ev) {
    ev.preventDefault();
    PixelArtMaker.Grid.createProperteis();
    PixelArtMaker.Grid.createGrid();
    PixelArtMaker.Events.paint();
    PixelArtMaker.Events.clear();
  });
});

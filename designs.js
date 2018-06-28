var PixelArtMaker = {};
const GRID_HEIGHT = "inputHeight";
const GRID_WIDTH = "inputWidth";
const SUBMIT = "submit";
const CANVAS = "pixelCanvas";
const CANVASDIV = "tableDiv";
const COLOR = "colorPicker";
const FORM = "sizePicker";
const RESET = "restart";
let vCanvas;
let vElemSubmit;
let vHeight;
let vWidth;
let vCurrentBackgroundColor;
let vDefaultColor;

PixelArtMaker.Events = {
  paint: function() {
    document
      .getElementById(CANVAS)
      .addEventListener("click", handleEvent, false);
    document
      .getElementById(CANVAS)
      .addEventListener("mouseover", handleEvent, false);

    function handleEvent(ev) {
      if (ev.target.tagName === "TD") {
        let selectedColor = document.getElementById(COLOR).value;
        ev.target.style.backgroundColor = selectedColor;
      }
    }
  },
  clear: function() {
    document.getElementById(CANVAS).addEventListener("dblclick", function(ev) {
      ev.target.style.backgroundColor = PixelArtMaker.vDefaultColor;
    });
  },
  clearAll: function() {
    document.getElementById(CANVAS).innerHTML = "";
  },
  restart: function() {
    document.getElementById(RESET).addEventListener("click", function() {
      window.location.reload();
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
  makeGrid: function() {
    for (let i = 0; i < PixelArtMaker.vHeight; i++) {
      let tr = document.createElement("tr");
      for (let width = 0; width < PixelArtMaker.vWidth; width++) {
        let td = document.createElement("td");
        tr.append(td);
      }
      document.getElementById(CANVAS).append(tr);
    }
  },
  destroyForm: function() {
    document.getElementById(FORM).remove();
    document.getElementById(RESET).removeAttribute("hidden");
    document.getElementById(CANVASDIV).removeAttribute("hidden");
  }
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById(SUBMIT).addEventListener("click", function(ev) {
    ev.preventDefault();
    PixelArtMaker.Grid.createProperteis();
    PixelArtMaker.Events.clearAll();
    PixelArtMaker.Grid.destroyForm();
    PixelArtMaker.Grid.makeGrid();
    PixelArtMaker.Events.paint();
    PixelArtMaker.Events.clear();
    PixelArtMaker.Events.restart();
  });
});

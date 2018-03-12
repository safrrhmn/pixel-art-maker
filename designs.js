var PixelArtMaker = {};
PixelArtMaker.Generic = {
  sortGridHeighWidth: function(sort) {
    $(sort).sortable();
    console.debug("${sort} is sorted");
  }
};

PixelArtMaker.Events = {
  onClickSubmit: function(onElemnet, element) {
    $(onElemnet).click(function(evt) {
      evt.preventDefault();
      $(element).effect("explode");
    });
  }
};

PixelArtMaker.Grid = {
  createGrid: function(canvas) {
    const height = $("inputHeight").val();
    const width = $("inputWidth").val();
    for (let i = 0; i < height; i++) {
      $(canvas).append(
        "<tr class='row'>" + "<td class='col'></td>".repeat(width) + "</tr>"
      );
    }
  }
};

$(function() {
  PixelArtMaker.Generic.sortGridHeighWidth("#sortable");
  PixelArtMaker.Events.onClickSubmit("#submit", "#sizePicker");
  PixelArtMaker.Grid.createGrid("#pixelCanvas");
});

function main() {
  // What to execute when script is run
  placeFiles();
  // alert("Done Loading")
}

function scrollPage() {
  // Scroll to Contents
  $('html, body').animate({
    scrollTop: $("#body").offset().top
  }, 500);
}

function placeFiles() {
  // Get to files

  // Place Buttons for files
  var table = document.getElementById("files_table");
  for(i = 0; i < 2; i++) {
    var row = table.insertRow(1 + i);
    row.insertCell(0).innerHTML = "File Name";
    row.insertCell(1).innerHTML = "<a href=\"./res/img/grad_bg.jpg\">Download</a>";
  }
}

window.onload = main;
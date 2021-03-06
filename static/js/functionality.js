function main() {
  // What to execute when script is run
  stylePage();
  placeFiles();
}

function scrollPage() {
  // Scroll to Contents
  $('html, body').animate({
    scrollTop: $("#body").offset().top
  }, 500);
}

function placeFiles() {
  // Get to files
  $.ajax({
    url: "/files",
    type: 'POST',
    success: function (data) {
      // Place Buttons for files
      var table = document.getElementById("files_table");
      for (var i = 0; i < data.files.length; i++) {
        var row = table.insertRow(1 + i);

        // Make label
        row.insertCell(0).innerHTML = "<p>" + data.files[i] + "</p>";

        // Make button
        row.insertCell(1).innerHTML = '<a href="/static/res/share/' + data.files[i] + '" download><button>Get Now!</button></a>';
      }
    }
  });
}

function stylePage() {
  // Get the design of the website
  $.ajax({
    url: "/design",
    type: 'POST',
    success: function (data) {
      // Make and place title of the website
      var title = document.createElement('h1');
      title.textContent = data.title;
      document.getElementById("title").prepend(title);

      // Place the schedule title
      document.getElementById("schedule_title").textContent = data.schedule_table.title;
      var schedule_table = document.getElementById("schedule");

      // Get the list of rows in the table, make and place them
      for (var i = 0; i < data.schedule_table.rows.length; i++){
        var type = document.createElement('td');
        var day = document.createElement('td');
        var place = document.createElement('td');
        var time = document.createElement('td');

        type.innerText = data.schedule_table.rows[i].type;
        day.innerText = data.schedule_table.rows[i].day;
        place.innerText = data.schedule_table.rows[i].place;
        time.innerText = data.schedule_table.rows[i].time;

        var new_row = document.createElement('tr');
        new_row.appendChild(type);
        new_row.appendChild(day);
        new_row.appendChild(place);
        new_row.appendChild(time);
        schedule_table.appendChild(new_row);
      }

      // Format the message
      document.getElementById("messageTitle").innerHTML = data.message_to_students.title
      document.getElementById("messageText").innerHTML = data.message_to_students.message
      document.getElementById("signed").innerHTML = "- " + data.message_to_students.author
    }
  });
}

$(document).ready(main);
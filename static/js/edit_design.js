function populate_design_sheet() {
    $.ajax({
        url: "/design",
        type: 'POST',
        success: function (data) {
            document.getElementById("message").innerHTML = data.message_to_students.message;
        }
    });
}
$(document).on("ready", function () {
  $("#submit").on("click", function () {
    $.ajax({
      method: "POST",
      url: "/api/profiles"
    }).then(function (results) {
      console.log(results)
    })
  })



});
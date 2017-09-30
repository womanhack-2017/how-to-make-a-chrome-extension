$(document).ready(function() {
  $("div.main").html("<h2>this is from JS</h2>")

  $("div.main").click(function(u) {
    u.preventDefault();

    var root = 'https://jsonplaceholder.typicode.com';

    $.ajax({
      url: root + '/posts/1',
      method: 'GET',
    })
      .done(function(response) {
        $(".main").html(response.body)
      })
      .fail(function(response) {
        console.log("********");
        console.log(response);
      });
  });


});

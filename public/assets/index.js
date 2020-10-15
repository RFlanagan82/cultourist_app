$(document).ready(function () {
  $(".dropdown-trigger").dropdown();
  $('select').formSelect();

  // const submitUserSearch = $("#userSearch");
  

  // submitUserSearch.on("submit", function(event) {
  //   event.preventDefault()
  //   let userID = $(this).userID;
  //   $.ajax({
  //     method: "GET",
  //     url: "/manage/user/" + userID
  //   }).then(location.replace("/manage/user/" + userID))
  //   console.log($(this));
  // });


});


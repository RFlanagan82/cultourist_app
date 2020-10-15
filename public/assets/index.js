$(document).ready(function () {
  $(".dropdown-trigger").dropdown();
  $("select").formSelect();

  $("#newUserForm").on("submit", (event) => {
    event.preventDefault();
    const newName = { full_name: $("#newUser").val() };
    console.log("submitted");
    $.post("/api/create-user", newName).then((data) => {
      console.log(data);
      location.reload();
    });
  });
});

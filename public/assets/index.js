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


// if(User.numOfPosts < 5){
//   badge = "re"
// } else if (User.numOfPosts >= 5 && User.numOfPosts < 10){
//   badge = "ree"
// }else if (User.numOfPosts >= 10 && User.numOfPosts < 25){
//   badge = "reee"
// }else if (User.numOfPosts >= 25){
//   badge = "reeee"
// }






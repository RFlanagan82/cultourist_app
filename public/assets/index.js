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

  $("#deleteBtn").on("click", function(event) {
    event.preventDefault();
    //console.log("clicked me", this)
    let id = $(this).attr("data-id")
    //console.log($(this).parent());
    $.ajax({
      method: "DELETE",
      url: "/api/post/" + id
    }).then(function(results) {
      console.log(results)
      console.log("test")
      location.reload();
    })
  })
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






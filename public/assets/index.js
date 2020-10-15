$(document).ready(function () {
  $(".dropdown-trigger").dropdown();
  $("select").formSelect();

  $("#newUserForm").on("submit", (event) => {
    event.preventDefault();
    const newName = { full_name: $("#newUser").val() };
    console.log("submitted");
    $.post("/api/create-user", newName).then((data) => {
      console.log(data);
      //location.reload();
    });
  });

  $("#deleteBtn").on("click", function (event) {
    event.preventDefault();
    //console.log("clicked me", this)
    let id = $(this).attr("data-id");
    //console.log($(this).parent());
    $.ajax({
      method: "DELETE",
      url: "/api/post/" + id,
    }).then(function (results) {
      console.log(results);
      location.reload();
    });
  });

  $("#post-id").on("submit", function (event) {
    event.preventDefault();
    // console.log(this);
    // console.log($("#category option:selected").text());

    const category = $("#category option:selected").text();
    const name = $("#name option:selected").val();
    const country = $("#country option:selected").val();
    const title = $("#title").val();
    const insight = $("#body").val();

    const newPost = {
      title: title,
      body: insight,
      category: category,
      CountryId: country,
      UserId: name,
    };
    console.log(newPost);
    $.post("/api/newpost", newPost).then(function (results) {
      console.log(results);
      location.reload();
    });
  });
});

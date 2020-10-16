//JAVASCRIPT FOR APP IN DOCUMENT.READY
$(document).ready(function () {
  // initializers for materialize dropdowns and selects
  $(".dropdown-trigger").dropdown();
  $("select").formSelect();

  //EVENT LISTENER FOR NEW USER FORM SUBMISSION & POST ROUTE
  $("#newUserForm").on("submit", (event) => {
    event.preventDefault();
    const newUser = $("#newUser").val();
    if (newUser === "") {
      $("#newUserError").text("User name cannot be blank.");
    } else {
      const newName = { full_name: $("#newUser").val() };
      console.log("submitted");
      $.post("/api/create-user", newName).then((data) => {
        console.log(data);
        location.reload();
      });
    }
  });

  //EVENT LISTENER FOR DELETE POST ON CLICK & DELETE ROUTE
  $(".deleteBtn").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr("data-id");
    $.ajax({
      method: "DELETE",
      url: "/api/post/" + id,
    })
      .then(function (results) {
        console.log(results);
        location.reload();
      })
      .catch((err) => console.log(err));
  });

 //EVENT LISTENER FOR SUBMIT BUTTON ON UPDATE POST BUTTON CLICK
 $("#postUpdate").on("submit", function (event) {
    event.preventDefault();
    let id = $("#updateSubmitBtn").attr("data-id");
    let userId = $("#updateSubmitBtn").attr("data-user");
    let title = $("#title").val();
    let body = $("#body").val();

    // VALIDATION
    if (title === "") {
      $("#updateTitleError").text("Title cannot be blank.");
    }
    if (body === "") {
      $("#updateBodyError").text("Insight cannot be blank.");
    } else {
      const updatedPost = {
        title: title,
        body: body,
      };
      $.ajax({
        type: "PUT",
        url: "/update/" + id,
        data: updatedPost,
      })
        .then((data) => {
          console.log(data);
          location.replace("/manage/user/" + userId);
        })
        .catch((err) => console.log(err));
    }
  });
 
  //EVENT LISTENER FOR NEW POST SUBMISSION- CREATE ROUTE
  $("#post-id").on("submit", function (event) {
    event.preventDefault();
    $("#userError").text("");
    $("#countryError").text("");
    $("#categoryError").text("");
    $("#titleError").text("");
    $("#bodyError").text("");

    const category = $("#category option:selected").text();
    const name = $("#name option:selected").val();
    const country = $("#country option:selected").val();
    const title = $("#title").val();
    const insight = $("#body").val();

    // VALIDATION
    if (name === "") {
      $("#userError").text("You must a pick user.");
    }
    if (country === "") {
      $("#countryError").text("You must a pick country.");
    }
    if (category === "Choose a Category") {
      $("#categoryError").text("You must a pick category.");
    }
    if (title === "") {
      $("#titleError").text("Title cannot be blank.");
    }
    if (insight === "") {
      $("#bodyError").text("Insight cannot be blank.");
    } else {
      const newPost = {
        title: title,
        body: insight,
        category: category,
        CountryId: country,
        UserId: name,
      };
      $.post("/api/newpost", newPost).then(function (results) {
        console.log(results);
        location.reload();
      });
    }
  });
});

$(document).ready(function () {
  $(".dropdown-trigger").dropdown();
  $("select").formSelect();

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

  $(".deleteBtn").on("click", function (event) {
    event.preventDefault();
    //console.log("clicked me", this)
    let id = $(this).attr("data-id");
    //console.log($(this).parent());
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

  $("#postUpdate").on("submit", function (event) {
    event.preventDefault();
    let id = $("#updateSubmitBtn").attr("data-id");
    let userId = $("#updateSubmitBtn").attr("data-user");
    let title = $("#title").val();
    let body = $("#body").val();

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

  $("#newPost").on("submit", function (event) {
    event.preventDefault();
    $("#userError").text("");
    $("#countryError").text("");
    $("#categoryError").text("");
    $("#titleError").text("");
    $("#bodyError").text("");
    // console.log(this);
    // console.log($("#category option:selected").text());

    const category = $("#category option:selected").text();
    const name = $("#name option:selected").val();
    const country = $("#country option:selected").val();
    const title = $("#title").val();
    const insight = $("#body").val();
    console.log(category);

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
      console.log(newPost);
      $.post("/api/newpost", newPost).then(function (results) {
        console.log(results);
        location.reload();
      });
    }
  });
});

// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function (example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function () {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function (id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list


// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var userAttempt = {
    username: $exampleText.val().trim(),
    password: $exampleDescription.val().trim()
  };


  if (!(userAttempt.username && userAttempt.password)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(userAttempt).then(function () {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

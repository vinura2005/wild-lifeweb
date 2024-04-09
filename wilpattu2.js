document.addEventListener("DOMContentLoaded", function() {
    // Find the logout button by its class name
    var logoutButton = document.querySelector(".loginBtn");

    // Add a click event listener to the logout button
    logoutButton.addEventListener("click", function() {
        // Redirect to index.html
        window.location.href = "Wilpattu National Park.html";
    });
});


// Function to toggle content editing
function editContent() {
  var paragraphs = document.getElementsByTagName("p");
  var headings = document.getElementsByTagName("h1");
  var images = document.getElementsByTagName("img");

  // Enable editing for paragraphs
  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];
    paragraph.contentEditable = true;
    paragraph.style.border = "1px solid black"; // Add visual indication of editable content
  }

  // Enable editing for headings
  for (var i = 0; i < headings.length; i++) {
    var heading = headings[i];
    heading.contentEditable = true;
    heading.style.border = "1px solid black"; // Add visual indication of editable content
  }

  // Enable editing for images
  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    image.contentEditable = true;
    image.style.border = "1px solid black"; // Add visual indication of editable content
  }
}
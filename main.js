// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Select all hearts
  const hearts = document.querySelectorAll(".like-glyph");
  const errorModal = document.getElementById("modal");
  const errorMessage = document.getElementById("modal-message");


  // Initially hide the error modal
  errorModal.classList.add("hidden");

  // Loop through each heart and add a click event listener
  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      // Simulate server request
      mimicServerCall()
        .then(() => {
          // Toggle between full and empty heart
          if (heart.textContent === "♡") {
            heart.textContent = "♥"; // Full heart
            heart.classList.add("activated-heart");
          } else {
            heart.textContent = "♡"; // Empty heart
            heart.classList.remove("activated-heart");
          }
        })
        .catch((error) => {
          // Display error modal
          errorMessage.textContent = error;
          errorModal.classList.remove("hidden");

          // Hide error modal after 3 seconds
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


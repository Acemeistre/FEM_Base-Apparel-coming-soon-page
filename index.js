// 1. Grab the HTML elements we need to interact with
const form = document.querySelector("form");
const input = document.querySelector("input");
const errorMsg = document.querySelector(".error-msg");

// 2. Regex pattern to check for a valid email structure:
//    /          -> start and end of regex
//    ^          -> start of text
//    [^\s@]+    -> 1 or more characters that aren't spaces or @ (username)
//    @          -> literal @ symbol
//    [^\s@]+    -> 1 or more characters that aren't spaces or @ (domain)
//    \.         -> literal dot (escaped with \)
//    [^\s@]+    -> 1 or more characters that aren't spaces or @ (extension like .com)
//    $          -> end of text
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 3. Listen for the form being submitted (via button click or pressing Enter)
form.addEventListener("submit", (e) => {
  // Stop the browser from reloading the page on submit
  e.preventDefault();

  // Trim extra spaces and test if the email fails our regex pattern
  // (An empty string "" also returns false, catching empty submissions too)
  if (!emailPattern.test(input.value.trim())) {
    // Add the .error class so CSS reveals the red border, icon, and message
    form.classList.add("error");
    errorMsg.classList.add("error");

    // Tell screen readers the input currently has an invalid value
    input.setAttribute("aria-invalid", "true");
  } else {
    // Email is valid: remove the .error classes to hide all error styling
    form.classList.remove("error");
    errorMsg.classList.remove("error");

    // Tell screen readers the input is valid again and clear the field
    input.setAttribute("aria-invalid", "false");
    input.value = "";
  }
});

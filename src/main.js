import "./style.css";

const REQUIRED = ["name", "email", "password", "confirmPassword"];

const form = document.querySelector("form");
const result = document.querySelector("#result");

// CSS attribute selector.
const submitBtn = form.querySelector('[type="submit"]');

submitBtn.disabled = true; // Start disabled

form.addEventListener("input", () => {
  // Does EVERY form input field have a non-empty value?
  REQUIRED.every((field) => form[field].value.trim() !== "")
    ? (submitBtn.disabled = false) // If yes, enable button
    : (submitBtn.disabled = true); // If no, disable button
});

// make sure that the password and confirm password fields match before enabling the submit button
const passwordField = form.querySelector("#password");
const confirmPasswordField = form.querySelector("#confirmPassword");
form.addEventListener("input", () => {
  const passwordsMatch = passwordField.value === confirmPasswordField.value;
  if (!passwordsMatch) {
    confirmPasswordField.setCustomValidity("Passwords do not match");
  } else {
    confirmPasswordField.setCustomValidity("");
  }
});
// If the password and confirmPassword fields do not match, display an error message in the <output> tag. If they do match, clear any error message.
form.addEventListener("input", () => {
  const passwordsMatch = passwordField.value === confirmPasswordField.value;
  if (!passwordsMatch) {
    result.innerHTML = `<p class="text-red-500 space-y-4 mx-auto max-w-md rounded border">Passwords do not match</p>`;
  } else {
    result.innerHTML = "";
  }
});

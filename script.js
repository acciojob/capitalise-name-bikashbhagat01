//your JS code here. If required.
// Get the input element by its id
const inputField = document.getElementById('fname');

// Add an event listener to trigger when the input field loses focus (onblur event)
inputField.addEventListener('blur', function() {
  // Convert the input value to uppercase
  inputField.value = inputField.value.toUpperCase();
});
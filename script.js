const toggleContainer = document.getElementById("toggleContainer");

toggleContainer.addEventListener("click", function(event) {
  const target = event.target;

  if (target.id === "toggleButton") {
    // Replace the button with an input field
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "inputField";
    inputField.placeholder = "Other"; // Set the placeholder text
    inputField.style.opacity = "0.5"; // Adjust the opacity value


    toggleContainer.replaceChild(inputField, target);

    inputField.addEventListener("blur", function() {
      // If the input field is empty, replace it with the button again
      if (inputField.value.trim() === "") {
        toggleContainer.replaceChild(target, inputField);
      } else {
        target.textContent = "Edit Input";
      }
    });

    inputField.focus();
  }
  
});

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    // Toggle the highlighting class for all buttons
    buttons.forEach(btn => btn.classList.remove("highlighted"));
    this.classList.add("highlighted");

    // Logic for toggling input field and button text remains the same
  });
});

const favoriteButton = document.getElementById("favoriteButton");
let isFavorite = false;

favoriteButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the anchor tag from navigating

  // Toggle the favorite state
  isFavorite = !isFavorite;

  // Update the button text based on the state
  if (isFavorite) {
    favoriteButton.textContent = "Remove Favorite";
  } else {
    favoriteButton.textContent = "Favorite";
  }

  // You can add more logic here, such as storing the favorite state in localStorage, etc.
});

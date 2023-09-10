

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
let buttonCount = 1;

function addButton() {
    const buttonContainer = document.getElementById('button-container');

    // Ask for a title using a prompt dialog
    const buttonTitle = prompt('Enter button title:');
    if (!buttonTitle) {
        return; // If the user cancels or enters an empty title, do nothing
    }

    const newButton = document.createElement('button');
    newButton.classList.add('new-button');
    newButton.textContent = buttonTitle;
    buttonContainer.appendChild(newButton);
    buttonCount++;
}
const button = document.querySelectorAll('.button');

button.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected');
    });
});
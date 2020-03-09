console.log("form inputs, to-do list, patterns for building apps");



// add a listener to make a console log happen when the button is clicked
// 1. grab button with id #add-item
const addItemButton = document.querySelector('#add-item')

// 2. add listener to the button that listens for click and provide that
// listener with an arrow function to run 
addItemButton.addEventListener('click', () => {
  console.log("the add item button was clicked");
})


console.log("form inputs, to-do list, patterns for building apps");



// add a listener to make a console log happen when the button is clicked
// 1. grab button with id #add-item
const addItemButton = document.querySelector('#add-item')

// 2. add listener to the button that listens for click and provide that
// listener with an arrow function to run 
addItemButton.addEventListener('click', () => {
  console.log("the add item button was clicked");
})


// the above pattern works great for clicks but forms are designed
// to communicate information to servers
// instead of listening for 'click' on the button
// we should listen for 'submit' on the form
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
// The default behavior of form submission is to try to send 
// form info to a server
// so instead of listening for `click` on button, 
// we want to listen for 'submit' on the form
// this is a totally separate event







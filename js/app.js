console.log("form inputs, to-do list, patterns for building apps");



// add a listener to make a console log happen when the button is clicked
// 1. grab button with id #add-item
const addItemButton = document.querySelector('#add-item')

// 2. add listener to the button that listens for click and provide that
// listener with an arrow function to run 
// addItemButton.addEventListener('click', () => {
//   console.log("the add item button was clicked");
// })


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

const itemAddingForm = document.querySelector('#item-adding-form')
itemAddingForm.addEventListener('submit', (event) => {
  // default behavior of forms is sending info to server
  // (that's how the internet works)
  // but we don't want that here
  // we want to PREVENT the DEFAULT behavior
  // turns out we can do this using a method attached to the 
  // event object!!! 
  event.preventDefault() // <--- stops the form submission

  console.log("form submitted");
})

// note: form submission also automatically happens when you hit enter
// (while an element in the form is focused)


// ex:
// make the text in the form print tot he console when the form is submitted
// bonus: also clear the input field when form is submitted


console.log("form inputs, to-do list, patterns for building apps");




// Classes -- put at the top
class ToDo {

  constructor(itemContent) {
    // the text of the todo item
    this.itemContent = itemContent

    // timestamp
    this.time = new Date()

    // stretch 
    // completed
    // due date

  }

}

// test our todo Class
const t = new ToDo('Testing 123')
console.log(t);





// we need somewhere for all of our app's logic and state to live
// analogous to main(), game object, 
const app = {

}







/// listeners -- put them at the bottom 
// they should just focus on collecting info -- they should not contain logic
// logic lives in app or game object







// add a listener to make a console log happen when the button is clicked
// 1. grab button with id #add-item
// const addItemButton = document.querySelector('#add-item')

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

  // find the input field
  const itemTextInput = document.querySelector('#item-text-input')
  // get the text from it
  // log that text 
  console.log(itemTextInput.value);

  // clear the form 
  itemTextInput.value = ""

  // console.log("form submitted");
})

// note: form submission also automatically happens when you hit enter
// (while an element in the form is focused)


// ex:
// make the text in the form print to the console when the form is submitted
// google: "how do I get the input from a form field MDN"
// bonus: also clear the input field when form is submitted


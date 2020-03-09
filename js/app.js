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





// we need somewhere for all of our app's logic and state to live
// analogous to main(), game object, 
const app = {
  /// STATE -- all relevant information about the app at any point ///

  // our instantiated todos should live here
  todos: [],

  addTodo: function(str) {
    // instantiate a ToDo
    const todo = new ToDo(str)

    // push into the array
    this.todos.push(todo)

    // reflect that change to the app's state 
    // i.e. show the user something has changed
    this.printTodos()
  },
  // Ex.
  // 1. add a method here in the app object called addToDo that takes a string
  // as a param and instantiates a new ToDo using that string and stores it in 
  // the array of todos 

  // 2. test by using your browser console: app.addTodo('i added this')

  // 3. when all of that is working, call your addTodo from the event listener
  // (the one on form submit) and pass in the text you got from the input field

  // 4. at this point you should be able to type things into the form and then
  // see them by checking app.todos in your console -- double check that this 
  // is working



  // ex. 
  // 0 -- make sure addTodo works
  // 1. add another method to this app object that loops over the todos array
  // and adds an <li> to the ul#todo-list
  // name suggestions: printTodos or displayTodos etc
  // 2. test: you should be able to add some todos with the form, then call printTodos() 
  // from the console and they should appear on the screen
  // 3. once that works, then call printTodos() from inside addTodo() after the ToDo
  // is pushed so that addingTodo automatically calls printTodos()
  // so that the user can see what they added on the screen
  // 4. a funny thing will happen if user adds a few todos -- how can you fix it?
  printTodos: function() {
    // grab the ul
    const ul = document.querySelector('#todo-list')

    // delete the old lis
    ul.innerHTML = ""

    // loop over this.todos and reprint the list
    for(let i = 0; i < this.todos.length; i++) {
      let todo = this.todos[i]
      // create li
      const li = document.createElement('li')
      // set text 
      li.innerText = todo.itemContent
      // append to ul
      ul.appendChild(li)
    }

  }


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
  // console.log(itemTextInput.value);

  // call app.addTodo, pass in the text from the input field
  app.addTodo(itemTextInput.value)

  // clear the form 
  itemTextInput.value = ""

})

// note: form submission also automatically happens when you hit enter
// (while an element in the form is focused)


// ex:
// make the text in the form print to the console when the form is submitted
// google: "how do I get the input from a form field MDN"
// bonus: also clear the input field when form is submitted


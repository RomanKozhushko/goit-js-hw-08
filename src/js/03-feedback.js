
const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";




  const email = form.elements.email.value;
  const message = form.elements.message.value;
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ email, message }));

form.addEventListener("submit", saveItem);  
function saveItem(event) {
  event.preventDefault();
  form.reset();
}


// updateOutput();   
window.addEventListener('DOMContentLoaded', updateOutput);
function updateOutput(event) {
  form.elements.email.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email;
  form.elements.message.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message;

}
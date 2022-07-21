
const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";




form.addEventListener("submit", saveItem);

function saveItem(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ email, message }));
  form.reset();
}


updateOutput();   

function updateOutput() {
  output.email = localStorage.getItem(LOCALSTORAGE_KEY) || "";
  output.message = localStorage.getItem(LOCALSTORAGE_KEY) || "";
}
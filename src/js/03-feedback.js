
const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";




form.addEventListener("submit", saveItem);

function saveItem(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ email, message }));

}


   
//    
//   updateOutput();
//   form.reset();
// }


// function updateOutput() {
//   output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
// }
    
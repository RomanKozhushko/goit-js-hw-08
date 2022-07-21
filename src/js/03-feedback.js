import throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";

// throttle(inputItem, 500)
//1.Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message. 
form.addEventListener("input", throttle(inputItem, 500));  
function inputItem(event) {
  event.preventDefault();
  const email = event.currentTarget.email.value;
  const message = event.currentTarget.message.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ email, message }));
  
}
window.addEventListener('DOMContentLoaded', updateOutput);

function updateOutput() {
   email.value == JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email;
  message.value == JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message;
    };

 // 3. Під час сабміту форми очищуй сховище і поля форми,
 // а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
form.addEventListener("submit", reset);  

  function reset(event) {
    event.preventDefault();
    let itemArr = {
      email: JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email,
      message: JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message,
    }
    console.log(itemArr);
    form.reset();
    localStorage.clear();
   
  }
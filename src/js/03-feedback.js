import throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";


// Форма введення
const formInput = {
    email : form.email.value,
    message : form.message.value,
};
// 1. Відстежую на формі подію input, і щоразу записую у локальне сховище об'єкт з полями email і message, та встановлюємо ТРОТТТЛ!!
form.addEventListener("input", throttle(onFormInput, 500));
function onFormInput (event) {
  formInput[event.target.name] = event.target.value
  // console.log(formInput);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formInput));
}
// 3. Сабміт - 
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  // Порпередження перезавантаження!
    event.preventDefault();
    const formSubmit = {
       email : event.currentTarget.email.value,
       message : event.currentTarget.message.value,
  }
// Виведення в консоль масиву даних з локал сториджу
    console.log(formSubmit)
// 4. Видалення ключа зберігання даних
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
}
//Заповнення форми після перезаванаження, якщо є дані в Локал сториджі
window.addEventListener('DOMContentLoaded', updateOutput);
function updateOutput() {
  const localInput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  // перевірка наявності даних
  if (!localInput) return;
  email.value = localInput.email;
  message.value = localInput.message;
}











































// // throttle(inputItem, 500)
// //1.Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message. 
// form.addEventListener("input", throttle(inputItem, 500));  
// function inputItem(event) {
//   const email = event.currentTarget.elements.email.value;
//   const message = event.currentTarget.elements.message.value;
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ email, message }));
// }
//     if (!LOCALSTORAGE_KEY) {
//     return;
// }
// // перезавантаження!!!
// window.addEventListener('DOMContentLoaded', updateOutput);
// function updateOutput() {
//     email.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email;
//     message.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message;
//   };

//  // 3. Під час сабміту форми очищуй сховище і поля форми,
//  // а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// form.addEventListener("submit", reset);  
// function reset(event) {
 
//   event.preventDefault();

//     let itemArr = {
//       email: JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email,
//       message: JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message,
//     }
   
//   console.log(itemArr);
 
//       form.reset();
//       localStorage.clear();
//   }
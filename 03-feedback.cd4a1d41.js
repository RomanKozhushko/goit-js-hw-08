const e=document.querySelector(".feedback-form");e.addEventListener("submit",(function(t){t.preventDefault();const a=e.elements.email.value,s=e.elements.message.value;localStorage.setItem("feedback-form-state",JSON.stringify({email:a,message:s}))}));
//# sourceMappingURL=03-feedback.cd4a1d41.js.map

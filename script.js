const form = document.querySelector(".form");
const input = document.querySelector(".input");
const errorText = document.querySelector(".error-text");
const confirmation = document.querySelector(".confirmation");

function validate() {
  const emailFormat = /^\w+([\.-]?\w+)a*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if (!emailFormat.test(input.value.trim())) {
    input.classList.add("error-input");
    errorText.classList.remove("hidden");
    errorText.innerHTML = "Please provide a valid email address";
    
    return false;
  }
  
  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  if (validate()) {
    form.classList.add("hidden");
    confirmation.classList.remove("hidden");
  }
});
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

let MainImg = document.getElementById("MainImg");
let smallImg = document.getElementsByClassName("small-img");

if (smallImg !== undefined && smallImg.length > 0) {
  for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function () {
      MainImg.src = smallImg[i].src;
    };
  }
}



const form = document.querySelector("form");
const nameInput = form.querySelector('input[type="name"]');
const emailInput = form.querySelector('input[type="email"]');
const phoneInput = form.querySelector('input[name="phone"]');
const textareaInput = form.querySelector('textarea[name="textarea"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  if (nameValue === "") {
    showError(nameInput, "Please enter your name.");
    return;
  }

  const emailValue = emailInput.value.trim();
  if (emailValue === "") {
    showError(emailInput, "Please enter your email.");
    return;
  } else if (!isEmailValid(emailValue)) {
    showError(emailInput, "Please enter a valid email address.");
    return;
  }

  const phoneValue = phoneInput.value.trim();
  if (phoneValue !== "" && !validatePhone(phoneValue)) {
    showError(phoneInput, "Please enter a valid phone number.");
    return;
  }

 
  const textareaValue = textareaInput.value.trim();
  if (textareaValue === "") {
    showError(textareaInput, "Please enter your message.");
    return;
  }

  form.submit();
});

function showError(input, message) {
  const errorElement = document.createElement("div");
  errorElement.classList.add("error");
  errorElement.innerText = message;

  const inputContainer = input.parentElement;
  inputContainer.appendChild(errorElement);

  input.classList.add("error-input");
  input.focus();

  setTimeout(() => {
    errorElement.remove();
    input.classList.remove("error-input");
  }, 3000);
}

function validatePhone(phone) {
  let re = /^[0-9\s]+$/;
  return re.test(String(phone));
}

function isEmailValid(email) {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return EMAIL_REGEXP.test(email);
}

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

function validatePhone(phone) {
  let re = /^[0-9\s]*$/;
  return re.test(String(phone));
}
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const INPUT = document.querySelector("input");

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

function updateInput() {
  if (isEmailValid(INPUT.value)) INPUT.style.borderColor = "green";
  else INPUT.style.borderColor = "red";
}

INPUT.addEventListener("input", updateInput);

const form = document.querySelector("form");
const textarea = form.elements.textarea;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = textarea.value;

  if (!value.trim()) {
    alert("Error!");
    return;
  }

  if (/\n.*\n.*\n/.test(value)) {
    alert("Error!");
    return;
  }

  form.submit();
});
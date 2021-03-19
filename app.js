const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("emailAddress");
const password2 = document.getElementById("passwordCheck");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  //   const passwordCheckValue = password2.value.trim();
  if (usernameValue === "") {
    setError(username, "Username cannot be blank.");
  } else {
    setSucces(username);
  }

  if (emailValue === "") {
    setError(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setError(email, "Email is not valid");
  } else {
    setSucces(email);
  }

  if (passwordValue === "") {
    setError(password, "Password Cannot be Blank");
  } else {
    setSucces(password);
  }

  if (passwordCheckValue === "") {
    setError(passwordCheck, "Password Cannot be Blank");
  } else if (passwordCheckValue !== passwordValue) {
    setError(passwordCheck, "Password doesnot match");
  } else {
    setSucces(passwordCheck);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}
function setSucces(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

import validate from "./validate.js"

const [form, error, name, email, password, password_check, dob, submit]
  = ["form", "error", "name","email", "password", "password-check", "dob", "submit"]
  .map(id=>document.querySelector(`#${id}`));

console.log([form, error, name, email, password, password_check, dob, submit])
const validation = [{ element: name, test: validate.word, error: "Name must be just one word and begin with a capitol."},
  { element: email, test: validate.email,
    error: "email is not a valid email address."},
  { element: password, test: validate.password,
    error: "Password must be mixed case and include at least one a digit and at least one special character"},
  { element: password_check, test: validate.identical(()=>password.value),
    error:"The passwords do not match."}

]
const appendError = text => {
  const errorElement = document.createElement("li");
  errorElement.textContent = text;
  error.appendChild(errorElement);
}

form.onsubmit = (e) => {
  error.innerHTML = "";
  const errors = validate.check(validation);
  console.table(errors);
  if(errors.length !== 0)
  {
    errors.forEach(appendError);
    e.preventDefault()

  }

};

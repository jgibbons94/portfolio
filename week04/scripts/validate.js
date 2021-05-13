const check = (list, {element, test, error}) => test(element.value) ? list : list.concat(error)
const validate = {
  email : text => /[\w.+]+@\w[\w]*/.test(text),
  password : text =>
  /[a-z]/.test(text) &&
  /[A-Z]/.test(text) &&
  /[0-9]/.test(text) &&
  /[!@#$%^&*_+= ]/.test(text),
  identical : fntext1 => text2 => fntext1() === text2,
  word : text => /[A-Z][a-z]*/.test(text) && !(/\s/.test(text)),
  check : checklist => checklist.reduce(check, [])
}

export default validate

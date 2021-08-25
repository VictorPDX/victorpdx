let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
console.log("BEFORE\n======= Form Submission ========");

function handleSubmit(event) {
  // Console log the form input
  console.log(event);
  console.log("======= Form Submission ========");
  if (form.first_name.value)
    console.log(`First Name: ${form.first_name.value}`);
  else console.log(`First Name: empty :-(`);
  if (form.last_name.value) console.log(`Last Name: ${form.last_name.value}`);
  else console.log(`Last Name: empty :-(`);
  if (form.email.value) console.log(`Email: ${form.email.value}`);
  else console.log(`Email: no submission`);

  event.preventDefault();
}

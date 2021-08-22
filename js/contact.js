let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // Console log the form input
  console.log("======= Form Submission ========");
  if (form.first_name.value)
    console.log(`First Name: ${form.first_name.value}`);
  else console.log(`First Name: empty :-(`);
  if (form.email.value) console.log(`Email: ${form.email.value}`);
  else console.log(`Email: no submission`);
  if (form.last_name.value) console.log(`Last Name: ${form.last_name.value}`);
  else console.log(`Last Name: empty :-(`);
  if (form.date.value) console.log(`Date: ${form.date.value}`);
  else console.log(`Date: no submissoin`);

  event.preventDefault();
}

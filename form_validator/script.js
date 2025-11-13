
const form = document.getElementById("myForm");
const inputs = document.querySelectorAll("input");
const successMsg = document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  let valid = true;
  successMsg.classList.add("hidden"); 

  inputs.forEach((input) => {
    const error = input.nextElementSibling;

 
    if (input.value.trim() === "") {
      input.style.borderColor = "red";
      error.textContent = `⚠️ ${input.placeholder} is required`;
      valid = false;
    } else {
      input.style.borderColor = "#4CAF50";
      error.textContent = "";
    }
  });


  if (valid) {
    successMsg.classList.remove("hidden");
    form.reset();
    inputs.forEach((input) => (input.style.borderColor = "#ccc"));
  }
});


inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.style.borderColor = "#4CAF50";
  });

  input.addEventListener("blur", () => {
    if (input.value.trim() === "") {
      input.style.borderColor = "red";
    } else {
      input.style.borderColor = "#4CAF50";
    }
  });
});

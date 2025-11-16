const form = document.getElementById("myForm");
const inputs = document.querySelectorAll("input");
const successMsg = document.getElementById("success");


//  Load saved data on page load

window.addEventListener("DOMContentLoaded", () => {
  inputs.forEach((input) => {
    const savedValue = localStorage.getItem(input.id); 
    if (savedValue) {
      input.value = savedValue;
      input.style.borderColor = "#4CAF50";
    }
  });
});

//  Save data to localStorage on typing

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    localStorage.setItem(input.id, input.value);
  });
});


//  Form Submit Validation

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

    // Save form data to localStorage permanently on submit
    inputs.forEach((input) => {
      localStorage.setItem(input.id, input.value);
    });
  }
});


//  Focus & Blur Events

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

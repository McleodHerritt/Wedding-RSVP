// Initialize EmailJS with the provided user ID

emailjs.init("P3fVd9p39qC3J3QNg");

// Get the form element from the DOM

var form = document.querySelector("form");

// Add an event listener to the form to handle the submit event

form.addEventListener("submit", submitForm);

// Data object to store the form input values

var data = {
  guestName: "",
  attendance: false,
  plusOne: false,
  guestOne: "",
  foodAllergy: false,
  typeOfAllergy: "",
  foodOption: "",
};

// Function to handle the form submission

function submitForm(event) {
  // Prevent the default form submission behavior

  event.preventDefault();

  // Get and store the values from the form inputs in the data object

  data.guestName = document.getElementById("name").value;
  data.attendance = document.querySelector(
    'input[name="attendance"]:checked'
  ).value;

  data.plusOne = document.querySelector('input[name="plusOne"]:checked').value;

  data.guestOne = document.getElementById("guestOne").value;

  data.foodAllergy = document.querySelector(
    'input[name="allergies"]:checked'
  ).value;

  data.foodOption = document.querySelector(
    'input[name="selectedFood"]:checked'
  ).value;

  data.typeOfAllergy = document.getElementById("allergyType").value;

  // Call the function to send the data as an email

  sendDataToEmail();

  // Reset the form inputs to their default values after submission

  document.getElementById("name").value = "";
  document.querySelector('input[name="attendance"]:checked').checked = false;
  document.getElementById("guestOne").value = "";
  data.guestOne = document.querySelector(
    'input[name="plusOne"]:checked'
  ).checked = false;
  data.foodAllergy = document.querySelector(
    'input[name="allergies"]:checked'
  ).checked = false;
  data.typeOfAllergy = document.getElementById("allergyType").value = "";
}

// Function to send the collected data as an email using EmailJS

function sendDataToEmail() {
  console.log(data);

  // Construct the email content using the collected data

  const emailContent = `
    Guest Name: ${data.guestName}
    Attendance: ${data.attendance}
    Plus One: ${data.plusOne}
    Guest One: ${data.guestOne}
  `;

  // Send the email using EmailJS

  emailjs
    .send("service_nqrqqva", "template_7ehj68r", {
      message: emailContent,
    })
    .then((response) => {
      console.log("Email successfully sent!", response);
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
    });
}

// TODO: add functionality for the food allergy display.
let allergyRadioBtn = document.getElementsByName("allergies");
let allergenInfoEl = document.getElementById("allergenInfo");
let allergyTypeEl = document.getElementById("allergyType");
let selectedFoodRadioBtn = document.getElementsByName("selectedFood");
let foodChoiceEL = document.getElementById("foodChoice");

function allergyWarning(event) {
  event.preventDefault();
  if (allergyRadioBtn[0].checked) {
    allergyTypeEl.style.display ='block';
    allergenInfoEl.textContent =
      "Warning, the Vegetarian Lasagna contains healthy stuff that you're probably allergic to.";
    foodChoiceEL.textContent = "";
  } else if (allergyRadioBtn[1].checked) {
    allergyTypeEl.style.display ='none';
    allergenInfoEl.textContent = "";
    foodChoiceEL.textContent = "";
  }
}

for (let i = 0; i < allergyRadioBtn.length; i++) {
  allergyRadioBtn[i].addEventListener("change", allergyWarning);
}
// TODO: add functionality of food selection.

function foodSelection(event) {
  event.preventDefault();
  if (!allergyRadioBtn[0].checked && !allergyRadioBtn[1].checked) {
    foodChoiceEL.textContent = "Please inform us wether or not you have a food allergy.";
    for (let k = 0; k < selectedFoodRadioBtn.length; k++) {
      selectedFoodRadioBtn[k].checked = false;
    }
    return;
  }
  if (selectedFoodRadioBtn[0].checked) {
    foodChoiceEL.textContent = "You have selected Chicken, it's finger lickin' good!";
  } else if (selectedFoodRadioBtn[1].checked) {
    foodChoiceEL.textContent = "You have selected Beef, make sure that you dodge the cow the frenchman is hurtling towards you!";
  } else if (selectedFoodRadioBtn[2].checked) {
    foodChoiceEL.textContent = "You have selected Vegetarian Lasagna, you can now fight Bowser!";
  } else {
    foodChoiceEL.textContent = "";
  }
}

for (let j = 0; j < selectedFoodRadioBtn.length; j++) {
  selectedFoodRadioBtn[j].addEventListener("change", foodSelection);
}

//Countdown

const targetDate = new Date("2024-05-03T23:00:00").getTime();

const countdownInterval = setInterval(function () {
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  const timerElement = document.getElementById("countdown-timer");
  timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeRemaining <= 0) {
    clearInterval(countdownInterval);
    timerElement.innerHTML = "";
  }
}, 1000);

//local storage for issue #7

document.addEventListener("DOMContentLoaded", function () {
  const btnYes = document.getElementById("yes");

  const attendanceString = localStorage.getItem("attendance");
  let attendance = attendanceString === "true";

  btnYes.textContent = attendance ? "true" : "false";

  btnYes.addEventListener("click", function () {
    attendance = !attendance;
    btnYes.textContent = attendance ? "true" : "false";

    localStorage.setItem("attendance", attendance.toString());
  });
});

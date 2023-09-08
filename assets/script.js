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

  // Call the function to send the data as an email

  sendDataToEmail();

  // Reset the form inputs to their default values after submission

  document.getElementById("name").value = "";
  document.querySelector('input[name="attendance"]:checked').checked = false;
  document.getElementById("guestOne").value = "";
  data.guestOne = document.querySelector(
    'input[name="plusOne"]:checked'
  ).checked = false;
}

// Function to send the collected data as an email using EmailJS

function sendDataToEmail() {
  console.log(data.guestName);
  console.log(data.attendance);
  console.log(data.plusOne);
  console.log(data.guestOne);

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

function allergyWarning() {
  if(allergyRadioBtn[0].checked) {
    allergenInfoEl.textContent = "Warning, the Vegetarian Lasagna contains healthy stuff that you're probably alergic to.";
  } else if (allergyRadioBtn[1].checked) {
    allergenInfoEl.textContent = "";
  }
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

document.addEventListener('DOMContentLoaded', function() {
  const btnYes = document.getElementById('yes');

  const attendanceString = localStorage.getItem('attendance');
  let attendance = attendanceString === "true";

  btnYes.textContent = attendance ? "true" : "false";

  btnYes.addEventListener('click', function () {
    attendance = !attendance; 
    btnYes.textContent = attendance ? "true" : "false";

    localStorage.setItem("attendance", attendance.toString());
  });
});


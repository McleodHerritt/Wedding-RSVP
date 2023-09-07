emailjs.init("P3fVd9p39qC3J3QNg");

var form = document.querySelector("form");
form.addEventListener("submit", submitForm);

var data = {
  guestName: "",
  attendance: false,
  plusOne: false,
  guestOne: "",
  // add additional keys to object to send to email
};

function submitForm(event) {
  event.preventDefault();

  data.guestName = document.getElementById("name").value;
  data.attendance = document.querySelector(
    'input[name="attendance"]:checked'
  ).value;

  data.plusOne = document.querySelector('input[name="plusOne"]:checked').value;

  data.guestOne = document.getElementById("guestOne").value;

  //   TODO: get additional information before sending to email
  sendDataToEmail();

  document.getElementById("name").value = "";
  document.querySelector('input[name="attendance"]:checked').checked = false;
  document.getElementById("guestOne").value = "";
  data.guestOne = document.querySelector(
    'input[name="plusOne"]:checked'
  ).checked = false;
}

function sendDataToEmail() {
  console.log(data.guestName);
  console.log(data.attendance);
  console.log(data.plusOne);
  console.log(data.guestOne);

  const emailContent = `
    Guest Name: ${data.guestName}
    Attendance: ${data.attendance}
    Plus One: ${data.plusOne}
    Guest One: ${data.guestOne}
  `;
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

//

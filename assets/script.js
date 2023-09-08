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
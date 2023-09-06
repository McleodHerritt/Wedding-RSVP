var form = document.querySelector("form");
form.addEventListener("submit", submitForm);

var data = {
  guestName: "",
  attendance: false,
  // add additional keys to object to send to email
};

function submitForm(event) {
  event.preventDefault();

  data.guestName = document.getElementById("name").value;
  data.attendance = document.querySelector(
    'input[name="attendance"]:checked'
  ).value;

  //TODO: get additional information before sending to email
  sendDataToEmail();

  document.getElementById("name").value = "";
  document.querySelector('input[name="attendance"]:checked').checked = false;
}

function sendDataToEmail() {
  console.log(data.guestName);
  console.log(data.attendance);
}

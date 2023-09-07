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


//Countdown 

const targetDate = new Date("2024-05-03T23:00:00").getTime();

 
const countdownInterval = setInterval(function() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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

//Attendance 

// localStorage.setItem('attendance', )




localStorage.setItem('attendance', "true");


const btnYes = document.getElementById('yes');

const attendanceString = localStorage.getItem('attendance');

const attendance = attendanceString === "true"; 

btnYes.textContent = attendance ? "true" : "false";


btnYes.addEventListener('click', function() {
  attendance = !attendance;

  btnYes.textContent = attendance ? "true" : "false";

  localStorage.setItem("attendance", attendance.toString());
  console.log();
});



// if (attendanceString === "true") {
//   btnYes.textContent = "true";
// } else {
//   btnYes = "false";
// }


// btnYes.addEventListener("click", () => {
//   if (btnYes.textContent === "true") {
//     btnYes.textContent = "false";
//     localStorage.setItem("attendance", "false")
//   } else {
//     btnYes.textContent = "true";
//     localStorage.setItem("attendance", "true")
//   }
// });


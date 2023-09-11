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

function allergyWarning() {
  if (allergyRadioBtn[0].checked) {
    allergenInfoEl.textContent =
      "Warning, the Vegetarian Lasagna contains healthy stuff that you're probably alergic to.";
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





//are you attending? 

//Name input field 

$(document).ready(function () {
  var savedName = localStorage.getItem('userName'); //checking for name in local storage
  if (savedName) {
    $('#name').val(savedName); //name is found from local storage and displayed in the field 
  }

  $('#name').on('input', function() {  //event handler for "name" field
    var name = $(this).val(); //get the name from the input field

    if (name.trim() !== '') {
      localStorage.setItem('userName', name); //save the name to local storage
    }
  });
});



//Yes/No radio buttons
$('input[type="radio"]').change(function() {
  const selectedAttendance = $('input[name="attendance"]:checked').val();
  localStorage.setItem("attendance", selectedAttendance);
});

const savedAttendance = localStorage.getItem("attendance");
if (savedAttendance) {
  $(`input[value="${savedAttendance}"]`).prop("checked", true);
}

//Do you have a guest? 


//Yes/No radio buttons
$('input[type="radio"]').change(function() {
  const selectedGuest = $('input[name="plusOne"]:checked').val();
  localStorage.setItem("plusOne", selectedGuest);
});

const savedGuest = localStorage.getItem("plusOne");
if (savedGuest) {
  $(`input[value="${savedGuest}"]`).prop("checked", true);
}

//guest name

$(document).ready(function () {
  var guestName = localStorage.getItem('guestName'); 
  if (guestName) {
    $('#guestOne').val(guestName); 
  }

  $('#guestOne').on('input', function() {  
    var name = $(this).val(); 

    if (name.trim() !== '') {
      localStorage.setItem('guestName', name); 
    }
  });
});


//do you have food allergies? 

//radio buttons yes/no 

$('input[type="radio"]').change(function() {
  const allergyType = $('input[name="allergies"]:checked').val();
  localStorage.setItem("allergies", allergyType);
});

const allergySave = localStorage.getItem("allergies");
if (allergySave) {
  $(`input[value="${allergySave}"]`).prop("checked", true);
}



//allergy specification 

$(document).ready(function () {
  var allergySpec= localStorage.getItem('allergyType'); 
  if (allergySpec) {
    $('#allergyType').val(allergySpec); 
  }

  $('#allergyType').on('input', function() {  
    var name = $(this).val(); 

    if (name.trim() !== '') {
      localStorage.setItem('allergyType', name); 
    }
  });
});

//food option 

$('input[type="radio"]').change(function() {
  const foodSelection = $('input[name="selectedFood"]:checked').val();
  localStorage.setItem("allergies", foodSelection);
});

const foodSave = localStorage.getItem("foodItem");
if (foodSave) {
  $(`input[value="${foodSave}"]`).prop("checked", true);
}


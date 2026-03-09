console.log("Login functionality comming");

document.getElementById("login-btn").addEventListener("click", function () {
  //1- get the mobile number input
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;
  console.log(contactNumber);

  //2- get the pin input
  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;
  console.log(pin);
  
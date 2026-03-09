document.getElementById("add-money-btn").addEventListener("click", function () {
  //1 - bank account get
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select a Bank") {
    alert("please select a bank");
    return;
  }
  //2 - get bank account number
  const accno = getValueFromInput("add-money-number");
  if (accno.length != 11) {
    alert("invalid acc no");
    return;
  }
function total(myForm) {
  var total = 0.0;
  var tax = 0.0625;
  var discount = 0.1;
  var hotdogs = parseInt(document.getElementById("hotdogs").value) * 3.25;
  var fries = parseInt(document.getElementById("fries").value) * 2.0;
  var drink = parseInt(document.getElementById("drinks").value) * 1.5;

  total += hotdogs + fries + drink;

  if (total >= 20) {
    total = total - total * discount;
  }
  total += total * tax;
  var result = Math.round(total * 100) / 100;
  alert(
    "Hotdogs x " +
      document.getElementById("hotdogs").value +
      " = " +
      hotdogs +
      "\n Fries x " +
      document.getElementById("fries").value +
      " = " +
      fries +
      "\n Drinks x " +
      document.getElementById("drinks").value +
      " = " +
      drink +
      "\n Tax 6.25% \n Your total is: " +
      result +
      ""
  );
}

function blank(myForm) {
  document.getElementById("hotdogs").value = 0;
  document.getElementById("fries").value = 0;
  document.getElementById("drinks").value = 0;
}

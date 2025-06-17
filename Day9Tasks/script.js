function appendValue(val) {
  document.getElementById("display").value += val;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculate() {
    document.getElementById("display").value = eval(document.getElementById("display").value);
}
function deleteLast() {
    document.getElementById("display").value = document.getElementById("display").value.slice(0, -1);
}

document.getElementById("display").addEventListener("keypress", function(event) {
  if (event.key === "Enter" || event.key === "=") {
    calculate();
  }
});